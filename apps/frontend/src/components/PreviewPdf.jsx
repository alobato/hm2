import React from 'react'
import { Flex, Box } from 'theme-ui'
import { BlobProvider, Font } from '@react-pdf/renderer'
import { SpinnerWithDelay as Spinner } from 'components'
import useConvertPdf from './useConvertPdf'
import { generateDocument } from '../utils'

Font.register({ family: 'Arial', fonts: [
  { src: `//${window.location.host}/arial.ttf` }, // font-style: normal, font-weight: normal
  { src: `//${window.location.host}/arial-italic.ttf`, fontStyle: 'italic' },
  { src: `//${window.location.host}/arial-bold.ttf`, fontWeight: 700 },
 ]
})

Font.register({ family: 'Calibri', fonts: [
  { src: `//${window.location.host}/calibri.ttf` },
  { src: `//${window.location.host}/calibri-italic.ttf`, fontStyle: 'italic' },
  { src: `//${window.location.host}/calibri-bold.ttf`, fontWeight: 700 },
 ]
})

Font.registerHyphenationCallback((word) => [word])

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

// export default memo(BlobProviderWrapper)

const BlobComponent = ({ generatedDocument }) => {
  const handleUploadPdf = (blob) => {
    // const email = prompt('Digite o email do destinatário:', (me && me.email ? me.email : '') )
    email = prompt('Digite o email do destinatário:')
    if (!email) {
      return false
    }

    // var formData = new FormData()
    // formData.append('file', blob, 'file.pdf')
    // formData.append('to', email)
    // const oReq = new XMLHttpRequest()
    // oReq.open('POST', `${BASE_API}/upload`, true)
    // oReq.onload = function (oEvent) {
    //   if (oReq.status === 200) {
    //     notifier.success('Laudo enviado com sucesso.')
    //   } else {
    //     console.error("Error " + oReq.status + " occurred when trying to upload your file.")
    //   }
    // }
    // oReq.send(formData)
  }

  return (
    <BlobProviderWrapper document={generatedDocument}>
      {({ blob, url }) => {
        if (url) return (
          <>
            <Box sx={{ height: 40, borderBottomStyle: 'solid', borderBottomWidth: 1, borderBottomColor: 'hairline' }}>
              {/* <Flex>
                <Box><a title='Download' href={url} download='laudo.pdf'>Download</a></Box>
                <Box><span onClick={() => { window.frames[0].focus(); window.frames[0].print() }}>Imprimir</span></Box>
                <Box><span onClick={() => handleUploadPdf(blob)}>Enviar laudo por email</span></Box>
              </Flex> */}
            </Box>
            <Box>
              <iframe title='PDF' width='100%' style={{ width: '100%', height: 'calc(100vh - 182px)' }} src={`${url}#view=Fit`} />
            </Box>
          </>
        )
      }}
    </BlobProviderWrapper>
  )
}

const PreviewPdf = React.memo(({ html, textFactor, headerContent, documentTheme, examination }) => {
  console.log('PreviewPdf')
  // const generatedDocument = React.useMemo(() => generateDocument(html, examination, headerContent, documentTheme), [html, examination, headerContent])
  const generatedDocument = generateDocument({ html, textFactor, headerContent, documentTheme, examination })

  return (
    <BlobComponent generatedDocument={generatedDocument} />
  )
})

const PreviewPdfQuery = React.memo(({ rawContentState, decorator, textFactor, headerContent, documentTheme, examination }) => {
  let { loading, error, html } = useConvertPdf(rawContentState, decorator)
  if (loading) return <Spinner />
  if (error) return error.message
  if (!html) html = '<p></p>'
  return <PreviewPdf html={html} textFactor={textFactor} headerContent={headerContent} documentTheme={documentTheme} examination={examination} />
})

export default PreviewPdfQuery
