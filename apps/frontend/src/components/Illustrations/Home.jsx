import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import CheckBox from './CheckBox'
import Caption from './Caption'
import RadioOrientation from './RadioOrientation'
import RadioVerticalSide from './RadioVerticalSide'
import Drag from './Drag'
import DragText from './DragText'
import Drawing from './Drawing'
import Button from './Button'
import CircularProgress from './CircularProgress'
import CloseIconButton from './CloseIconButton'
import PictureIconButton from './PictureIconButton'

// import ContentEditable from './ContentEditable'
import ClickOutside from './ClickOutside'
// import { replaceFields } from '../../../utils/variables'

function replaceFields(result, vars) {
  return result
}

import EXIF from 'exif-js'

const arrayDateTimeFromIsoString = text => text.slice(0, 16).replace('T', '-').replace(/:/g, '-').split('-')

const formatDateFromIsoString = text => {
  if (!text) return ''
  const d = arrayDateTimeFromIsoString(text)
  return `${d[2]}/${d[1]}/${d[0]}`
}

const getBase64FromImageUrl = (url) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.setAttribute('crossOrigin', 'anonymous')
    img.src = url
    img.onload = function() {
      const canvas = document.createElement('canvas')
      canvas.width = this.width
      canvas.height = this.height
      const ctx = canvas.getContext('2d')
      ctx.drawImage(this, 0, 0)
      const dataURL = canvas.toDataURL('image/png')
      return resolve(dataURL)
      // return resolve(dataURL.replace(/^data:image\/(png|jpg);base64,/, ''))
    }
  })
}

function captionsWithMacro(captions, vars, examination) {
  // TODO: get from db
  const examinationCodes = {
    s65321: 'accessionNumber',
    s82450: 'studyInstanceUID',
    s22584: 'anamnesis',
    s63654: 'indication',
    s08695: 'PhysicianName',
    s49494: 'PhysicianCrm',
    s80168: 'PatientName',
    s01916: 'PatientGender',
    s19738: 'PatientAge',
    s15658: 'examinedAt',
    s52888: 'previousExam1At',
    s88301: 'previousExam2At'
  }
  return captions.map((c) => {
    let result = c.text

    result = result.replace(/<@\s?s\d{5}\s?@>/g, function(match) {
      const sCode = match.replace('<@', '').replace('@>', '')
      if (examinationCodes[sCode] && examination[examinationCodes[sCode]]) {

        if (['s15658', 's52888', 's88301'].includes(sCode)) {
          return formatDateFromIsoString(examination[examinationCodes[sCode]])
        }

        return examination[examinationCodes[sCode]]
      }
      return ''
    })

    if (vars) {
      result = replaceFields(result, vars)
    }

    return result
  })
}

function replaceAttachmentUrl(url) {
  if (!url) return ''
  if (url.includes('https://s3.amazonaws.com/telerison.g/')) return url
  if (url.includes('https://s3.amazonaws.com/telerison.a/')) return url
  let fileName
  if (url.includes('https://telerison.a.s3.amazonaws.com')) {
    fileName = url.replace('https://telerison.a.s3.amazonaws.com/', '')
  } else if (url.includes('https://telerison.s3.amazonaws.com')) {
    fileName = url.replace('https://telerison.s3.amazonaws.com/', '')
  }
  return `https://s3.amazonaws.com/telerison.a/${fileName}`
}

export default class IllustrationDrop extends Component {

 constructor() {
    super()
    this.subtitlesRef = {}
  }

  static defaultProps = {
    id: 'ilustracao',
    withSubtitles: true,
    arrows: [
      { x: 0, y: 0, rotate: 0, width: 123, height: 123, imageUrl: 'https://app.telerison.com/arrow1.png' },
      { x: 0, y: 0, rotate: 0, width: 39, height: 39, imageUrl: 'https://app.telerison.com/arrow2.png' },
      { x: 0, y: 0, rotate: 0, width: 39, height: 39, imageUrl: 'https://app.telerison.com/arrow3.png' },
      { x: 0, y: 0, rotate: 0, width: 39, height: 39, imageUrl: 'https://app.telerison.com/arrow4.png' },
      { x: 0, y: 0, rotate: 0, width: 39, height: 39, imageUrl: 'https://app.telerison.com/arrow5.png' },
      { x: 0, y: 0, rotate: 0, width: 39, height: 39, imageUrl: 'https://app.telerison.com/arrow6.png' },
      { x: 0, y: 0, rotate: 0, width: 39, height: 39, imageUrl: 'https://app.telerison.com/arrow7.png' },
      { x: 0, y: 0, rotate: 0, width: 33, height: 36, imageUrl: 'https://app.telerison.com/arrow8.png' }
      // 'https://app.teleris.com.br/uploads/arrow/arrow/8/arrow.png', 'https://app.teleris.com.br/uploads/arrow/arrow/9/arrow.png', 'https://app.teleris.com.br/uploads/arrow/arrow/10/arrow.png', 'https://app.teleris.com.br/uploads/arrow/arrow/11/arrow.png', 'https://app.teleris.com.br/uploads/arrow/arrow/12/arrow.png', 'https://app.teleris.com.br/uploads/arrow/arrow/13/arrow.png', 'https://app.teleris.com.br/uploads/arrow/arrow/14/arrow.png', 'https://app.teleris.com.br/uploads/arrow/arrow/18/arrow.png'
    ],
    interactives: [
      { x: 0, y: 0, rotate: 0, width: 123, height: 123, imageUrl: 'https://app.telerison.com/i1.png' },
      { x: 0, y: 0, rotate: 0, width: 39, height: 39, imageUrl: 'https://app.telerison.com/i2.png' },
      { x: 0, y: 0, rotate: 0, width: 39, height: 39, imageUrl: 'https://app.telerison.com/i3.png' },
      { x: 0, y: 0, rotate: 0, width: 39, height: 39, imageUrl: 'https://app.telerison.com/i4.png' },
      { x: 0, y: 0, rotate: 0, width: 39, height: 39, imageUrl: 'https://app.telerison.com/i5.png' },
      { x: 0, y: 0, rotate: 0, width: 39, height: 39, imageUrl: 'https://app.telerison.com/i6.png' },
      { x: 0, y: 0, rotate: 0, width: 39, height: 39, imageUrl: 'https://app.telerison.com/i7.png' },
      { x: 0, y: 0, rotate: 0, width: 39, height: 39, imageUrl: 'https://app.telerison.com/i8.png' },
      { x: 0, y: 0, rotate: 0, width: 39, height: 39, imageUrl: 'https://app.telerison.com/i9.png' },
      { x: 0, y: 0, rotate: 0, width: 39, height: 39, imageUrl: 'https://app.telerison.com/i10.png' }
    ],
    history: true,
    buttons: true,
    title: true,
    ruler: true,
    topMenu: true,
    buttonsMenu: true,
    grayArea: false,
    width: 648,
    height: 100,
    titleBackgroundColor: '#476a91',
    titleTextColor: '#ffffff',
    titleBorderColor: '#d1783d',
    onSubtitleChange: () => {},
    onGenerate: () => {},
    onNew: () => {},
    onPartial: () => {},
    onPreview: () => {},
    selected: false,
    onClick: () => {},
    onAdd: () => {},
    multiple: false,
    index: 0,
    zoom: 2,
    format: 'png',
    quality: 80,
    baseUrl: 'https://app.teleris.com.br',
    token: '',
    backgroundQty: 0,
    hideAdd: false,
    pasteImageEnabled: true,
    gallery: [],
    captions: [],
    d1: null,
    d2: null,
    vars: {},
    examination: {}
  }

  state = {
    orientation: 'h',
    verticalSide: 'r',
    subtitles: [],
    subtitles2: [],
    verticalImages: [],
    horizontalImages: [],
    horizontal2Images: [],
    drag1Selected: true,
    drag2Selected: true,
    drag1Info: {},
    drag2Info: {},
    boundingClientRect: null,
    historyImages: [],
    adding: false,
    generating: false,
    partialGenerating: false,
    title: 'Ilustrações',
    result: '',
    loading: false,
    updateImagesDimensions: false,
    subtitlesValues: [],
    sorting: false,
    draggingHorizontalIndex: null,
    draggingVerticalIndex: null,
    draggingExtraIndex: null,
    layers: [],
    visibleLayers: [],
    visibleTextLayers: [],
    selectedLayer: null,
    showNumbers: false,
    numberStart: '1',
    extraAreaSelected: false,
    showExtraArea: false,
  }

  handleExtraAreaClick = () => {
    console.log('handleExtraAreaClick')
    // this.setState(previousState => ({ extraAreaSelected: !previousState.extraAreaSelected }))
    this.setState(previousState => ({ extraAreaSelected: true }))
  }

  addImage(url) {
    this.setState(previousState => {
      let newArray = previousState.horizontalImages.slice()
      newArray.push({src: url})
      return {horizontalImages: newArray, updateImagesDimensions: true}
    })
  }

  handleDropAreaClick = e => {
    this.props.onClick(e, this.props.index)
  }

  handleLayerClick = (e, index) => {
    let visibleLayers = this.state.visibleLayers
    visibleLayers.push(this.props.arrows[index])
    this.setState({visibleLayers: visibleLayers})
  }

  handleInteractiveClick = (e, index) => {
    console.log('handleInteractiveClick')
    let visibleLayers = this.state.visibleLayers
    visibleLayers.push(this.props.interactives[index])
    this.setState({visibleLayers: visibleLayers})
  }

  handleTextLayerClick = e => {
    let visibleTextLayers = this.state.visibleTextLayers
    visibleTextLayers.push({id: this.state.visibleTextLayers.length + 1})
    this.setState({visibleTextLayers: visibleTextLayers})
  }

  handleDeleteLayerTrash = index => {
    console.log('handleDeleteLayerTrash')
    this.setState((prevState, props) => {
      let newLayers = prevState.visibleLayers//.slice(0)
      newLayers.splice(index, 1)
      return {visibleLayers: newLayers}
    })
  }

  // handleDeleteLayer = e => {
  //   console.log('handleDeleteLayer', e)
  //   const index = parseInt(e.target.children[1].getAttribute('data-index'))
  //   this.setState((prevState, props) => {
  //     let newLayers = prevState.visibleLayers//.slice(0)
  //     newLayers.splice(index, 1)
  //     return {visibleLayers: newLayers}
  //   })
  // }

  handleDeleteTextLayer = (e, index) => {
    this.setState((prevState, props) => {
      let newLayers = prevState.visibleTextLayers
      newLayers.splice(index, 1)
      return {visibleTextLayers: newLayers}
    })
  }

  handleExtraImageDragStart = (e, index) => {
    this.setState({ sorting: true, draggingExtraIndex: index})
  }

  handleExtraImageDragEnd = e => {
    this.setState({ sorting: false, draggingExtraIndex: null})
  }

  handleHorizontalImageDragStart = (e, index) => {
    this.setState({sorting: true, draggingHorizontalIndex: index})
  }

  handleHorizontalImageDragEnd = e => {
    this.setState({sorting: false, draggingHorizontalIndex: null})
  }

  handleVerticalImageDragStart = (e, index) => {
    this.setState({sorting: true, draggingVerticalIndex: index})
  }

  handleVerticalImageDragEnd = e => {
    this.setState({sorting: false, draggingVerticalIndex: null})
  }

  isMouseBeyond = (mousePos, elementPos, elementSize, moveInMiddle) => {
    let breakPoint
    if (moveInMiddle) {
      breakPoint = elementSize / 2 //break point is set to the middle line of element
    } else {
      breakPoint = 0
    }
    let mouseOverlap = mousePos - elementPos
    return mouseOverlap > breakPoint
  }

  handleExtraImageDragOver = e => {
    // https://github.com/danielstocks/react-sortable
    const overEl = e.currentTarget //underlying element
    const indexDragged = Number(overEl.dataset.id.replace('h2', '')) //index of underlying element in the set DOM elements
    const indexFrom = Number(this.state.draggingExtraIndex)
    // const height = overEl.getBoundingClientRect().height
    const positionX = e.clientX
    // const positionY = e.clientY
    // const topOffset = overEl.getBoundingClientRect().top
    const moveInMiddle = true

    // const mouseBeyond = this.isMouseBeyond(positionY, topOffset, height, moveInMiddle)
    const mouseBeyond = this.isMouseBeyond(positionX, overEl.getBoundingClientRect().left, overEl.getBoundingClientRect().width, moveInMiddle)

    if (indexDragged !== indexFrom && mouseBeyond) {
      this.setState(previousState => {
        let horizontal2Images = previousState.horizontal2Images.slice()
        horizontal2Images.splice((indexDragged), 0, horizontal2Images.splice(indexFrom, 1)[0])
        return { horizontal2Images: horizontal2Images, updateImagesDimensions: true, draggingExtraIndex: indexDragged }
      })
    }
  }

  handleHorizontalImageDragOver = e => {
    // https://github.com/danielstocks/react-sortable
    const overEl = e.currentTarget //underlying element
    const indexDragged = Number(overEl.dataset.id) //index of underlying element in the set DOM elements
    const indexFrom = Number(this.state.draggingHorizontalIndex)
    // const height = overEl.getBoundingClientRect().height
    const positionX = e.clientX
    // const positionY = e.clientY
    // const topOffset = overEl.getBoundingClientRect().top
    const moveInMiddle = true

    // const mouseBeyond = this.isMouseBeyond(positionY, topOffset, height, moveInMiddle)
    const mouseBeyond = this.isMouseBeyond(positionX, overEl.getBoundingClientRect().left, overEl.getBoundingClientRect().width, moveInMiddle)

    if (indexDragged !== indexFrom && mouseBeyond) {
      this.setState(previousState => {
        let horizontalImages = previousState.horizontalImages.slice()
        horizontalImages.splice((indexDragged), 0, horizontalImages.splice(indexFrom, 1)[0])
        return {horizontalImages: horizontalImages, updateImagesDimensions: true, draggingHorizontalIndex: indexDragged}
      })
    }
  }

  handleVerticalImageDragOver = e => {
    const overEl = e.currentTarget //underlying element
    const indexDragged = Number(overEl.dataset.id) //index of underlying element in the set DOM elements
    const indexFrom = Number(this.state.draggingVerticalIndex)
    const height = overEl.getBoundingClientRect().height
    // const positionX = e.clientX
    const positionY = e.clientY
    const topOffset = overEl.getBoundingClientRect().top
    const moveInMiddle = true

    const mouseBeyond = this.isMouseBeyond(positionY, topOffset, height, moveInMiddle)
    // const mouseBeyond = this.isMouseBeyond(positionX, overEl.getBoundingClientRect().left, overEl.getBoundingClientRect().width, moveInMiddle)

    if (indexDragged !== indexFrom && mouseBeyond) {
      this.setState(previousState => {
        let verticalImages = previousState.verticalImages.slice()
        verticalImages.splice((indexDragged), 0, verticalImages.splice(indexFrom, 1)[0])
        return {verticalImages: verticalImages, updateImagesDimensions: true, draggingVerticalIndex: indexDragged}
      })
    }
  }

  updateSubtitlesValues() {
    console.log('updateSubtitlesValues')
    let values = []
    console.log('this.subtitlesRef', this.subtitlesRef)
    Object.keys(this.subtitlesRef).forEach(key => {
      if (this.subtitlesRef[key] && this.subtitlesRef[key].value) values.push(this.subtitlesRef[key].value)
    })
    // Object.keys(this.subtitlesRef).map((key, index) => {
    //   if (this.subtitlesRef[key] && this.subtitlesRef[key].htmlEl) values.push(this.subtitlesRef[key].htmlEl.innerHTML)
    // })
    console.log('subtitlesValues', values)
    this.setState({ subtitlesValues: values })
  }

  handleSubtitleChange = () => {
    this.updateSubtitlesValues()
  }

  updateSubtitlesValues2() {
    let values = []
    Object.keys(this.subtitlesRef).forEach(key => {
      if (this.subtitlesRef[key] && this.subtitlesRef[key].htmlEl) values.push(this.subtitlesRef[key].htmlEl.innerHTML)
    })
    // Object.keys(this.subtitlesRef).map((key, index) => {
    //   if (this.subtitlesRef[key] && this.subtitlesRef[key].htmlEl) values.push(this.subtitlesRef[key].htmlEl.innerHTML)
    // })
    this.setState({ subtitlesValues2: values })
  }

  handleSubtitleChange2 = () => {
    this.updateSubtitlesValues()
  }

  handleHistoryImageClick = e => {
    if (this.state.orientation === 'h') {
      let newArray = this.state.horizontalImages.slice()
      newArray.push({src: e.target.src})
      this.setState({horizontalImages: newArray, updateImagesDimensions: true})
    }

    if (this.state.orientation === 'v') {
      let newArray = this.state.verticalImages.slice()
      newArray.push({src: e.target.src})
      this.setState({verticalImages: newArray, updateImagesDimensions: true})
    }
  }

  handleGalleryImageClick = e => {

    console.log('this.state.extraAreaSelected', this.state.extraAreaSelected)

    if (this.state.extraAreaSelected) {
      let newArray = this.state.horizontal2Images.slice()
      newArray.push({ src: e.target.src.replace('thumb_', '') })
      console.log('horizontal2Images newArray', newArray)
      this.setState({horizontal2Images: newArray, updateImagesDimensions: true})
    } else {

      if (this.state.orientation === 'h') {
        let newArray = this.state.horizontalImages.slice()
        newArray.push({ src: e.target.src.replace('thumb_', '') })
        this.setState({horizontalImages: newArray, updateImagesDimensions: true})
      }

      if (this.state.orientation === 'v') {
        let newArray = this.state.verticalImages.slice()
        newArray.push({ src: e.target.src.replace('thumb_', '') })
        this.setState({verticalImages: newArray, updateImagesDimensions: true})
      }

    }

  }

  handleKeyImagesImageClick = e => {
    if (this.state.orientation === 'h') {
      let newArray = this.state.horizontalImages.slice()
      newArray.push({ src: e.target.src.replace('thumb_', 'trimmed_') })
      this.setState({horizontalImages: newArray, updateImagesDimensions: true})
    }

    if (this.state.orientation === 'v') {
      let newArray = this.state.verticalImages.slice()
      newArray.push({ src: e.target.src.replace('thumb_', 'trimmed_') })
      this.setState({verticalImages: newArray, updateImagesDimensions: true})
    }
  }

  handleRemoveHistoryImageClick = index => {
    return this.setState(previousState => {
      return {historyImages: previousState.historyImages.filter((_, i) => i !== index)}
    })
  }

  getHtmlAndHeight(withTitle = true) {
    let height = ReactDOM.findDOMNode(this.refs.dropArea).offsetHeight
    let title = ''
    if (this.state.title !== '' && withTitle) {
      title = `<div style='width:100%; height:30px; color:${this.props.titleTextColor}; background-color:${this.props.titleBackgroundColor}; font-family:Arial; font-size:14.63px; font-weight: bold; text-align: center; border-bottom: 5px solid ${this.props.titleBorderColor}; border-top: 5px solid ${this.props.titleBorderColor}'>${this.state.title}</div>`
      height += 30
    }
    let html = ReactDOM.findDOMNode(this.refs.dropArea).innerHTML

    html = html.replace(/<button.*?<\/button>/g, '')
    html = html.replace(/<div style="position: absolute; width: 7px; height: 7px; user-select: none; z-index: 1000; border: 1px solid white; background-color: black; top: -7px; left: -7px; border-radius: 4px;"><\/div>/g, '')
    html = html.replace(/<div style="position: absolute; width: 7px; height: 7px; user-select: none; z-index: 1000; border: 1px solid black; background-color: white; right: -7px; bottom: -7px;"><\/div>/g, '')
    html = html.replace(/<div style="position: absolute; width: 7px; height: 7px; user-select: none; z-index: 1000; border: 1px solid darkgray; background-color: lightgray; right: -7px; bottom: -7px;"><\/div>/g, '')

    html = html.replace(/<div style="position: absolute; width: 14px; height: 12px; user-select: none; z-index: 1000; top: -14px; left: -14px;">.+?<\/div>/g, '')
    html = html.replace(/<div style="position: absolute; width: 18px; height: 18px; user-select: none; z-index: 1000; right: -18px; bottom: -18px;">.+?<\/div>/g, '')
    html = html.replace(/<div style="position: absolute; width: 9px; height: 9px; user-select: none; z-index: 1000; right: -9px; top: -14px; cursor: pointer;">.+?<\/div>/g, '')
    html = html.replace(/<div style="position: absolute; width: 12px; height: 12px; user-select: none; z-index: 1000; right: -14px; bottom: -14px;">.+?<\/div>/g, '')
    html = html.replace(/<div style="position: absolute; width: 13px; height: 14px; user-select: none; z-index: 1000; right: -13px; bottom: -20px;">.+?<\/div>/g, '')

    html = html.replace(/<div style="position: absolute; width: 13px; height: 14px; user-select: none; z-index: 1000; right: -13px; top: -20px; cursor: pointer;">.+?<\/div>/g, '')

    html = `<div style='position:relative'>${html}</div>`

    console.log('html', html)

    const topHtml = `<!doctype html><html lang='pt-br'><head><meta charset='utf-8'><meta name='viewport' content='width=device-width, initial-scale=1'><style>* {-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box;} html {-webkit-tap-highlight-color: transparent; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;} body {margin: 0;font-family: 'Arial'; font-size: 1rem; font-weight: 400; line-height: 1.5;color: #305479; background-color: #fff;}</style></head><body><div id='main' style='position: relative; border: none; min-height: ${this.props.height}px; max-width: ${this.props.width}px;'>`
    const bottomHtml = "</div></body></html>"

    let subtitleContent = ''
    // const regex = /<span.+?class=["']subtitle["'].*?>(.*?)<\/span>/gi
    // const regex = /<input.+?list=["'].+?options["'].+?value=["'](.*?)["'].+?>/gi
    const regex = /<input id="ilustracao.+?value="(.*?)".+?>/gi
    let match = regex.exec(html)
    while (match != null) {
      subtitleContent += match[1]
      match = regex.exec(html)
    }
    subtitleContent = subtitleContent.replace(/&nbsp;/g, ' ')

    if (!/\S+?/.test(subtitleContent)) {
      html = html.replace(new RegExp('<table id="subtitles">.*?</table>', 'g'), '')
      height -= 20
    }

    return {html: `${topHtml}${title}${html}${bottomHtml}`, height: height}
  }

  handleClean = e => {
    this.setState({numberStart: '1', visibleLayers: [], visibleTextLayers: [], subtitles: [], subtitlesValues: [], verticalImages: [], horizontalImages: [], horizontal2Images: [], historyImages: [], title: 'Ilustrações'})
    this.props.onNew()
  }

  generateIllustration = ({ html, scale = 2 }) => {
    return new Promise((resolve, reject) => {
      // fetch(`${this.props.baseUrl}/generate-illustration`, { method: 'POST', headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${this.props.token}`}, body: JSON.stringify({...illustrationData})})
      // encodeURIComponent(html)
      fetch(`https://p.telerison.com/pup`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ h: html, z: scale }) })
        .then(response => {
          if (!response || !response.ok) return reject({code: response.status, message: response.statusText})
          return response.json()
        })
        .then(item => {
          if (item.error) return reject(item.error)
          // if (!item.success) return reject({code: 'without-url', message: 'Without url'})
          return resolve(item)
        })

      // fetch(`${this.props.baseUrl}/generate-illustration`, { headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${this.props.token}`}, body: JSON.stringify({...illustrationData})})
      //   .then(response => {
      //     if (!response || !response.ok) return reject({code: response.status, message: response.statusText})
      //     return response.json()
      //   })
      //   .then(item => {
      //     if (item.error) return reject(item.error)
      //     if (!item.success) return reject({code: 'without-url', message: 'Without url'})
      //     return resolve(item)
      //   })
    })
  }

  handleGenerateFinal = e => {
    this.setState({generating: true}, () => setTimeout(() => this.setState({generating: false}), 10000) )

    this.props.onPreview()

    const htmlAndHeight = this.getHtmlAndHeight()

    const scale = this.props.zoom

    // let height = htmlAndHeight.height * scale
    // height += 100
    let height = htmlAndHeight.height

    let html = htmlAndHeight.html
    console.log('!!!html', html)
    html = html.replace(/<input\s+?name="a\d+".+?value="(.+?)">/g, "$1")
    html = html.replace(/<input name="a\d+?" placeholder="a\d+?" tabindex="\d+?">/g, '')

    // const width = this.props.width * scale
    const width = 648

    let quality = 80
    let filetype = 'png'
    let finalwidth = 648
    if (this.props.format) filetype = this.props.format
    if (this.props.quality) quality = this.props.quality
    if (this.props.finalWidth) finalwidth = this.props.finalWidth

    this.generateIllustration({html: html, finalwidth: finalwidth, height: height, width: width, scale: scale, crop: 'true', filetype: filetype, quality: quality})
      .then(item => {
        this.setState({generating: false})
        this.props.onGenerate(item.url)
      })
      .catch(error => {
        this.setState({partialGenerating: false})
      })
  }

  handleGeneratePartial = e => {
    this.setState({partialGenerating: true}, () => setTimeout(() => this.setState({partialGenerating: false}), 10000) )

    this.props.onPartial()

    const scale = this.props.zoom
    const height = this.getHtmlAndHeight(false).height * scale
    const html = this.getHtmlAndHeight(false).html
    // const width = this.props.width * scale

    const width = 648

    let quality = 80
    let filetype = 'png'
    let finalWidth = 648
    if (this.props.format) filetype = this.props.format
    if (this.props.quality) quality = this.props.quality
    if (this.props.finalWidth) finalWidth = this.props.finalWidth

    this.generateIllustration({html: html, finalwidth: finalWidth, height: height, width: width, scale: scale, crop: 'true', filetype: filetype, quality: quality})
      .then(item => {
        const imageUrl = item.url
        let newImage = new Image()
        newImage.onload = () => {
          let newArray = this.state.historyImages.slice()
          newArray.push({src: imageUrl})
          this.setState({historyImages: newArray, partialGenerating: false, visibleLayers: [], visibleTextLayers: [], subtitles: [], subtitlesValues: [], verticalImages: [], horizontalImages: []})
        }
        newImage.src = imageUrl
      })
      .catch(error => {
        this.setState({partialGenerating: false})
      })
  }

  handleAdd = e => {
    this.setState({adding: true}, () => setTimeout(() => this.setState({adding: false}), 10000) )

    const htmlAndHeight = this.getHtmlAndHeight()

    const scale = this.props.zoom

    // let height = htmlAndHeight.height * scale
    // height += 100
    let height = htmlAndHeight.height

    let html = htmlAndHeight.html
    html = html.replace(/<input\s+?name="a\d+".+?value="(.+?)">/g, "$1")
    html = html.replace(/<input name="a\d+?" placeholder="a\d+?" tabindex="\d+?">/g, '')

    // const width = this.props.width * scale
    const width = 648

    let quality = 80
    let filetype = 'png'
    let finalWidth = 648
    if (this.props.format) filetype = this.props.format
    if (this.props.quality) quality = this.props.quality
    if (this.props.finalWidth) finalWidth = this.props.finalWidth

    this.generateIllustration({html: html, finalwidth: finalWidth, height: height, width: width, scale: scale, crop: 'true', filetype: filetype, quality: quality})
      .then(async item => {
        const base64Image = await getBase64FromImageUrl(item.url)
        this.setState({adding: false})
        this.props.onAdd(base64Image)

      })
      .catch(error => {
        this.setState({adding: false})
      })

  }

  handleSubtitleClick = (e, index) => {
    const newWidth = this.state.subtitles[index].width + this.state.subtitles[index + 1].width
    let newSubtitles = this.state.subtitles.map((_, i) => i === index ? {...{width: newWidth}} : _ )
    newSubtitles = newSubtitles.filter((_, i) => i !== (index + 1))
    this.setState({subtitles: newSubtitles}, () => this.updateSubtitlesValues())
  }

  handleSubtitleClick2 = (e, index) => {
    const newWidth = this.state.subtitles2[index].width + this.state.subtitles2[index + 1].width
    let newSubtitles = this.state.subtitles2.map((_, i) => i === index ? {...{width: newWidth}} : _ )
    newSubtitles = newSubtitles.filter((_, i) => i !== (index + 1))
    this.setState({subtitles2: newSubtitles}, () => this.updateSubtitlesValues2())
  }

  setOrientation = e => {
    this.setState({orientation: e.target.value, updateImagesDimensions: true})
  }

  setVerticalSide = e => {
    this.setState({verticalSide: e.target.value, updateImagesDimensions: true})
  }

  onPaste = e => {
    if (!this.props.pasteImageEnabled) return null

    if (this.props.multiple && !this.props.selected) return false
    const fileList = Array.prototype.slice.call(e.clipboardData.files)

    if (fileList.length > 0 && (fileList[0].type === 'image/png' || fileList[0].type === 'image/jpeg')) {
      e.preventDefault()
      this.setState({loading: true})
      const reader = new FileReader()
      reader.onload = e => {
        const image = e.target.result
        const exif = EXIF.readFromBinaryFile(this.base64ToArrayBuffer(image))
        this.processImage(image, exif)
      }
      reader.readAsDataURL(fileList[0])
    }
  }

  onDragOver = e => {
    e.stopPropagation()
    e.preventDefault()
  }

  onDrop = e => {
    e.preventDefault()

    if (this.state.sorting) {
      this.setState({sorting: false})
    }
    else {
      const fileList = Array.prototype.slice.call(e.dataTransfer.files)
      this.proccessFiles(fileList)
    }
  }

  handleHorizontalDoubleClick = (e, index) => {
    return this.setState(previousState => {
      return {horizontalImages: previousState.horizontalImages.filter((_, i) => i !== index), updateImagesDimensions: true}
    })
  }

  handleVerticalDoubleClick = (e, index) => {
    return this.setState(previousState => {
      return {verticalImages: previousState.verticalImages.filter((_, i) => i !== index), updateImagesDimensions: true}
    })
  }

  handleHorizontal2DoubleClick = (e, index) => {
    return this.setState(previousState => {
      return {horizontal2Images: previousState.horizontal2Images.filter((_, i) => i !== index), updateImagesDimensions: true}
    })
  }

  processImage = (dataURL, exif) => {
    const page = this
    const img = document.createElement('img')
    img.src = dataURL

    img.onload = e => {
      const MAX_WIDTH = 1296
      const MAX_HEIGHT = 1296
      let width = img.width
      let height = img.height

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width
          width = MAX_WIDTH
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height
          height = MAX_HEIGHT
        }
      }

      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')

      switch(exif.Orientation) {
        case 8:
          canvas.width = height
          canvas.height = width
          ctx.setTransform(0, -1, 1, 0, 0, height)
          ctx.drawImage(img, 0, 0, height, width)
          break
        case 6:
          canvas.width = height
          canvas.height = width
          ctx.setTransform(0, 1, -1, 0, height, 0)
          ctx.drawImage(img, 0, 0, width, height)
          break
        default:
          canvas.width = width
          canvas.height = height
          ctx.drawImage(img, 0, 0, width, height)
          break
      }

      const newDataURL = canvas.toDataURL('image/jpeg', 0.8)

      if (this.state.extraAreaSelected) {
        this.setState(previousState => {
          const newHorizontal2Images = [...previousState.horizontal2Images, { src: newDataURL }]
          return {
            horizontal2Images: newHorizontal2Images,
            updateImagesDimensions: true
          }
        })
      } else {

        if (page.state.orientation === 'h') {
          let newArray = this.state.horizontalImages.slice()
          newArray.push({src: newDataURL})
          this.setState({horizontalImages: newArray, updateImagesDimensions: true})
        }

        if (page.state.orientation === 'v') {
          let newArray = this.state.verticalImages.slice()
          newArray.push({src: newDataURL})
          this.setState({verticalImages: newArray, updateImagesDimensions: true})
        }

      }

      this.setState({loading: false})
    } // img.onload
  }

  base64ToArrayBuffer = base64 => {
    base64 = base64.replace(/^data:([^;]+);base64,/gmi, '')
    const binaryString = atob(base64)
    const len = binaryString.length
    const bytes = new Uint8Array(len)
    for (var i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i)
    }
    return bytes.buffer
  }

  proccessFiles = files => {
    const page = this

    files.forEach((file, index, array) => {
      const reader = new FileReader()

      reader.onload = e => {
        let dataURL = e.target.result
        let newImage = new Image()
        newImage.onload = () => {
          if (page.state.orientation === 'h') {
            let newArray = this.state.horizontalImages.slice()
            newArray.push({src: dataURL})
            this.setState({horizontalImages: newArray, updateImagesDimensions: true})
          }

          if (page.state.orientation === 'v') {
            let newArray = this.state.verticalImages.slice()
            newArray.push({src: dataURL})
            this.setState({verticalImages: newArray, updateImagesDimensions: true})
          }

          this.setState({loading: false})
        }
        newImage.src = dataURL
      }
      reader.readAsDataURL(file)
    })
  }

  calculateFinalHeight = (images, width) => {
    let greaterHeight = Math.max.apply(Math, images.map((o) => { return o.height }))
    let sumWidth = 0
    images.forEach((image) => {
      let newImageWidth = image.width * greaterHeight / image.height
      sumWidth += newImageWidth
    })
    return (greaterHeight * width / sumWidth)
  }

  imgList = orientation => {
    // const divList = Array.prototype.slice.call(ReactDOM.findDOMNode(this.refs[orientation]).children)
    const divList = (this.refs[orientation] && this.refs[orientation].children) ? Array.prototype.slice.call(this.refs[orientation].children) : []
    return divList.map((div) => {return div.children[0]})
  }

  updateImagesDimensions = () => {
    const verImgList = this.imgList('v')
    const horImgList = this.imgList('h')

    horImgList.forEach((img) => {
      img.style.width = ''
      img.style.height = ''
    })

    verImgList.forEach((img) => {
      img.style.width = ''
      img.style.height = ''
    })

    if (verImgList.length === 0) {
      let calc = this.calculateFinalHeight(horImgList, this.props.width)
      horImgList.forEach((img) => {
        img.style.width = 'auto'
        img.style.height = `${calc}px`
      })
    } else {
      let sumVerticalHeights = 0
      verImgList.forEach((img) => {
        img.style.width = `${324}px`
        img.style.height = 'auto'
        sumVerticalHeights += img.height
      })

      let sumHorizontalWidths = 0
      horImgList.forEach((img) => {
        img.style.width = 'auto'
        img.style.height = `${sumVerticalHeights}px`
        sumHorizontalWidths += img.width
      })

      let verticalWidth = 324
      const totalWidth = verticalWidth + sumHorizontalWidths
      const newVerticalWidth = (verticalWidth * this.props.width) / totalWidth

      verImgList.forEach((img) => {
        img.style.width = `${newVerticalWidth}px`
        img.style.height = 'auto'
      })

      horImgList.forEach((img) => {
        const newHorizontalWidth = (img.width * this.props.width) / totalWidth
        img.style.width = `${newHorizontalWidth}px`
        img.style.height = 'auto'
      })
    }

    let verHeightTotal = 0
    let verWidth = 0
    verImgList.forEach((img) => {
      img.style.height = `${img.height}px`
      verHeightTotal += img.height
      verWidth = img.width
    })

    let horWidthTotal = 0
    horImgList.forEach((img) => {
      img.style.width = `${img.width}px`
      if (verHeightTotal > 0) img.style.height = `${verHeightTotal}px`
      horWidthTotal += img.width
    })

    const diff = this.props.width - (horWidthTotal + verWidth)
    if (horImgList.length > 0) horImgList[0].style.width = `${(horImgList[0].width + diff)}px`

    this.updateSubtitles()
    this.updateSubtitles2()
  }

  updateImagesDimensions2 = () => {
    const horImgList = this.imgList('h2')

    horImgList.forEach((img) => {
      img.style.width = ''
      img.style.height = ''
    })

    let calc = this.calculateFinalHeight(horImgList, this.props.width)
    horImgList.forEach((img) => {
      img.style.width = 'auto'
      img.style.height = `${calc}px`
    })

    let horWidthTotal = 0
    horImgList.forEach((img) => {
      img.style.width = `${img.width}px`
      horWidthTotal += img.width
    })

    const diff = this.props.width - horWidthTotal
    if (horImgList.length > 0) horImgList[0].style.width = `${(horImgList[0].width + diff)}px`

    this.updateSubtitles()
    this.updateSubtitles2()
  }

  updateSubtitles = () => {
    let subtitles = []
    this.imgList('h').forEach((img) => {
      subtitles.push({width: parseInt(img.style.width.replace('px', ''))})
    })

    const verImgList = this.imgList('v')
    if (verImgList.length > 0)
      if (this.state.verticalSide === 'l')
        subtitles.unshift({width: verImgList[0].width})
      else
        subtitles.push({width: verImgList[0].width})

    this.setState({subtitles: subtitles}, () => this.updateSubtitlesValues())
  }

  updateSubtitles2 = () => {
    let subtitles = []
    this.imgList('h2').forEach((img) => {
      subtitles.push({width: parseInt(img.style.width.replace('px', ''))})
    })

    // const verImgList = this.imgList('v')
    // if (verImgList.length > 0)
    //   if (this.state.verticalSide === 'l')
    //     subtitles.unshift({width: verImgList[0].width})
    //   else
    //     subtitles.push({width: verImgList[0].width})

    this.setState({subtitles2: subtitles}, () => this.updateSubtitlesValues2())
  }

  updateDimensions = () => {
    this.setState({boundingClientRect: ReactDOM.findDOMNode(this.refs.dropArea).getBoundingClientRect()})
    // if(window.innerWidth < 500) {
    //   this.setState({ width: 450, height: 102 });
    // } else {
    //   let update_width  = window.innerWidth-100;
    //   let update_height = Math.round(update_width/4.4);
    //   this.setState({ width: update_width, height: update_height });
    // }
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
    window.addEventListener('paste', this.onPaste)

    // document.addEventListener('click', ()=>this.setState({drag1Selected: false, drag2Selected: false}), true)
    this.updateDimensions()
  }

  componentWillUnmount() {
    // document.removeEventListener('click', ()=>this.setState({drag1Selected: false, drag2Selected: false}), true)
    window.removeEventListener('resize', this.updateDimensions)
    window.removeEventListener('paste', this.onPaste)
  }

  componentDidUpdate = (prevProps, prevState) => {
    // https://stackoverflow.com/a/19746771/7517739
    if (!(this.state.subtitlesValues.length === prevState.subtitlesValues.length && this.state.subtitlesValues.every((v,i)=> v === prevState.subtitlesValues[i]))) {
      this.props.onSubtitleChange(this.state.subtitlesValues)
    }

    if (this.state.updateImagesDimensions) {
      this.setState({updateImagesDimensions: false}, () => this.updateImagesDimensions())
      setTimeout(() => this.updateImagesDimensions(), 100)
      setTimeout(() => this.updateImagesDimensions(), 500)

      setTimeout(() => this.updateImagesDimensions2(), 100)
      setTimeout(() => this.updateImagesDimensions2(), 500)
    }

    if (prevState.showExtraArea !== this.state.showExtraArea) {
      this.updateImagesDimensions()
    }

    if (prevState.showExtraArea && !this.state.showExtraArea) {
      this.setState({ extraAreaSelected: false, horizontal2Images: [] })
      Object.keys(this.subtitlesRef).forEach(key => {
        this.subtitlesRef[key].reset()
      })
    }

    // if (this.props.arrows && prevProps.arrows !== this.props.arrows) {
      // this.setState({visibleLayers: this.props.arrows, layers: this.props.arrows})
    // }

    // if (
    //   (this.state.horizontalImages !== prevState.horizontalImages)
    //   || (this.state.verticalImages !== prevState.verticalImages)
    //   || (prevState.verticalSide !== this.state.verticalSide)
    //   )
    //   this.updateImagesDimensions()

    // if (prevState.verticalSide !== this.state.verticalSide)
    //   this.updateImagesDimensions()
  }

  convertNumber(number) {
    const dic = {1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F', 7: 'G', 8: 'H', 9: 'I', 10: 'J', 11: 'K', 12: 'L', 13: 'M', 14: 'N', 15: 'O', 16: 'P', 17: 'Q', 18: 'R', 19: 'S', 20: 'T', 21: 'U', 22: 'V', 23: 'W', 24: 'X', 25: 'Y', 26: 'Z'}
    const revDic = Object.keys(dic).reduce((obj, key) => { obj[dic[key].toLowerCase()] = Number(key); return obj}, {})

    if (Number.isInteger(parseInt(this.state.numberStart))) {
      return (number + Number(this.state.numberStart) - 1)
    }
    else if (/^[a-z]$/.test(this.state.numberStart)) {
      return dic[(number + revDic[this.state.numberStart] - 1)].toLowerCase()
    }
    else if (/^[A-Z]$/.test(this.state.numberStart)) {
      return dic[(number + revDic[this.state.numberStart.toLowerCase()] - 1)].toUpperCase()
    }
    else {
      return number
    }
  }

  render() {

    let baseStyle = {
      position: 'relative',
      border: '1px solid #ccc',
      borderTop: 'none',
      minHeight: '100px',
      width: `${this.props.width}px`
    }

    if ((this.state.horizontalImages.length > 0) || (this.state.verticalImages.length > 0)) {
      baseStyle['border'] = 'none'
    }
    else {
      baseStyle['border'] = '1px solid #ccc'
      if (this.props.grayArea) {
        baseStyle['border'] = 'none'
        baseStyle['backgroundColor'] = '#ccc'
        baseStyle['minHeight'] = `${this.props.height}px`
      }
    }



    const verticalDiv = (
      <div id='v' ref='v' style={{display: 'flex', flexDirection: 'column'}}>
        {this.state.verticalImages.map((image, index) => {
          const horizontalCount = this.state.horizontalImages.length
          return (
          <div key={`v${index}`} data-id={index} style={{display: 'flex', flexDirection: 'column', position: 'relative'}} onDragStart={e => this.handleVerticalImageDragStart(e, index)} onDragEnd={this.handleVerticalImageDragEnd} onDragOver={this.handleVerticalImageDragOver}>
            <img style={{userSelect: 'none'}} alt='' src={image.src} onDoubleClick={e => this.handleVerticalDoubleClick(e, index)} />
            {this.state.showNumbers &&
              <div style={{width: 'auto', position: 'absolute', backgroundColor: 'hsla(0, 0%, 30%, 1)', color: 'white', padding: '3px', fontSize: '11px', lineHeight: '9px', fontFamily: 'Arial'}}>{this.convertNumber(horizontalCount + index + 1)}</div>
            }
          </div>
          )
        })}
      </div>
    )

    const horizontallDiv = (
      <div id='h' ref='h' style={{display: 'flex'}}>
        {this.state.horizontalImages.map((image, index) => (
          <div key={`h${index}`} data-id={index} style={{display: 'flex', flexDirection: 'column', position: 'relative', color: '#ccc'}} onDragStart={e => this.handleHorizontalImageDragStart(e, index)} onDragEnd={this.handleHorizontalImageDragEnd} onDragOver={this.handleHorizontalImageDragOver}>
            <img style={{userSelect: 'none'}} alt='' src={image.src} onDoubleClick={e => this.handleHorizontalDoubleClick(e, index)} />
            {this.state.showNumbers &&
              <div style={{width: 'auto', position: 'absolute', backgroundColor: 'hsla(0, 0%, 30%, 1)', color: 'white', padding: '4px 3px 3px 3px', fontSize: '11px', lineHeight: '9px', fontFamily: 'Arial'}}>{this.convertNumber(index + 1)}</div>
            }
          </div>
        ))}
      </div>
    )

    if (this.props.backgroundQty && this.state.horizontalImages.length === 0 && this.state.verticalImages.length === 0)
      baseStyle = {...baseStyle, width: '100%', backgroundColor: 'lightsteelblue', height: '150px', display: 'flex', justifyContent: 'safe'}

    return (
      <div style={{ display: 'flex' }}>

        <div style={{width: `${this.props.width}px`}}>

          {(this.props.topMenu || this.props.buttonsMenu) && (

            <div>

              <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                {this.props.interactives.map((layer, index) => (
                  <Drawing height={30} outlineColor='#ccc' selected={index === this.state.selectedLayer} key={index} url={layer.imageUrl} onClick={e => this.handleInteractiveClick(e, index)} />
                ))}
              </div>

              {this.props.arrows.length > 0 && (
                <div style={{width: '100%', display: 'flex', padding: '0.5rem', marginBottom: '1rem', justifyContent: 'center'}}>
                  <Drawing height={30} outlineColor='#ccc' selected={false} key='text' url='/arrow0.png' onClick={e => this.handleTextLayerClick(e)} />

                  {this.props.arrows.map((layer, index) => (
                    <Drawing height={30} outlineColor='#ccc' selected={index === this.state.selectedLayer} key={index} url={layer.imageUrl} onClick={e => this.handleLayerClick(e, index)} />
                  ))}
                </div>
              )}

              <div style={{display: 'flex', flexDirection: 'column'}}>
                {this.props.topMenu && (
                  <div style={{borderBottom: '1px solid #ccc', display: 'flex', justifyContent: 'space-around'}}>
                    <RadioOrientation onChange={this.setOrientation} orientation={this.state.orientation} />
                    <RadioVerticalSide onChange={this.setVerticalSide} verticalSide={this.state.verticalSide} />
                    <div>
                      <CheckBox size='18px' style={{display: 'inline-flex'}} circleColor='rgb(48, 84, 121)' ballColor='rgb(48, 84, 121)' name='showExtraArea' value={this.state.showExtraArea} checked={this.state.showExtraArea} onChange={e => this.setState({showExtraArea: !e.target.value})} label='Área extra' />
                    </div>
                  </div>
                )}

                {this.props.buttonsMenu && (
                  <div style={{borderBottom: '1px solid #ccc', display: 'flex', padding: '0.75rem 0', justifyContent: 'space-between'}}>

                    <div style={{display: 'flex', width: '100%', justifyContent: 'space-between'}}>

                      <div>
                        <Button loading={this.state.partialGenerating} disabled={this.state.partialGenerating} style={{padding: '0.5rem 1rem', marginRight: '1rem'}} id='btn1' borderColor='#ccc' hoverBgColor='#efefef' onClick={this.handleGeneratePartial}>
                          Parcial
                          {this.state.partialGenerating && (
                            <CircularProgress size={16} thickness={2.6} style={{marginLeft: '8px'}} color='#ccc' />
                          )}
                        </Button>

                        <Button loading={this.state.generating} disabled={this.state.generating} style={{padding: '0.5rem 1rem', marginRight: '1rem'}} id='btn2' borderColor='#ccc' hoverBgColor='#efefef' onClick={this.handleGenerateFinal}>
                          Prever
                          {this.state.generating && (
                            <CircularProgress size={16} thickness={2.6} style={{marginLeft: '8px'}} color='#ccc' />
                          )}
                        </Button>

                        {!this.props.hideAdd && <Button loading={this.state.adding} disabled={this.state.adding} style={{padding: '0.5rem 1rem', marginRight: '1rem'}} id='btn3' borderColor='#ccc' hoverBgColor='#efefef' onClick={this.handleAdd}>
                          Adicionar
                          {this.state.adding && (
                            <CircularProgress size={16} thickness={2.6} style={{marginLeft: '8px'}} color='#ccc' />
                          )}
                        </Button>}
                      </div>

                      <div style={{paddingTop: '7px'}}>
                        <CheckBox size='18px' style={{display: 'inline-flex'}} circleColor='rgb(48, 84, 121)' ballColor='rgb(48, 84, 121)' name='showNumbers' value={this.state.showNumbers} checked={this.state.showNumbers} onChange={e => this.setState({showNumbers: !e.target.value})} label='Exibir numeração' />
                        <input maxLength='1' style={{width: '32px', textAlign: 'center', marginLeft: '8px'}} type='text' name='numberStart' value={this.state.numberStart} onChange={e => this.setState({numberStart: e.target.value})} />
                      </div>

                      <div>
                        <Button style={{padding: '0.5rem 1rem'}} id='btn3' borderColor='#ccc' hoverBgColor='#efefef' onClick={this.handleClean}>
                          Novo
                        </Button>
                      </div>

                    </div>

                    {/*<div>
                      <div style={{display: 'inline-block', margin: '10px'}}>
                        {this.state.loading && (
                          <CircularProgress size={20} thickness={2.6} style={{marginLeft: '8px'}} color='#ccc' />
                        )}
                      </div>
                    </div>*/}
                  </div>
                )}
              </div>

            </div>
          )}

          <div>

            {/*<Drag ref='drag1' width={17} height={17} onChange={(i) => this.setState({drag1Info: i})} boundingClientRect={this.state.boundingClientRect} selected={this.state.drag1Selected} onClick={()=>this.setState({drag1Selected: true, drag2Selected: false})}>
              <svg viewBox='0 0 16 16' width='100%' height='100%' fill='none' stroke='currentcolor' strokeWidth='3' style={{display: 'inline-block', verticalAlign: 'middle', overflow: 'visible'}}><path d='M0 8 L14.5 8'></path><path d='M7.560660171779821 1.0606601717798212 L14.5 8 L7.560660171779821 14.939339828220179'></path></svg>
            </Drag>

            <Drag ref='drag2' width={100} height={100} onChange={(i) => this.setState({drag2Info: i})} boundingClientRect={this.state.boundingClientRect} selected={this.state.drag2Selected} onClick={()=>this.setState({drag2Selected: true, drag1Selected: false})}>
              <img style={{pointerEvents: 'none'}} alt='drag2' width='100%' height='100%' src='data:image/png;base64,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' />
            </Drag>*/}

            {this.props.ruler && (
              <div
                style={{
                  backgroundImage: 'url(data:image/png;base64,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)',
                  backgroundPosition: '-10px 0',
                  height: '15px'
                }}
              >
              </div>
            )}

            {this.props.title && (
              <div>
                <input
                  type='text'
                  style={{
                    width: '100%',
                    fontSize: 'inherit',
                    padding: '0.5rem',
                    textAlign: 'center',
                  }}
                  // ref='title'
                  name='title'
                  value={this.state.title}
                  onChange={e => this.setState({title: e.target.value})}
                  ref={input => this.titleInput = input}
                />
              </div>
            )}

            <div
              style={baseStyle}
              onDrop={this.onDrop}
              onDragOver={this.onDragOver}
              onDragLeave={this.onDragLeave}
              onClick={this.handleDropAreaClick}
              ref='dropArea'
              name={this.props.name}
            >

              {this.props.backgroundQty > 0 && this.state.verticalImages.length === 0 && this.state.horizontalImages.length === 0 &&
                <React.Fragment>
                {[...Array(this.props.backgroundQty)].map((x, i) =>
                  <div style={{ pointerEvents: 'none', border: '1px dashed black', flexBasis: '1', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsla(214, 41%, 69%, 1)', borderRight: '0' }}>Imagem</div>
                )}
                </React.Fragment>
              }

              {this.state.visibleLayers.map((layer, index) => (
                <Drag key={index} index={index} onRequestDelete={this.handleDeleteLayerTrash} selected={true} width={layer.width} height={layer.height} rotate={layer.rotate} positionX={layer.x} positionY={layer.y}>
                  <img data-index={index} style={{pointerEvents: 'none'}} alt='' width='100%' height='100%' src={layer.imageUrl} />
                </Drag>
              ))}

              {this.state.visibleTextLayers.map((layer, index) => (
                <DragText key={index} onRequestDelete={e => this.handleDeleteTextLayer(e, index)} selected={true} rotate={layer.rotate} positionX={layer.x} positionY={layer.y} />
              ))}

              {this.state.verticalSide === 'r' ? (
                <div style={{display: 'flex'}}>
                  {horizontallDiv}
                  {verticalDiv}
                </div>
              ) : (
                <div style={{display: 'flex'}}>
                  {verticalDiv}
                  {horizontallDiv}
                </div>
              )}

              {this.props.withSubtitles && this.state.showExtraArea && (
                <table id='subtitles'>
                  <tbody>
                    <tr>
                      {this.state.subtitles2.map((subtitle, index) => {
                        let tabindex = 200 + index
                        if (/\d+/.test(this.props.id.substr(-1, 1)))
                          tabindex = Number(`${this.props.id.substr(-1, 1)}00`) + index + 1
                        return (
                          <td key={index} style={{width: subtitle.width}}>
                            {/*<span onInput={this.handleSubtitleInput} className='subtitle' tabIndex={index + 1} contentEditable='true' style={{display: 'block', fontSize: '12px', fontFamily: 'Arial', color: 'black'}}></span>*/}
                            <Caption options={captionsWithMacro(this.props.captions, this.props.vars, this.props.examination)} tabIndex={tabindex} />
                            {/* <ContentEditable ref= {el => this.subtitlesRef[index] = el} id={`${this.props.id}_s${index}`} onChange={this.handleSubtitleChange2} className='subtitle' tabIndex={tabindex} contentEditable='true' style={{display: 'block', fontSize: '12px', fontFamily: 'Arial', color: 'black'}} /> */}
                            <button style={{position: 'absolute', width: '24px', height: '17px', top: '-3px', right: '-3px'}} onClick={(e) => this.handleSubtitleClick2(e, index)}>
                              <svg viewBox="0 0 24 24" width="20" height="20"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z "></path></svg>
                            </button>
                          </td>
                        )
                      })}
                    </tr>
                  </tbody>
                </table>
              )}

              {this.state.showExtraArea && (
                <>
                  {this.state.horizontal2Images.length > 0 ? (
                    <div style={{display: 'flex'}}>
                      <ClickOutside onClickOutside={() => this.setState({ extraAreaSelected: false })}>
                        <div onClick={this.handleExtraAreaClick} id='h2' ref='h2' style={{display: 'flex'}}>
                          {this.state.horizontal2Images.map((image, index) => (
                            <div key={`h2${index}`} data-id={`h2${index}`} style={{display: 'flex', flexDirection: 'column', position: 'relative', color: '#ccc'}} onDragStart={e => this.handleExtraImageDragStart(e, index)} onDragEnd={this.handleExtraImageDragEnd} onDragOver={this.handleExtraImageDragOver}>
                              <img style={{userSelect: 'none'}} alt='' src={image.src} onDoubleClick={e => this.handleHorizontal2DoubleClick(e, index)} />
                              {this.state.showNumbers &&
                                <div style={{width: 'auto', position: 'absolute', backgroundColor: 'hsla(0, 0%, 30%, 1)', color: 'white', padding: '4px 3px 3px 3px', fontSize: '11px', lineHeight: '9px', fontFamily: 'Arial'}}>{this.convertNumber(this.state.horizontalImages.length + this.state.verticalImages.length + index + 1)}</div>
                              }
                            </div>
                          ))}
                        </div>
                      </ClickOutside>
                    </div>
                  ) : (
                    <ClickOutside onClickOutside={() => this.setState({ extraAreaSelected: false })}>
                      <div onClick={this.handleExtraAreaClick} style={{ height: 50, marginTop: (this.state.horizontalImages.length > 0 ? 0 : 49), border: '1px dashed black', flexBasis: '1', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'hsla(214, 41%, 69%, 1)', borderRight: '0', background: this.state.extraAreaSelected ? '#ccc' : '#fff' }} />
                    </ClickOutside>
                  )}
                </>
              )}

              <style dangerouslySetInnerHTML={{__html: `
                table#subtitles {
                  border-collapse: collapse;
                  border-spacing: 0;
                }
                table#subtitles tbody tr:first-child td {
                  border-top-width: 1px;
                }
                table#subtitles tbody td:last-child {
                  border-right-width: 1px;
                }
                table#subtitles tbody td {
                  box-sizing: border-box;
                  position: relative;
                  padding: 2px;
                  border-color: ${this.props.titleBorderColor};
                  background-color: white;
                  font-family: inherit;
                  font-size: inherit;
                  color: inherit;
                  line-height: normal;
                  text-align: center;
                  border-top-style: solid;
                  border-right-style: solid;
                  border-bottom-style: solid;
                  border-left-style: solid;
                  border-left-width: 1px;
                  border-bottom-width: 1px;
                  border-right-width: 0;
                  border-top-width: 0;
                }
                table#subtitles tbody td:last-child button {
                  display: none;
                }
              `}} />

              {this.props.withSubtitles &&
                <table id='subtitles'>
                  <tbody>
                    <tr>
                      {this.state.subtitles.map((subtitle, index) => {
                        let tabindex = 100 + index
                        if (/\d+/.test(this.props.id.substr(-1, 1)))
                          tabindex = Number(`${this.props.id.substr(-1, 1)}00`) + index + 1
                        return (
                          <td key={index} style={{width: subtitle.width}}>
                            {/*<span onInput={this.handleSubtitleInput} className='subtitle' tabIndex={index + 1} contentEditable='true' style={{display: 'block', fontSize: '12px', fontFamily: 'Arial', color: 'black'}}></span>*/}
                            <Caption ref={el => this.subtitlesRef[index] = el}  onChange={this.handleSubtitleChange} id={`${this.props.id}_s${index}`} tabIndex={tabindex} className='subtitle' options={captionsWithMacro(this.props.captions, this.props.vars, this.props.examination)}  />
                            {/* <ContentEditable ref= {el => this.subtitlesRef[index] = el} id={`${this.props.id}_s${index}`} onChange={this.handleSubtitleChange} className='subtitle' tabIndex={tabindex} contentEditable='true' style={{display: 'block', fontSize: '12px', fontFamily: 'Arial', color: 'black'}} /> */}
                            <button style={{position: 'absolute', width: '24px', height: '17px', top: '-3px', right: '-3px'}} onClick={(e) => this.handleSubtitleClick(e, index)}>
                              <svg viewBox="0 0 24 24" width="20" height="20"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z "></path></svg>
                            </button>
                          </td>
                        )
                      })}
                    </tr>
                  </tbody>
                </table>
              }

            </div>
          </div>

          {this.props.images && this.props.images.length > 0 &&
            <div style={{ display: 'flex', marginTop: 32, overflow: 'auto' }}>
              {this.props.images && this.props.images.map(item => (
                <div style={{ display: 'flex', border: '1px solid hsla(201, 20%, 86%, 1)', margin: '0 8px' }}>
                  <img src={replaceAttachmentUrl(item.thumbUrl)} alt='' style={{ width: 80, userSelect: 'none' }} onClick={this.handleKeyImagesImageClick} />
                </div>
              ))}
            </div>
          }

          {this.props.gallery && this.props.gallery.length > 0 &&
            <div style={{ display: 'flex', marginTop: 32, overflow: 'auto' }}>
              {this.props.gallery && this.props.gallery.map(item => (
                <div style={{ display: 'flex', border: '1px solid hsla(201, 20%, 86%, 1)', margin: '0 8px' }}>
                  <img src={replaceAttachmentUrl(item.thumbUrl)} alt='' style={{ width: 80, userSelect: 'none' }} onClick={this.handleGalleryImageClick} />
                </div>
              ))}
            </div>
          }

        </div>

        {this.props.history && (
          <div style={{display: 'flex', flexDirection: 'column-reverse', justifyContent: 'flex-end', width: '260px', borderLeft: '1px solid #ccc', borderTop: '1px solid #ccc', marginLeft: '1rem', marginTop: '35px', padding: '10px'}}>
            {this.state.historyImages.map((image, index) => (
              <div style={{marginBottom: '10px', position: 'relative'}} key={index}>
                <CloseIconButton id={`cib${index}`} size={20} style={{position: 'absolute'}} onClick={e => this.handleRemoveHistoryImageClick(index)} />
                <PictureIconButton id={`pib${index}`} size={20} style={{position: 'absolute', left: '20px'}} onClick={e => window.open(image.src,'_blank')} />
                <img alt='' src={image.src} style={{width: '240px', userSelect: 'none'}} onClick={this.handleHistoryImageClick} />
              </div>
            ))}
          </div>
        )}

      </div>
    )
  }

}
