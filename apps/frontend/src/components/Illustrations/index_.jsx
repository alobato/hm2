import React from 'react'
import { Flex, Box } from 'theme-ui'
import { Modal } from 'components'

function Preview() {
  return (
    <div>Preview</div>
  )
}

function Illustrations({ interactives = [], arrows = [], gallery = [] }) {
  const [previewModalOpen, setPreviewModalOpen] = React.useState(false)
  const [historyImages, setHistoryImages] = React.useState([])
  const [title, setTitle] = React.useState('')


  return (
    <>
      <Box>
        <Box>
          Top Menu
        </Box>
        <Flex>
          <Box sx={{ flexGrow: 1 }}>
            <Box>
              Radios
            </Box>
            <Box sx={{ width: 648 }}>

              <Box sx={{ height: 15, backgroundPosition: '-10px 0', backgroundImage: 'url(data:image/png;base64,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)' }} />

              <Box>
                <input type='text' style={{ width: '100%', fontSize: 'inherit', padding: '0.5rem', textAlign: 'center' }} name='title' value={title} onChange={(e) => setTitle(e.target.value)} />
              </Box>

            </Box>
            <Box>
              Gallery
              <Flex>
                {gallery.map((item, index) => (
                  <Box key={index}>
                    <Box>
                      <img src={item} alt='gallery' />
                    </Box>
                  </Box>
                ))}
              </Flex>
            </Box>
          </Box>
          <Box>
            Right History
            {historyImages.map((item, index) => (
              <Box key={index}>
                <Box>
                  <img src={item} alt='history' />
                </Box>
              </Box>
            ))}
          </Box>
        </Flex>
      </Box>




      <div onClick={() => setPreviewModalOpen(true)}>Illustrations</div>
      <Modal shown={previewModalOpen} backdropStyle={{ zIndex: '1002', backdropFilter: 'blur(5px)', background: 'hsl(0deg 0% 0% / 10%)' }} onCancel={() => setPreviewModalOpen(false)}>
        {({ onRequestClose }) => (
          <Preview />
        )}
      </Modal>
    </>
  )
}

export default Illustrations
