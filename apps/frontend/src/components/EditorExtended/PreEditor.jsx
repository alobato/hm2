import React from 'react'
import { Editor } from 'draft-js'
import { ExtendedRichUtils } from './ExtendedRichUtils'

const blockStyle = (contentBlock) => {
  const textAlignStyle = contentBlock.getData().get('textAlign')
  const fontSizeStyle = contentBlock.getData().get('fontSize')

  let classes = []

  switch (textAlignStyle) {
    case 'right':
      classes.push(`align-right`)
      break
    case 'center':
      classes.push(`align-center`)
      break
    case 'left':
      classes.push(`align-left`)
      break
    case 'justify':
      classes.push(`align-justify`)
      break
    default:
      classes.push(`align-justify`)
      break
  }

  switch (fontSizeStyle) {
    case '10':
      classes.push(`font-size-10`)
      break
    case '11':
      classes.push(`font-size-11`)
      break
    case '12':
      classes.push(`font-size-12`)
      break
    case '14':
      classes.push(`font-size-14`)
      break
    case '18':
      classes.push(`font-size-18`)
      break
    case '24':
      classes.push(`font-size-24`)
      break
    case '32':
      classes.push(`font-size-32`)
      break
    default:
      classes.push(`font-size-12`)
      break
  }
  return classes.join(' ')
}

const Image = ({ blockProps }) => (<img style={{ width: '100%' }} alt='' src={blockProps.src} />)

const blockRenderer = (block) => {
  if (block.getType() === 'image' && block.getData().get('src')) {
    return { component: Image, editable: true, props: { src: block.getData().get('src') } }
  }
  return null
}

const PreEditor = ({ editorState, onChange }) => {
  const handleKeyCommand = (command, editorState) => {
    const newState = ExtendedRichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      onChange(newState)
      return 'handled'
    }
    return 'not-handled'
  }
  return (
    <Editor
      spellCheck
      stripPastedStyles
      editorState={editorState}
      onChange={onChange}
      blockStyleFn={blockStyle}
      blockRendererFn={blockRenderer}
      handleKeyCommand={handleKeyCommand}
    />
  )
}

export default PreEditor
