import React from 'react'
import { Flex, Box, Text } from 'theme-ui'
import { Close } from 'components'
import Home from './Home'

function Illustrations({ onRequestClose, onCompleted, gallery, captions, d1 = null, d2 = null, images, hideHeader = false, hideAdd = false, titleBackgroundColor, titleTextColor, titleBorderColor, zoom = 2, pasteImageEnabled = true, vars, examination }) {

  const [resultModalOpen, setResultModalOpen] = React.useState(false)
  const [resultUrl, setResultUrl] = React.useState(false)

  const handleAdd = async (base64Image) => {
    onCompleted(base64Image)
  }
  const handleNew = () => {
  }
  const handlePartial = () => {
  }
  const handlePreview = () => {
  }
  const handleGenerate = async (url) => {
    setResultModalOpen(true)
    setResultUrl(url)
  }

  return (
    <>
      <Flex sx={{ flexDirection: 'column', height: '100%' }}>
        {!hideHeader && (
          <Flex sx={{ minHeight: 64, alignItems: 'center' }}>
            <Box sx={{ width: 64 }} />
            <Box sx={{ flex: 1 }}>
              <Text>Ilustrações</Text>
            </Box>
            <Box sx={{ width: 64 }}>
              <Close onClick={onRequestClose} />
            </Box>
          </Flex>
        )}
        <Box sx={{ p: 4, overflow: 'auto' }}>
          <Box sx={{ minHeight: 200 }}>

            <Home
              onGenerate={handleGenerate}
              onNew={handleNew}
              onPartial={handlePartial}
              onPreview={handlePreview}
              onAdd={handleAdd}
              gallery={gallery}
              d1={d1}
              d2={d2}
              captions={captions}
              images={images}
              hideAdd={hideAdd}
              titleBackgroundColor={titleBackgroundColor}
              titleTextColor={titleTextColor}
              titleBorderColor={titleBorderColor}
              zoom={zoom}
              pasteImageEnabled={pasteImageEnabled}
              vars={vars}
              examination={examination}
            />

          </Box>
        </Box>
      </Flex>
    </>
  )

}

export default Illustrations
