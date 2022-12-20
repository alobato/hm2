import React from 'react'
import { Flex, Box } from 'theme-ui'
import { EditorState, convertFromRaw } from 'draft-js'

// import Portal from '../../components/Portal'
// import Select from '../../components/Select'
// import ButtonIcon from '../../components/ButtonIcon'
// import { getCurrentBlock, insertTextToCursor } from '../../utils/draft'
// import useSpeechRecognition from '../../hooks/useSpeechRecognition'
// import usePasteImage from '../../hooks/usePasteImage'

import PreEditor from './PreEditor'
import { ExtendedRichUtils, getCurrentlySelectedBlockData } from './ExtendedRichUtils'
import ButtonIcon from '../ButtonIcon'
// import fixedSubstitutions from './fixedSubstitutions'

const INLINE_STYLES = [
  { iconPath: 'M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z', style: 'BOLD' },
	{ iconPath: 'M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z', style: 'ITALIC' },
  { iconPath: 'M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z', style: 'UNDERLINE' },
]

const ALIGNMENTS = [
  { iconPath: 'M3,3H21V5H3V3M3,7H15V9H3V7M3,11H21V13H3V11M3,15H15V17H3V15M3,19H21V21H3V19Z', alignment: 'left' },
  { iconPath: 'M3,3H21V5H3V3M7,7H17V9H7V7M3,11H21V13H3V11M7,15H17V17H7V15M3,19H21V21H3V19Z', alignment: 'center' },
  { iconPath: 'M3,3H21V5H3V3M9,7H21V9H9V7M3,11H21V13H3V11M9,15H21V17H9V15M3,19H21V21H3V19Z', alignment: 'right' },
  { iconPath: 'M3,3H21V5H3V3M3,7H21V9H3V7M3,11H21V13H3V11M3,15H21V17H3V15M3,19H21V21H3V19Z', alignment: 'justify' },
]

const EditorExtended = ({ editorState, onChange, onMount, stopAction = () => {}, substitutions = [], defaultRawContentState, pasteImageEnabled = true, onAddIllustrationClick = () => {}, onPreviewClick = () => {}, textFactor = 0, onTextFactorChange = () => {}, previewSelected = false, illustrationSelected = false }) => {
  const handleOnChange = React.useCallback(onChange, [])

  // const src = usePasteImage()
  // const [prevSrc, setPrevSrc] = React.useState('')

  // const [isRecording, interim, finalTranscript, toggle, stop] = useSpeechRecognition({})
  // const [prevFinalTranscript, setPrevFinalTranscript] = React.useState('')

  // React.useEffect(() => {
  //   if (stopAction) stopAction(() => stop())
  //   return () => stop()
  // // eslint-disable-next-line
  // }, [])

  // React.useEffect(() => {
  //   if (defaultRawContentState) {
  //     const contentState = convertFromRaw(defaultRawContentState)
  //     onChangeCallBack(EditorState.createWithContent(contentState))
  //   }
  // // eslint-disable-next-line
  // }, [])

  const currentStyle = editorState.getCurrentInlineStyle()
  const currentBlockAlign = getCurrentlySelectedBlockData(editorState, 'textAlign')

  // const currentBlockFontSize = getCurrentlySelectedBlockData(editorState, 'fontSize')
  // let fontSizeSelectValue = {}
  // if (currentBlockFontSize) {
  //   fontSizeSelectValue = { value: currentBlockFontSize, label: `${currentBlockFontSize}pt` }
  // }

	const toggleInlineStyle = (style) => {
    console.log('toggleInlineStyle', style)
    const editorStateFocused = EditorState.forceSelection(editorState, editorState.getSelection())
    handleOnChange(ExtendedRichUtils.toggleInlineStyle(editorStateFocused, style))
  }

	const toggleAlignment = (alignment) => {
    console.log('toggleAlignment', alignment)
    const editorStateFocused = EditorState.forceSelection(editorState, editorState.getSelection())
    const newEditorState = ExtendedRichUtils.toggleAlignment(editorStateFocused, alignment)
    handleOnChange(newEditorState)
  }

  const toggleFontSize = (element) => {
    const value = element.target.value
    const editorStateFocused = EditorState.forceSelection(editorState, editorState.getSelection())
    const newEditorState = ExtendedRichUtils.toggleFontSize(editorStateFocused, value.toString())
    handleOnChange(newEditorState)
  }

  const addImage = (src) => {
    // const selectionState = editorState.getSelection()
    // const focusKey = selectionState.getFocusKey()
    // const focusOffset = selectionState.getFocusOffset()
    // const anchorKey = selectionState.getAnchorKey()
    // const anchorOffset = selectionState.getAnchorOffset()
    // if (focusKey !== anchorKey) {
    //   return alert('Verifique se o cursor está posicionado em uma linha onde a ilustração será adicionada.')
    // }
    // if (focusOffset !== 0 || anchorOffset !== 0) {
    //   return alert('Verifique se o cursor está posicionado em uma linha em branco.')
    // }
    // if (!selectionState.isCollapsed()) {
    //   return alert('O cursor não pode estar selecionando nenhum conteúdo.')
    // }
    // let contentState = editorState.getCurrentContent()
    // const key = selectionState.getStartKey()
    // const blockMap = contentState.getBlockMap()
    // const currentBlock = getCurrentBlock(editorState)

    // if (!currentBlock) return null
    // if (currentBlock.getLength() === 0) {
    //   if (currentBlock.getType() === 'image') return null
    //   const newBlock = currentBlock.merge({type: 'image', data: {src}})
    //   const newContentState = contentState.merge({blockMap: blockMap.set(key, newBlock), selectionAfter: selectionState})
    //   handleOnChange(EditorState.push(editorState, newContentState, 'change-block-type'))
    // }
  }

  const handleChangeTextFactor = (factor) => {
    if ((textFactor + factor) >= -1 && (textFactor + factor) <= 1) {
      onTextFactorChange(textFactor + factor)
    }
  }

//   if (finalTranscript && prevFinalTranscript !== finalTranscript) {
//     let textToInsert = finalTranscript.toLowerCase()
//     textToInsert = textToInsert.replace(/(^|\. *)([a-z])/g, function(_, separator, char) {
//       return separator + char.toUpperCase()
//     })

//     for (const substitution of [...fixedSubstitutions, ...substitutions]) {
//       textToInsert = textToInsert.replace(new RegExp(substitution.from, 'g'), substitution.to)
//     }

//     textToInsert = textToInsert.replace(/(\S+?) em maiúscul[ao]/ig, function (x) {
//       return x.replace(/\sem maiúscul[ao]/ig, '').toUpperCase()
//     })

//     const breakLine = `
// `

//     textToInsert = textToInsert.replace('↵', breakLine)

//     if (!prevFinalTranscript)
//       textToInsert = textToInsert.trim().charAt(0).toUpperCase() + textToInsert.trim().slice(1)
//     if (prevFinalTranscript.substr(-1) === '.')
//       textToInsert = ' ' + textToInsert.trim().charAt(0).toUpperCase() + textToInsert.trim().slice(1)

//       handleOnChange(insertTextToCursor(editorState, `${textToInsert}`, 'DICTATION'))

// 		setPrevFinalTranscript(finalTranscript)
//   }

//   if (pasteImageEnabled && src && prevSrc !== src) {
//     addImage(src)
//     setPrevSrc(src)
//   }

  return (
    <Box>

      {/* interim && <Portal><Box css={css`position: fixed; bottom: 16px; left: 16px; right: 16px; background: hsla(0, 0%, 0%, 0.4); color: white; font-size: 42px; padding: 16px; margin: 0 auto; text-align: center; border-radius: 16px; font-weight: 600;`}>{interim}</Box></Portal> */}

      {/* <Box p={1} bg='grey100'>
        <Flex ai='center' jc='space-between' lh={0}>
          <Flex ai='center'>
            {!disabled &&
              <>
                {INLINE_STYLES.map(item => (
                  <Box key={item.style} lh={0}><ButtonIcon selected={currentStyle.has(item.style)} iconPath={item.iconPath} onClick={() => toggleInlineStyle(item.style)} /></Box>
                ))}
                {ALIGNMENTS.map(item => (
                  <Box key={item.alignment} lh={0}><ButtonIcon selected={(currentBlockAlign === item.alignment)} iconPath={item.iconPath} onClick={() => toggleAlignment(item.alignment)} /></Box>
                ))}
                <ButtonIcon onClick={() => toggle()} selected={false} className={isRecording ? 'recording' : ''} iconPath='M 12 2 C 10.343 2 9 3.343 9 5 L 9 11 C 9 12.657 10.343 14 12 14 C 13.657 14 15 12.657 15 11 L 15 5 C 15 3.343 13.657 2 12 2 z M 5 11 C 5 14.525296 7.6093644 17.433226 11 17.919922 L 11 21 L 13 21 L 13 17.919922 C 16.390636 17.433226 19 14.525296 19 11 L 17 11 C 17 13.761 14.761 16 12 16 C 9.239 16 7 13.761 7 11 L 5 11 z' />
                {!disableFontSize && <Box w={100} lh={0}>
                  <Select disabled={disabled} placeholder='Fonte' value={fontSizeSelectValue.value} onChange={toggleFontSize}>
                    {[10, 11, 12, 14, 18, 24, 32].map(item => <option value={item} key={item}>{`${item}pt`}</option>)}
                  </Select>
                </Box>}


                <Flex ai='center'>
                  <Box>
                    <ButtonIcon onClick={() => { handleChangeTextFactor(-1) }} iconPath='M5.12,14L7.5,7.67L9.87,14M6.5,5L1,19H3.25L4.37,16H10.62L11.75,19H14L8.5,5H6.5M18,17L23,11.93L21.59,10.5L19,13.1V7H17V13.1L14.41,10.5L13,11.93L18,17Z' />
                  </Box>
                  <Box>{textFactor}</Box>
                  <Box>
                    <ButtonIcon onClick={() => { handleChangeTextFactor(1) }} iconPath='M5.12,14L7.5,7.67L9.87,14M6.5,5L1,19H3.25L4.37,16H10.62L11.75,19H14L8.5,5H6.5M18,7L13,12.07L14.41,13.5L17,10.9V17H19V10.9L21.59,13.5L23,12.07L18,7Z' />
                  </Box>
                </Flex>

                <Box flex={1} w={100}></Box>
              </>
            }
          </Flex>
          <Box>
            <Flex>
              <Box mr={2}><ButtonIcon title='Adicionar Ilustração' onClick={() => onAddIllustrationClick()} selected={illustrationSelected} iconPath='M19,19H5V5H19M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z' /></Box>
              <Box><ButtonIcon title='Visualizar Impressão' onClick={() => onPreviewClick()} selected={previewSelected} iconPath='M6,2C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z' /></Box>
            </Flex>
          </Box>
        </Flex>
      </Box> */}

      <Box>
        <Box sx={{ height: 40, borderBottomStyle: 'solid', borderBottomWidth: 1, borderBottomColor: 'hairline' }}>
          <Flex sx={{ justifyContent: 'center', alignItems: 'center', height: 40 }}>

            {INLINE_STYLES.map((item) => (
              <Box key={item.style} sx={{ mx: 2, lineHeight: 0 }}><ButtonIcon selected={currentStyle.has(item.style)} iconPath={item.iconPath} onClick={() => toggleInlineStyle(item.style)} /></Box>
            ))}
            {ALIGNMENTS.map(item => (
              <Box key={item.alignment} sx={{ mx: 2, lineHeight: 0 }}><ButtonIcon selected={(currentBlockAlign === item.alignment)} iconPath={item.iconPath} onClick={() => toggleAlignment(item.alignment)} /></Box>
            ))}

            <Flex sx={{ alignItems: 'center', ml: 3 }}>
              <Box sx={{ lineHeight: 0 }}><ButtonIcon onClick={() => handleChangeTextFactor(-1)} iconPath='M5.12,14L7.5,7.67L9.87,14M6.5,5L1,19H3.25L4.37,16H10.62L11.75,19H14L8.5,5H6.5M18,17L23,11.93L21.59,10.5L19,13.1V7H17V13.1L14.41,10.5L13,11.93L18,17Z' /></Box>
              <Box>{textFactor}</Box>
              <Box sx={{ lineHeight: 0 }}><ButtonIcon onClick={() => handleChangeTextFactor(1)} iconPath='M5.12,14L7.5,7.67L9.87,14M6.5,5L1,19H3.25L4.37,16H10.62L11.75,19H14L8.5,5H6.5M18,7L13,12.07L14.41,13.5L17,10.9V17H19V10.9L21.59,13.5L23,12.07L18,7Z' /></Box>
            </Flex>

            <Flex sx={{ alignItems: 'center', ml: 3 }}>
              <Box sx={{ lineHeight: 0 }}><ButtonIcon title='Adicionar Ilustração' onClick={() => onAddIllustrationClick()} selected={illustrationSelected} iconPath='M19,19H5V5H19M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z' /></Box>
              <Box sx={{ lineHeight: 0 }}><ButtonIcon title='Visualizar Impressão' onClick={() => onPreviewClick()} selected={previewSelected} iconPath='M6,2C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z' /></Box>
            </Flex>

            <Box onClick={onMount}>
              Montar
            </Box>

          </Flex>
        </Box>

        <PreEditor
          editorState={editorState}
          onChange={handleOnChange}
        />
      </Box>
    </Box>
  )
}

export default EditorExtended
