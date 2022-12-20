import React from 'react'
import { Flex, Box } from 'theme-ui'
import memoize from 'memoize-one'
import { convertToHTML } from 'draft-convert'
import parse, { domToReact } from 'html-react-parser'
import { BlobProvider, Document, Page, View, Text, StyleSheet, Image, Font } from '@react-pdf/renderer'
import { SpinnerWithDelay as Spinner } from 'components'

const defaultGroupsSettings = {
  'TÍTULO': {
    active: true,
    title: 'Título',
    titleIsBold: true,
    formatting: 'SAMELINE',
    order: 0
  },
  'INDICAÇÃO CLÍNICA': {
    active: true,
    title: 'Indicação Clínica:',
    titleIsBold: true,
    formatting: 'SAMELINE',
    order: 1
  },
  'INTRODUÇÃO': {
    active: true,
    title: 'Introdução:',
    titleIsBold: true,
    formatting: 'SAMELINE',
    order: 2
  },
  'TABELAS E ILUSTRAÇÕES': {
    active: true,
    title: 'Tabelas e Ilustrações',
    titleIsBold: true,
    formatting: 'WITHBREAK',
    order: 3
  },
  'ANÁLISE': {
    active: true,
    title: 'Análise',
    titleIsBold: true,
    formatting: 'WITHBREAK',
    order: 4
  },
  'IMPRESSÃO': {
    active: true,
    title: 'Impressão:',
    titleIsBold: true,
    formatting: 'SAMELINE',
    order: 5
  },
  'OBSERVAÇÃO': {
    active: true,
    title: 'Achados adicionais:',
    titleIsBold: true,
    formatting: 'SAMELINE',
    order: 6
  },
  'NOTA': {
    active: true,
    title: '',
    titleIsBold: false,
    formatting: 'WITHBREAK',
    order: 7
  }
}

// const defaultDocumentTheme = {
//   paper: docSettings.paper,

//   color: docSettings.color,

//   fontSize: docSettings.fontSize || 12,
//   fontFamily: docSettings.fontFamily || 'Arial',
//   lineHeight: docSettings.lineHeight || 1.2,

//   topMargin: docSettings.topMargin,
//   bottomMargin: docSettings.bottomMargin,
//   leftMargin: docSettings.leftMargin,
//   rightMargin: docSettings.rightMargin,

//   showPageNumber: docSettings.showPageNumber,
//   pageNumberDistanceFromBottom: docSettings.pageNumberDistanceFromBottom,
//   pageNumberAlign: 'right',
//   pageNumberColor: 'black',
//   pageNumberFontSize: docSettings.fontSize || 12,
//   pageNumberFontFamily: docSettings.fontFamily || 'Arial',
//   pageNumberFontWeight: 700,

//   showSignature: docSettings.showSignature,
//   signatureText: docSettings.signatureText,
//   signatureSettings: docSettings.signatureSettings,
//   signatureAlign: docSettings.signatureAlign,
//   signatureAdditionalText: docSettings.signatureAdditionalText,
//   signatureAdditionalImage: docSettings.signatureAdditionalImage,
//   signatureMarginTop: docSettings.signatureMarginTop,

//   showTop: docSettings.showTop,
//   topHeight: docSettings.topHeight,
//   topImageUrl: docSettings.topImageUrl,

//   showBottom: docSettings.showBottom,
//   bottomHeight: docSettings.bottomHeight,
//   bottomImageUrl: docSettings.bottomImageUrl,

//   showData: docSettings.showData,
//   dataHeight: docSettings.dataHeight,
//   dataBgColor: docSettings.dataBgColor,
//   dataBorderColor: docSettings.dataBorderColor,
//   dataBorderWidth: docSettings.dataBorderWidth,
//   dataColor: docSettings.dataColor,
//   dataFontFamily: docSettings.dataFontFamily,
//   dataFontSize: docSettings.dataFontSize,
//   dataHasBg: docSettings.dataHasBg,
//   dataHasBorder: docSettings.dataHasBorder,
//   dataLineHeight: docSettings.dataLineHeight
// })

const BlobProviderWrapper = ({ document, children }) => {
  return (
    <BlobProvider key={Math.random()} document={document}>
      {({ blob, url, loading, error }) => {
        if (error) return null
        if (loading) return null
        if (url) return children({ blob, url })
      }}
    </BlobProvider>
  )
}

function convertContentStateToHtml(contentState) {
  return convertToHTML({
    styleToHTML: (style) => {
      if (style === 'BOLD') {
        return <strong />
      }
      if (style === 'ITALIC') {
        return <em />
      }
    },
    blockToHTML: (block) => {
      if (block.key === 'b9870') { // NOTA
        return <blockquote />
      }

      if (block.data && block.data.textAlign) {
        return <p style={{ textAlign: block.data.textAlign }} />
      }

      if (block.type === 'PARAGRAPH') {
        return <p />
      } else if (block.text) { // Bug que aparecia type image em textos
        return <p />
      } else if (block.type === 'image') {
        return <img src={block.data.src} alt='' />
      }
    }
  })(contentState)
}

function useConvertPdf(contentState) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [html, setHtml] = useState(null)

  React.useEffect(() => {
    try {
      setLoading(true)
      const tempHtml = convertContentStateToHtml(contentState)
      setHtml(tempHtml)
      setLoading(false)
    } catch(err) {
      console.error(err.message)
      setError(err)
      setLoading(false)
    }
  }, [contentState])

  return { loading, error, html }
}

function BlobProviderIframe({ generatedDocument }) {
  return (
    <BlobProviderWrapper document={generatedDocument}>
      {({ blob, url }) => {
        if (url) return (
          <>
            <Box>
              <Flex>
                {/* <Box><a title='Download' href={url} download='laudo.pdf' css={css`display: inline-block; padding: 6px; color: inherit;`}><GenericIcon iconPath='M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z' /></a></Box> */}
                {/* <Box><span title='Imprimir' css={css`display: inline-block; cursor: pointer; padding: 6px; color: inherit;`} onClick={() => { window.frames[0].focus(); window.frames[0].print() }}><GenericIcon iconPath='M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z' /></span></Box> */}
                {/* <Box><span title='Enviar laudo por email' css={css`display: inline-block; cursor: pointer; padding: 6px; color: inherit;`} onClick={() => onUploadPdf(blob)}><GenericIcon iconPath='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' /></span></Box> */}
              </Flex>
            </Box>
            <Box>
              <iframe title='PDF' width='100%' style={{ width: '100%', height: '500px' }} src={`${url}#view=Fit`} />
            </Box>
          </>
        )
      }}
    </BlobProviderWrapper>
  )
}

const convertHtmlToDocument = memoize((html, style = {}, textFactor = 0) => {
  html = html.replace(/<p><\/p>/g, '<br/>')

  let spacingBetweenGroups = 1.0
  if (textFactor === 1) spacingBetweenGroups = 1.2
  if (textFactor === 2) spacingBetweenGroups = 1.4
  if (textFactor === -1) spacingBetweenGroups = 0.8
  if (textFactor === -2) spacingBetweenGroups = 0.5

  const baseStyle = StyleSheet.create({ ...style })

  const options = {
    replace: ({ name, attribs, children }) => {
      if (name === 'blockquote') {
        const blockquoteFontSize = 10 + textFactor
        return <Text style={{ ...baseStyle, fontSize: blockquoteFontSize }}>{domToReact(children, options)}</Text>
      }
      if (name === 'p') {
        if (children.length === 0) {
          return <Text style={{ lineHeight: spacingBetweenGroups }}>{'\u00A0'}</Text>
        }
        if (attribs.style && attribs.style.includes('text-align:center')) {
          return <Text style={{ ...baseStyle, textAlign: 'center' }}>{domToReact(children, options)}</Text>
        } else if (attribs.style && attribs.style.includes('text-align:right')) {
          return <Text style={{ ...baseStyle, textAlign: 'right' }}>{domToReact(children, options)}</Text>
        }
        return <Text style={{ ...baseStyle }}>{domToReact(children, options)}</Text>
      }
      if (name === 'strong') {
        return <Text style={{ ...baseStyle, fontWeight: 700 }}>{domToReact(children, options)}</Text>
      }
      if (name === 'em') {
        return <Text style={{ ...baseStyle, fontStyle: 'italic'}}>{domToReact(children, options)}</Text>
      }
      if (name === 'u') {
        return <Text style={{ ...baseStyle, textDecoration: 'underline' }}>{domToReact(children, options)}</Text>
      }
      if (name === 'img' && attribs.src) {
        return <Image src={attribs.src} />
      } else if (name === 'img') {
        return <Text>{'\u00A0'}</Text>
      }
      if (name === 'br') {
        return <Text>{'\u000A'}</Text>
      }
    }
  }

  return parse(cleanInvisibleChars(html), options)
})

// Font.register({ family: 'Arial', fonts: [
//   { src: `//${window.location.host}/arial.ttf` },
//   { src: `//${window.location.host}/arial-italic.ttf`, fontStyle: 'italic' },
//   { src: `//${window.location.host}/arial-bold.ttf`, fontWeight: 700 },
// ]})

// Font.register({ family: 'Calibri', fonts: [
//   { src: `//${window.location.host}/calibri.ttf` },
//   { src: `//${window.location.host}/calibri-italic.ttf`, fontStyle: 'italic' },
//   { src: `//${window.location.host}/calibri-bold.ttf`, fontWeight: 700 },
// ]})

// Font.registerHyphenationCallback((word) => ([word]))

function cleanInvisibleChars(text) {
  if (!text) return text
  text = text.replace(/[\u200B-\u200D\uFEFF]/g, '')
  text = text.replace(/c\u0327/g, 'ç')
  text = text.replace(/a\u0302/g, 'â')
  text = text.replace(/e\u0302/g, 'ê')
  text = text.replace(/o\u0302/g, 'ô')
  text = text.replace(/a\u0303/g, 'ã')
  text = text.replace(/a\u0301/g, 'á')
  text = text.replace(/a\u0300/g, 'à')
  text = text.replace(/e\u0301/g, 'é')
  text = text.replace(/i\u0301/g, 'í')
  text = text.replace(/o\u0301/g, 'ó')
  text = text.replace(/u\u0301/g, 'ú')
  return text
}

function generateDocument(html, examination, headerContent = '', documentTheme = {}) {
  const textFactor = examination?.textFactor || 0
  let mainFontSize = documentTheme?.fontSize ? Number(documentTheme.fontSize) : 12
  mainFontSize = mainFontSize + textFactor

  const pixelsByMm = 2.8

  const doc = convertHtmlToDocument(html, { fontSize: mainFontSize }, textFactor)
  const headerContentDoc = convertHtmlToDocument(headerContent)

  let {
    paper,
    color,
    fontFamily,
    fontSize,

    topMargin,
    bottomMargin,
    leftMargin,
    rightMargin,
    lineHeight,

    showTop,
    topHeight,
    showBottom,
    bottomHeight,

    showPageNumber,
    pageNumberDistanceFromBottom,
    pageNumberAlign,
    pageNumberColor,
    pageNumberFontSize,
    pageNumberFontFamily,

    showSignature,
    signatureText,
    signatureSettings,
    signatureAlign,
    signatureAdditionalText,
    signatureAdditionalImage,
    signatureMarginTop,

    topImageUrl,
    bottomImageUrl,

    showData,
    dataHeight,
    dataBgColor,
    dataBorderColor,
    dataBorderWidth,
    dataColor,
    dataFontFamily,
    dataFontSize,
    dataHasBg,
    dataHasBorder,
    dataLineHeight,
  } = documentTheme

  if (textFactor < 0) {
    lineHeight = Number(lineHeight) - 0.05
  }
  if (textFactor > 0) {
    lineHeight = Number(lineHeight) + 0.1
  }

  fontSize = Number(fontSize) + textFactor

  if (!topImageUrl || !topImageUrl.includes('data:image/png;base64,')) {
    showTop = false
  }
  if (!bottomImageUrl || !bottomImageUrl.includes('data:image/png;base64,')) {
    showBottom = false
  }

  if (!showTop) {
    topHeight = 0
  }
  if (!showBottom) {
    bottomHeight = 0
  }
  if (!showData) {
    dataHeight = 0
  }

  const styles = StyleSheet.create({
    body: {
      paddingTop: ((topMargin + topHeight + dataHeight) * pixelsByMm),
      paddingBottom: ((bottomMargin + bottomHeight) * pixelsByMm),
      paddingLeft: (leftMargin * pixelsByMm),
      paddingRight: (rightMargin * pixelsByMm),
      fontFamily: fontFamily || 'Arial',
      color: color || 'black',
      lineHeight: lineHeight || 1.2,
      fontSize: fontSize || 12,
      textAlign: 'justify'
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 0,
      width: '100%'
    },
    topArea: {
      position: 'absolute',
      top: (topMargin * pixelsByMm),
      left: (leftMargin * pixelsByMm),
      right: (rightMargin * pixelsByMm),
      height: (topHeight * pixelsByMm)
    },
    bottomArea: {
      position: 'absolute',
      bottom: (bottomMargin * pixelsByMm),
      left: (leftMargin * pixelsByMm),
      right: (rightMargin * pixelsByMm),
      height: (bottomHeight * pixelsByMm)
    },
    header: {
      position: 'absolute',
      height: (dataHeight * pixelsByMm),
      top: ((topMargin + topHeight) * pixelsByMm),
      left: (leftMargin * pixelsByMm),
      right: (rightMargin * pixelsByMm)
    },
    pageNumber: {
      position: 'absolute',
      bottom: (pageNumberDistanceFromBottom * pixelsByMm),
      textAlign: pageNumberAlign,
      color: pageNumberColor,
      fontSize: pageNumberFontSize,
      left: (leftMargin * pixelsByMm),
      right: (rightMargin * pixelsByMm),
      fontFamily: pageNumberFontFamily
    },
  })

  const signedAt = examination.signedAt ? examination.signedAt : new Date()

  let dataStyles = {
    fontFamily: dataFontFamily || 'Arial',
    fontSize: dataFontSize,
    color: dataColor,
    lineHeight: dataLineHeight || 1.5,
    padding: (3 * pixelsByMm)
  }

  if (dataHasBg) {
    dataStyles = { ...dataStyles, backgroundColor: dataBgColor }
  }

  if (dataHasBorder) {
    dataStyles = { ...dataStyles, borderStyle: 'solid', borderColor: dataBorderColor, borderWidth: dataBorderWidth }
  }

  const headerContentStyle = StyleSheet.create(dataStyles)

  let city = examination.clinic.city || examination.user.city || ''
  if (city) {
    city = `${city}`
  }

  let crm =  examination.user && examination.user.crm ? examination.user.crm : ''
  crm = examination.user.crmUF ? `${crm} ${examination.user.crmUF}` : crm

  const crmLabel = examination && examination.user && examination.user.crm === '29259' ? 'CRO' : 'CRM'

  return (
    <Document>
      <Page style={styles.body} size={paper}>
        {showPageNumber ? (
          <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (`${pageNumber} / ${totalPages}`)} fixed />
        ) : null}
        {showTop && topImageUrl ? (
          <View style={styles.topArea} fixed>
            <Image src={topImageUrl} style={{ height: (topHeight * pixelsByMm) }} />
          </View>
        ) : null}
        {showBottom && bottomImageUrl ? (
          <View style={styles.bottomArea} fixed>
            <Image src={bottomImageUrl} style={{ height: (bottomHeight * pixelsByMm) }} />
          </View>
        ) : null}
        {showData ? (
          <View style={styles.header} fixed>
            <View style={headerContentStyle}>{headerContentDoc}</View>
          </View>
        ) : null}
        <View style={{ fontSize, fontFamily }}>{doc}</View>
        {showSignature ? (
          <>
            <View wrap={false} style={{ fontSize, marginTop: signatureMarginTop }}>
              {(!signatureSettings || signatureSettings === 'WITHOUT_CITY' || signatureSettings === 'WITHOUT_DATE') ? (
                <Text style={{ textAlign: (signatureAlign || 'center') }}>
                  {signatureSettings && signatureSettings === 'WITHOUT_CITY' ? (<FormatDate locale='pt-br' extended>{signedAt}</FormatDate>) : null}
                  {signatureSettings && signatureSettings === 'WITHOUT_DATE' ? city : null}
                  {!signatureSettings ? (<>{city}{', '}<FormatDate locale='pt-br' extended>{signedAt}</FormatDate></>) : null}
                </Text>
              ) : null}
              {signatureAdditionalText ? (
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                  <View style={{ width: 300 }}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      {examination && examination.user && !!examination.user.signatureImage ? (
                        <Image src={examination.user.signatureImage} style={{ marginHorizontal: 'auto', height: 50, marginVertical: '2' }} />
                      ) : null}
                      {examination && examination.user && examination.user.name ? (
                        <Text style={{ textAlign: 'center' }}>{doctorName(examination.user.name, examination.user.gender)}</Text>
                      ) : null }
                      <Text style={{ textAlign: 'center' }}>{`${crmLabel}: ${crm}`}</Text>
                    </View>
                  </View>
                  <View style={{ width: 300 }}>
                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <Image src={signatureAdditionalImage} style={{ margin: 'auto', height: 50, marginVertical: '2' }} />
                      <Text style={{ textAlign: 'center' }}>{signatureAdditionalText}</Text>
                    </View>
                  </View>
                </View>
              ) : (
                <>
                  {examination && examination.user && examination.user.signatureImage ? (
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: alignToFlex(signatureAlign) }}>
                      {examination && examination.user && !!examination.user.signatureImage ? (
                        <Image src={examination.user.signatureImage} style={{ height: 50, marginVertical: '2' }} />
                      ) : null}
                    </View>
                  ) : null}
                  {examination && examination.user && examination.user.name ? (
                    <Text style={{ textAlign: (signatureAlign || 'center') }}>{doctorName(examination.user.name, examination.user.gender)}</Text>
                  ) : null}
                  <Text style={{ textAlign: (signatureAlign || 'center') }}>{`${crmLabel}: ${crm}`}</Text>
                </>
              )}
            </View>
            {!!signatureText ? (
              <Text style={{ textAlign: signatureAlign, marginTop: 20 }}>{signatureText}</Text>
            ) : null}
          </>
        ) : null}
      </Page>
    </Document>
  )
}

function PreviewPdf({ html, examination, headerContent, documentTheme }) {

  const generatedDocument = React.useMemo(() => generateDocument(html, examination, headerContent, documentTheme), [html, examination, headerContent])

  // const handleUploadPdf = (blob) => {
  //   const email = prompt('Digite o email do destinatário:', me.email)
  //   if (!email) return false

  //   var formData = new FormData()
  //   formData.append('file', blob, 'file.pdf')
  //   formData.append('to', email)
  //   const oReq = new XMLHttpRequest()
  //   oReq.open('POST', `${BASE_API}/upload`, true)
  //   oReq.onload = function (oEvent) {
  //     if (oReq.status === 200) {
  //       notifier.success('Laudo enviado com sucesso.')
  //     } else {
  //       console.error("Error " + oReq.status + " occurred when trying to upload your file.")
  //     }
  //   }
  //   oReq.send(formData)
  // }

  return (
    <Box>
      <BlobProvider generatedDocument={generatedDocument} />
    </Box>
  )

}

const PreviewPdfQuery = ({ headerContent, documentTheme, contentState, examination }) => {
  const { loading, error, html } = useConvertPdf(contentState)
  if (!html || loading) return <Spinner />
  if (html === '<p></p>') return <Spinner />
  if (error) return error.message
  return <PreviewPdf examination={examination} headerContent={headerContent} documentTheme={documentTheme} html={html} />
}

export default React.memo(PreviewPdfQuery)
