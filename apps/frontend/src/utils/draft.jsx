import memoize from 'memoize-one'
import parse, { domToReact } from 'html-react-parser'
import { Document, Page, View, Text, StyleSheet, Image, Font } from '@react-pdf/renderer'

export const getCurrentBlock = (editorState) => {
  const selectionState = editorState.getSelection()
  const contentState = editorState.getCurrentContent()
  const block = contentState.getBlockForKey(selectionState.getStartKey())
  return block
}

export const FormatDate = (props) => {
  if (props.locale === 'pt-br' && props.extended) {
    const date = new Date(props.children)
    const day = date.getDate()
    const month = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'][date.getMonth()]
    const year = date.getFullYear()
    return `${day} de ${month} de ${year}`
  }

  if (!props.children || props.children === '') return ''
  const locale = props.locale ? props.locale : (window.navigator.userLanguage || window.navigator.language)
  const date = new Date(props.children)
  return `${date.toLocaleDateString(locale, { year: 'numeric', month: '2-digit', day: '2-digit' })}`
}

export const defaultGroupsSettings = {
  'TÍTULO': {
    active: true,
    title: 'Título',
    titleIsBold: true,
    formatting: 'SAMELINE',
    order: 0,
  },
  'INDICAÇÃO CLÍNICA': {
    active: true,
    title: 'Indicação Clínica:',
    titleIsBold: true,
    formatting: 'SAMELINE',
    order: 1,
  },
  'INTRODUÇÃO': {
    active: true,
    title: 'Introdução:',
    titleIsBold: true,
    formatting: 'SAMELINE',
    order: 2,
  },
  'TABELAS E ILUSTRAÇÕES': {
    active: true,
    title: 'Tabelas e Ilustrações',
    titleIsBold: true,
    formatting: 'WITHBREAK',
    order: 3,
  },
  'ANÁLISE': {
    active: true,
    title: 'Análise',
    titleIsBold: true,
    formatting: 'WITHBREAK',
    order: 4,
  },
  'IMPRESSÃO': {
    active: true,
    title: 'Impressão:',
    titleIsBold: true,
    formatting: 'SAMELINE',
    order: 5,
  },
  'OBSERVAÇÃO': {
    active: true,
    title: 'Achados adicionais:',
    titleIsBold: true,
    formatting: 'SAMELINE',
    order: 6,
  },
  'NOTA': {
    active: true,
    title: '',
    titleIsBold: false,
    formatting: 'WITHBREAK',
    order: 7,
  }
}

export const defaultIllustrationSettings = {
  titleBackgroundColor: '#6b6b6b',
  titleTextColor: '#ffffff',
  titleBorderColor: '#878787'
}

export const defaultDocSettings = {
  paper: 'A4',
  color: '#000000',
  fontFamily: 'Arial',
  fontSize: '12',
  lineHeight: 1.3,
  topMargin: 10,
  rightMargin: 15,
  bottomMargin: 10,
  leftMargin: 20,
  showTop: false,
  topHeight: 20,
  showBottom: false,
  bottomHeight: 10,
  showPageNumber: true,
  pageNumberDistanceFromBottom: 8, // 10
  showData: true,
  dataColor: '#000000',
  dataFontFamily: 'Arial',
  dataFontSize: '11',
  dataLineHeight: 1.3,
  dataHasBorder: true,
  dataBorderWidth: 2,
  dataBorderColor: '#000000',
  dataHasBg: true,
  dataBgColor: '#c0c0c0',
  topImageUrl:'',
  bottomImageUrl:'',
  signatureMarginTop: '10',
  showSignature: true,

//   "signatureText": "",
//   "signatureSettings": "",
//   "signatureAlign": "center",
//   "signatureAdditionalText": "",
//   "signatureAdditionalImage": "",

  titleIsBold: true,
  titleAlign: 'center',
  titleFontFamily: 'Arial',
  titleFontSize: '14',
  titleLineHeight: 2,
  dataHtml: '<p><strong>Nome do Paciente:</strong> [NOME_PACIENTE]\n<strong>Idade:</strong> [IDADE] anos    <strong>Sexo:</strong> [SEXO]\n<strong>Médico Solicitante:</strong> [MEDICO_SOLICITANTE]\n<strong>Data do Exame:</strong> [DATA_EXAME]</p>',
  showTitle: true,
  dataHeight: 35
}

function doctorName(name, gender) {
  if (gender === 'M') {
    return `Dr. ${name}`
  }
  if (gender === 'F') {
    return `Dra. ${name}`
  }
  return `Dr(a). ${name}`
}

function alignToFlex(align) {
  if (align === 'center') return 'center'
  if (align === 'left') return 'flex-start'
  if (align === 'right') return 'flex-end'
  return 'center'
}

const defaultDocumentTheme = {
  paper: 'A4',
  fontSize: 12
}

function cleanInvisibleChars(text) {
  if (!text) {
    return text
  }
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

function getDraftStyles(documentTheme) {
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

  const pixelsByMm = 2.8

  return StyleSheet.create({
    body: {
      // paddingTop: ((topMargin + topHeight + dataHeight) * pixelsByMm),
      // paddingBottom: ((bottomMargin + bottomHeight) * pixelsByMm),
      // paddingLeft: (leftMargin * pixelsByMm),
      // paddingRight: (rightMargin * pixelsByMm),
      // fontFamily: fontFamily || 'Arial',
      color: color || 'black',
      lineHeight: lineHeight || 1.2,
      fontSize: fontSize || 12,
      textAlign: 'justify'
    }
  })
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

export function generateDocument_(html, documentTheme = {}, textFactor = 0) {
  documentTheme = { ...defaultDocumentTheme, ...documentTheme }
  let mainFontSize = Number(documentTheme.fontSize) + textFactor
  const draftStyles = getDraftStyles(documentTheme)

  const doc = convertHtmlToDocument(html, { fontSize: mainFontSize }, textFactor)

  return (
    <Document>
      <Page style={draftStyles.body} size={documentTheme.paper}>
        <View>
          <Text>Hello</Text>
        </View>
        <View>{doc}</View>
      </Page>
    </Document>
  )
}

export function generateDocument({ html, textFactor, headerContent, documentTheme, examination }) {
  let mainFontSize = documentTheme.fontSize ? Number(documentTheme.fontSize) : 12
  mainFontSize = mainFontSize + textFactor

  const pixelsByMm = 2.8 // http://www.graphic-design-employment.com/a4-paper-dimensions.html

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
      right: (rightMargin * pixelsByMm),
    },
    pageNumber: {
      position: 'absolute',
      bottom: (pageNumberDistanceFromBottom * pixelsByMm),
      textAlign: pageNumberAlign,
      color: pageNumberColor,
      fontSize: pageNumberFontSize,
      left: (leftMargin * pixelsByMm),
      right: (rightMargin * pixelsByMm),
      fontFamily: pageNumberFontFamily,
    },
  })

  const signedAt = examination?.signedAt || new Date()

  let dataStyles = {
    fontFamily: dataFontFamily || 'Arial',
    fontSize: dataFontSize,
    color: dataColor,
    lineHeight: dataLineHeight || 1.5,
    // TODO dataPadding
    padding: (3 * pixelsByMm),
  }

  if (dataHasBg) {
    dataStyles = { ...dataStyles, backgroundColor: dataBgColor }
  }

  if (dataHasBorder) {
    dataStyles = { ...dataStyles, borderStyle: 'solid', borderColor: dataBorderColor, borderWidth: dataBorderWidth }
  }

  const headerContentStyle = StyleSheet.create(dataStyles)

  let city = examination?.clinic?.city || examination?.user?.city || ''
  if (city) {
    city = `${city}`
  }

  let crm = examination?.user?.crm ? examination.user.crm : ''
  crm = examination?.user?.crmUF ? `${crm} ${examination.user.crmUF}` : crm

  // FIXME
  const crmLabel = examination?.user?.crm === '29259' ? 'CRO' : 'CRM'

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
                      {examination?.user?.signatureImage ? (
                        <Image src={examination.user.signatureImage} style={{ marginHorizontal: 'auto', height: 50, marginVertical: '2' }} />
                      ) : null}
                      {examination?.user?.name ? (
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
                  {examination?.user?.signatureImage ? (
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: alignToFlex(signatureAlign) }}>
                      <Image src={examination.user.signatureImage} style={{ height: 50, marginVertical: '2' }} />
                    </View>
                  ) : null}
                  {examination?.user?.name ? (
                    <Text style={{ textAlign: (signatureAlign || 'center') }}>{doctorName(examination.user.name, examination.user.gender)}</Text>
                  ) : null}
                  <Text style={{ textAlign: (signatureAlign || 'center') }}>{`${crmLabel}: ${crm}`}</Text>
                </>
              )}
            </View>
            {signatureText ? (
              <Text style={{ textAlign: signatureAlign, marginTop: 20 }}>{signatureText}</Text>
            ) : null}
          </>
        ) : null}
      </Page>
    </Document>
  )
}

const genderText = (gender) => {
  if (!gender) return ''
  if (gender.toUpperCase() === 'F') return 'Feminino'
  if (gender.toUpperCase() === 'M') return 'Masculino'
  return ''
}

export const arrayDateTimeFromIsoString = (text) => text.slice(0, 16).replace('T', '-').replace(/:/g, '-').split('-')

export const formatDateFromIsoString = (text) => {
  if (!text) return ''
  const d = arrayDateTimeFromIsoString(text)
  return `${d[2]}/${d[1]}/${d[0]}`
}

export function getHeaderContent(html, item) {
  if (!html) {
    return null
  }
  let headerContent = html
  headerContent = headerContent.replace('[NOME_UNIDADE]', item?.clinic?.name || '')
  headerContent = headerContent.replace('[NOME_PACIENTE]', item.patientName)
  headerContent = headerContent.replace('[IDADE]', item?.patientAge || '')
  headerContent = headerContent.replace('[SEXO]', genderText(item.patientGender))
  headerContent = headerContent.replace('[ACCESSION_NUMBER]', item?.accessionNumber || '')
  headerContent = headerContent.replace('[PATIENT_ID]', item?.patientIdTag || '')
  headerContent = headerContent.replace('[MEDICO_SOLICITANTE]', item?.physicianName || '')
  headerContent = headerContent.replace('[DATA_EXAME]', formatDateFromIsoString(item.examinedAt))
  return headerContent
}

export function getDocSettings(docSettings) {
  if (!docSettings) {
    return defaultDocSettings
  }

  return {
    paper: docSettings.paper,

    color: docSettings.color,

    fontSize: docSettings.fontSize || 12,
    fontFamily: docSettings.fontFamily || 'Arial',
    lineHeight: docSettings.lineHeight || 1.2,

    topMargin: docSettings.topMargin,
    bottomMargin: docSettings.bottomMargin,
    leftMargin: docSettings.leftMargin,
    rightMargin: docSettings.rightMargin,

    showPageNumber: docSettings.showPageNumber,
    pageNumberDistanceFromBottom: docSettings.pageNumberDistanceFromBottom,
    pageNumberAlign: 'right',
    pageNumberColor: 'black',
    pageNumberFontSize: docSettings.fontSize || 12,
    pageNumberFontFamily: docSettings.fontFamily || 'Arial',
    pageNumberFontWeight: 700,

    showSignature: docSettings.showSignature,
    signatureText: docSettings.signatureText,
    signatureSettings: docSettings.signatureSettings,
    signatureAlign: docSettings.signatureAlign,
    signatureAdditionalText: docSettings.signatureAdditionalText,
    signatureAdditionalImage: docSettings.signatureAdditionalImage,
    signatureMarginTop: docSettings.signatureMarginTop,

    showTop: docSettings.showTop,
    topHeight: docSettings.topHeight,
    topImageUrl: docSettings.topImageUrl,

    showBottom: docSettings.showBottom,
    bottomHeight: docSettings.bottomHeight,
    bottomImageUrl: docSettings.bottomImageUrl,

    showData: docSettings.showData,
    dataHeight: docSettings.dataHeight,
    dataBgColor: docSettings.dataBgColor,
    dataBorderColor: docSettings.dataBorderColor,
    dataBorderWidth: docSettings.dataBorderWidth,
    dataColor: docSettings.dataColor,
    dataFontFamily: docSettings.dataFontFamily,
    dataFontSize: docSettings.dataFontSize,
    dataHasBg: docSettings.dataHasBg,
    dataHasBorder: docSettings.dataHasBorder,
    dataLineHeight: docSettings.dataLineHeight
  }
}
