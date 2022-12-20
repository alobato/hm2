import React from 'react'
import { convertToHTML } from 'draft-convert'
import { convertFromRaw } from 'draft-js'

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

function useConvertPdf(rawContentState) {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(null)
  const [html, setHtml] = React.useState(null)

  React.useEffect(() => {
    try {
      setLoading(true)
      const tempHtml = convertContentStateToHtml(convertFromRaw(rawContentState))
      setHtml(tempHtml)
      setLoading(false)
    } catch(err) {
      console.error(err.message)
      setError(err)
      setLoading(false)
    }
  }, [rawContentState])

  return { loading, error, html }
}

export default useConvertPdf
