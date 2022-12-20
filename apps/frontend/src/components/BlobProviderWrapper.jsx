import React from 'react'
import { BlobProvider } from '@react-pdf/renderer'

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

export default React.memo(BlobProviderWrapper)
