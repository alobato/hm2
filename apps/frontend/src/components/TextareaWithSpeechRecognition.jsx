import React from 'react'
import { Box } from 'theme-ui'
import autosize from 'autosize'
import { useDebounce } from 'hooks'
import { useUpdateEffect } from 'usehooks-ts'
import { Portal } from 'components'

const useSpeechRecognition = ({ continuous = true, lang = 'pt-BR', maxAlternatives = 1, interimResults = true }) => {
  const [isRecording, setIsRecording] = React.useState(false)
  const [interim, setInterim] = React.useState('')
  const [finalTranscript, setFinalTranscript] = React.useState('')

  const recognitionRef = React.useRef(null)

  const onResult = e => {
    const recognition = recognitionRef.current

    let finalTranscript = ''
    let interim = ''

    setFinalTranscript('')

    if (typeof(e.results) === 'undefined') {
      recognition.onend = null
      recognition.stop()
      return
    }

    for (var i = e.resultIndex; i < e.results.length; ++i) {
      if (e.results[i].isFinal) {
        finalTranscript += e.results[i][0].transcript
        finalTranscript = finalTranscript.replace(/\sponto e vírgula/ig, ';')
        finalTranscript = finalTranscript.replace(/\svírgula/ig, ',')
        finalTranscript = finalTranscript.replace(/\spausa/ig, ',')
        finalTranscript = finalTranscript.replace(/\scomma/ig, ',')
        finalTranscript = finalTranscript.replace(/\scoma/ig, ',')
        finalTranscript = finalTranscript.replace(/\sponto final/ig, '.')
        finalTranscript = finalTranscript.replace(/\sponto de exclamação/ig, '!')
        finalTranscript = finalTranscript.replace(/\sponto de interrogação/ig, '?')
        finalTranscript = finalTranscript.replace(/\sponto/ig, '.')
        finalTranscript = finalTranscript.replace(/\sabre parênteses/ig, ' (')
        finalTranscript = finalTranscript.replace(/\sabre parentes/ig, '(')
        finalTranscript = finalTranscript.replace(/\sfecha parênteses/ig, ')')
        finalTranscript = finalTranscript.replace(/\sfecha parentes/ig, ')')
        finalTranscript = finalTranscript.replace(/\(\s/ig, '(')
        finalTranscript = finalTranscript.replace(/\sdois pontos/ig, ':')
        finalTranscript = finalTranscript.replace(/\s2 pontos/ig, ':')
        finalTranscript = finalTranscript.replace(/\spor cento/ig, '%')
        finalTranscript = finalTranscript.replace(/\saspas/ig, '"')
        finalTranscript = finalTranscript.replace(/\smilímetros/ig, 'mm')
        finalTranscript = finalTranscript.replace(/\scentímetros/ig, 'cm')
        finalTranscript = finalTranscript.replace(/\squebra de linha/ig, '↵')
        finalTranscript = finalTranscript.replace(/\sparágrafo/ig, '↵')
      } else {
        interim += e.results[i][0].transcript
        interim = interim.replace(/\sponto e vírgula/ig, '; ')
        interim = interim.replace(/\svírgula/ig, ', ')
        interim = interim.replace(/\spausa/ig, ', ')
        interim = interim.replace(/\scomma/ig, ', ')
        interim = interim.replace(/\scoma/ig, ', ')
        interim = interim.replace(/\sponto final/ig, '. ')
        interim = interim.replace(/\sponto de exclamação/ig, '!')
        interim = interim.replace(/\sponto de interrogação/ig, '?')
        interim = interim.replace(/\sponto/ig, '.')
        interim = interim.replace(/\sabre parentes/ig, ' (')
        interim = interim.replace(/\sabre parênteses/ig, '(')
        interim = interim.replace(/\sfecha parênteses/ig, ')')
        interim = interim.replace(/\sfecha parentes/ig, ')')
        interim = interim.replace(/\(\s/ig, '(')
        interim = interim.replace(/\sdois pontos/ig, ': ')
        interim = interim.replace(/\2 pontos/ig, ': ')
        interim = interim.replace(/\spor cento/ig, '% ')
        interim = interim.replace(/\saspas/ig, '"')
        interim = interim.replace(/\smilímetros/ig, 'mm')
        interim = interim.replace(/\scentímetros/ig, 'cm')
        interim = interim.replace(/\squebra de linha/ig, '↵')
        interim = interim.replace(/\sparágrafo/ig, '↵')
      }
    }

    setInterim(interim)

    if (finalTranscript && finalTranscript !== '')
      setFinalTranscript(finalTranscript)
  }

  function toggle() {
    try {
      const recognition = recognitionRef.current
      if (!isRecording) {
        setIsRecording(true)
        recognition.start()
      } else {
        setIsRecording(false)
        recognition.stop()
      }
    } catch(e) {
      setIsRecording(false)
      console.error(e.message)
    }
  }

  const stop = () => {
    try {
      setIsRecording(false)
      recognitionRef.current.stop()
    } catch(e) {
      setIsRecording(false)
      console.error(e.message)
    }
  }

  React.useEffect(() => {
    try {
      const speechRecognition = window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.oSpeechRecognition || window.SpeechRecognition
      if (!speechRecognition) return null
      const recognition = new speechRecognition()
      recognition.continuous = continuous
      recognition.interimResults = interimResults
      recognition.lang = lang
      recognition.maxAlternatives = maxAlternatives
      recognition.onresult = onResult
      recognition.onend = () => setIsRecording(false)
      recognitionRef.current = recognition
    } catch(e) {
      setIsRecording(false)
      console.error(e.message)
    }
  }, [continuous, interimResults, lang, maxAlternatives])

  return [isRecording, interim, finalTranscript, toggle, stop]
}

const TextareaWithSpeechRecognition = React.forwardRef(({ value = '', onChange = () => {}, stopAction = () => {}, substitutions = [], maxLength, ...rest }, ref) => {
  const onChangeCallBack = React.useCallback(onChange, [])

  const textareaRef = React.useRef(ref)

  const [isRecording, interim, finalTranscript, toggle, stop] = useSpeechRecognition({})
  const [prevFinalTranscript, setPrevFinalTranscript] = React.useState('')

  React.useEffect(() => {
    if (stopAction) {
      stopAction(() => stop())
    }
    return () => stop()
  // eslint-disable-next-line
  }, [])


  const [valueState, setValueState] = React.useState(value)
  const debouncedValue = useDebounce(valueState, 1000)
  useUpdateEffect(() => {
    // onChange(debouncedValue)
    onChangeCallBack(debouncedValue)
  }, [debouncedValue, onChangeCallBack])

  React.useEffect(() => {
    const textarea = textareaRef.current
    autosize(textarea)
    return (() => {
      autosize.destroy(textarea)
    })
  }, [value])

  const handleChange = (e) => {
    let newValue = e.target.value
    if (maxLength) {
      newValue = newValue.slice(0, maxLength)
    }
    setValueState(newValue)
  }

  if (finalTranscript && prevFinalTranscript !== finalTranscript) {
    let textToInsert = finalTranscript.toLowerCase()
    textToInsert = textToInsert.replace(/(^|\. *)([a-z])/g, function(_, separator, char) {
      return separator + char.toUpperCase()
    })

    const fixedSubstitutions = [
      { from: 'may thurner', to: 'May-Thurner' },
      { from: 'cockett', to: 'Cockett' },
      { from: 'texto', to: 'terço' },
      { from: 'reabilitação', to: 'reabitação' },
      { from: 'bosniak', to: 'Bosniak' },
      { from: 'doppler', to: 'Doppler' },
      { from: 'dopler', to: 'Doppler' },
      { from: 'convite', to: 'Covid-19' },
      { from: 'convide', to: 'Covid-19' },
      { from: 'covid', to: 'Covid-19' },
      { from: 'covide', to: 'Covid-19' },
      { from: 'covid-19', to: 'Covid-19' },
      { from: 'covid 19', to: 'Covid-19' },
      { from: 'Covid-19-19', to: 'Covid-19' },
      { from: 'avc', to: 'AVC' },
      { from: 'actinicas', to: 'actínicas' },
      { from: 'c1', to: 'C1' },
      { from: 'c2', to: 'C2' },
      { from: 'c3', to: 'C3' },
      { from: 'c4', to: 'C4' },
      { from: 'c5', to: 'C5' },
      { from: 'c6', to: 'C6' },
      { from: 'c7', to: 'C7' },
      { from: 't1', to: 'T1' },
      { from: 't2', to: 'T2' },
      { from: 't3', to: 'T3' },
      { from: 't4', to: 'T4' },
      { from: 't5', to: 'T5' },
      { from: 't6', to: 'T6' },
      { from: 't7', to: 'T7' },
      { from: 't8', to: 'T8' },
      { from: 't9', to: 'T9' },
      { from: 't10', to: 'T10' },
      { from: 't11', to: 'T11' },
      { from: 't12', to: 'T12' },
      { from: 'l1', to: 'L1' },
      { from: 'l2', to: 'L2' },
      { from: 'l3', to: 'L3' },
      { from: 'l4', to: 'L4' },
      { from: 'l5', to: 'L5' },
      { from: 's1', to: 'S1' },
      { from: 'L1 L2', to: 'L1-L2' },
      { from: 'L2 L3', to: 'L2-L3' },
      { from: 'L3 L4', to: 'L3-L4' },
      { from: 'L4 L5', to: 'L4-L5' },
      { from: 'L5 S1', to: 'L5-S1' },
      { from: 'ipmn', to: 'IPMN' },
      { from: 'C1 C2', to: 'C1-C2' },
      { from: 'C2 C3', to: 'C2-C3' },
      { from: 'C3 C4', to: 'C3-C4' },
      { from: 'C4 C5', to: 'C4-C5' },
      { from: 'C5 C6', to: 'C5-C6' },
      { from: 'C6 C7', to: 'C6-C7' },
      { from: 'lefort', to: 'Lefort' },
      { from: 'tep', to: 'TEP' },
      { from: 'sindrome', to: 'síndrome' },
      { from: 'bronquicas', to: 'brônquicas' },
      { from: 'horta', to: 'aorta' },
      { from: 'leriche', to: 'Leriche' },
      { from: 'endolique', to: 'endoleak' },
      { from: 'infra renal', to: 'infrarrenal' },
      { from: 'supra aorticos', to: 'supra-aórticos' },
      { from: 'aórtico mesentérica', to: 'aórtico-mesentérica' },
      { from: 'a, também,', to: 'há, também,' },
      { from: 'zap', to: 'ápice' },
      { from: 'na estampa grafias', to: 'nas topografias' },
      { from: 'bronquios fontes', to: 'brônquios-fonte' },
      { from: 'ausencia', to: 'ausência' },
      { from: 'virugla', to: ',' },
      { from: 'corretora', to: 'curvatura' },
      { from: 'lâminas aperas e cremosas e integrais', to: 'Lâminas papiráceas e crivosas integras' },
      { from: 'canais eróticos', to: 'Canais ópticos' },
      { from: 'bicicleta', to: 'discreta' },
      { from: 'leriche', to: 'Leriche' },
      { from: 'takayasu', to: 'Takayasu' },
      { from: 'tvp', to: 'TVP' },
      { from: 'duplo j', to: 'duplo J' },
    ]

    for (const substitution of [...fixedSubstitutions, ...substitutions]) {
      textToInsert = textToInsert.replace(new RegExp(substitution.from, 'g'), substitution.to)
    }

    textToInsert = textToInsert.replace(/(\S+?) em maiúscul[ao]/ig, function (x) {
      return x.replace(/\sem maiúscul[ao]/ig, '').toUpperCase()
    })

    const breakLine = `
`

    textToInsert = textToInsert.replace('↵', breakLine)

    if (textareaRef.current.selectionEnd === 0) {
      textToInsert = textToInsert.trim().charAt(0).toUpperCase() + textToInsert.trim().slice(1)
    } else if (textareaRef.current.value.substring(textareaRef.current.selectionEnd - 2, textareaRef.current.selectionEnd - 1) === '.') {
      textToInsert = textToInsert.trim().charAt(0).toUpperCase() + textToInsert.trim().slice(1)
    } else if (textareaRef.current.value.substring(textareaRef.current.selectionEnd - 1, textareaRef.current.selectionEnd) === '.') {
      textToInsert = ' ' + textToInsert.trim().charAt(0).toUpperCase() + textToInsert.trim().slice(1)
    } else if (textareaRef.current.value.substring(textareaRef.current.selectionEnd - 2, textareaRef.current.selectionEnd - 1) === '↵') {
      textToInsert = textToInsert.trim().charAt(0).toUpperCase() + textToInsert.trim().slice(1)
    } else if (textareaRef.current.value.substring(textareaRef.current.selectionEnd - 1, textareaRef.current.selectionEnd) === '↵') {
      textToInsert = ' ' + textToInsert.trim().charAt(0).toUpperCase() + textToInsert.trim().slice(1)
    }

    const startPos = textareaRef.current.selectionStart
    const endPos = textareaRef.current.selectionEnd

    setValueState((currentValue) => {
      let newValue = `${currentValue.substring(0, startPos)}${textToInsert}${currentValue.substring(endPos, currentValue.length)}`
      if (maxLength) newValue = newValue.slice(0, maxLength)
      return newValue
    })

    setTimeout(() => {
      textareaRef.current.selectionStart = startPos + textToInsert.length
      textareaRef.current.selectionEnd = startPos + textToInsert.length
    }, 1)

    setPrevFinalTranscript(finalTranscript)
  }

  const handleClickMic = () => {
    textareaRef.current.focus()
    toggle()
  }

  return (
    <Box sx={{ position: 'relative' }}>
      {interim && <Portal><Box sx={{ position: 'fixed', bottom: 16, left: 16, right: 16, bg: 'text', color: 'canvas', fontSize: 42, p: 16, m: '0 auto', textAlign: 'center', borderRadius: 'ultra', fontWeight: 600 }}>{interim}</Box></Portal>}
      <Box sx={{ position: 'absolute', top: '6px', left: '2px' }}>
        <Box sx={{ width: 24, height: 24 }}>
          <Box sx={{ cursor: 'pointer', width: 20, height: 20 }} onClick={handleClickMic}>
            <svg className={isRecording ? 'recording' : ''} viewBox='0 0 24 24' width={20} height={20} fill='currentColor' style={{ top: 0, left: 0, pointerEvents: 'none' }}>
              <path d='M 12 2 C 10.343 2 9 3.343 9 5 L 9 11 C 9 12.657 10.343 14 12 14 C 13.657 14 15 12.657 15 11 L 15 5 C 15 3.343 13.657 2 12 2 z M 5 11 C 5 14.525296 7.6093644 17.433226 11 17.919922 L 11 21 L 13 21 L 13 17.919922 C 16.390636 17.433226 19 14.525296 19 11 L 17 11 C 17 13.761 14.761 16 12 16 C 9.239 16 7 13.761 7 11 L 5 11 z' />
            </svg>
          </Box>
        </Box>
      </Box>
      <textarea ref={textareaRef} {...rest} value={valueState} onChange={handleChange} />
    </Box>
  )

})

export default TextareaWithSpeechRecognition
