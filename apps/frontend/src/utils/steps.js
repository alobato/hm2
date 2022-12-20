import memoize from 'memoize-one'
import flatten from 'lodash.flatten'
import isEqual from 'lodash.isequal'
import reject from 'lodash.reject'
import uniqBy from 'lodash.uniqby'
import map from 'lodash.map'
import compact from 'lodash.compact'
import flattenDeep from 'lodash.flattendeep'
import uniq from 'lodash.uniq'
import pull from 'lodash.pull'
import omitBy from 'lodash.omitby'
import sanitizeHtml from 'sanitize-html'
import * as yup from 'yup'
import md5 from 'md5'
import { evalWithVariables } from './safeEval'

export const systemVariables = {
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
  s88301: 'previousExam2At',
  s10760: 'PatientHeight',
  s34153: 'PatientWeight'
}

export const camelize = (text) => text.toLowerCase().replace(/\s/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '')

export const getPhraseByCode = (phrases, code) => {
  const phrase = phrases.find((p) => p._id === code)
  return phrase ? phrase : null
}

const expectedColumns = ['checked', 'locked', 'suppress', 'bind', 'hide', 'models', 'group', 'block', 'name', 'text', 'modality', 'specialty', 'region', 'examination', 'protocols', '_id', 'date', 'textCodes']

export const groupsColors = [
  'hsla(346, 85%, 49%, 1)',
  'hsla(22, 100%, 50%, 1)',
  'hsla(42, 98%, 50%, 1)',
  'hsla(156, 98%, 40%, 1)',
  'hsla(204, 96%, 45%, 1)',
  'hsla(275, 95%, 48%, 1)',
  'hsla(346, 87%, 74%, 1)',
  'hsla(208, 16%, 68%, 1)',
  'hsla(356, 73%, 45%, 1)',
  'hsla(233, 84%, 30%, 1)',
  'hsla(181, 41%, 46%, 1)',
  'hsla(22, 36%, 53%, 1)',
  'hsla(42, 58%, 75%, 1)',
  'hsla(282, 100%, 80%, 1)',
  'hsla(233, 100%, 84%, 1)',
  'hsla(56, 64%, 69%, 1)',
  'hsla(77, 60%, 51%, 1)',
  'hsla(7, 100%, 69%, 1)',
  'hsla(178, 43%, 73%, 1)',
  'hsla(219, 29%, 43%, 1)',

  'hsla(346, 85%, 49%, 1)',
  'hsla(22, 100%, 50%, 1)',
  'hsla(42, 98%, 50%, 1)',
  'hsla(156, 98%, 40%, 1)',
  'hsla(204, 96%, 45%, 1)',
  'hsla(275, 95%, 48%, 1)',
  'hsla(346, 87%, 74%, 1)',
  'hsla(208, 16%, 68%, 1)',
  'hsla(356, 73%, 45%, 1)',
  'hsla(233, 84%, 30%, 1)',
  'hsla(181, 41%, 46%, 1)',
  'hsla(22, 36%, 53%, 1)',
  'hsla(42, 58%, 75%, 1)',
  'hsla(282, 100%, 80%, 1)',
  'hsla(233, 100%, 84%, 1)',
  'hsla(56, 64%, 69%, 1)',
  'hsla(77, 60%, 51%, 1)',
  'hsla(7, 100%, 69%, 1)',
  'hsla(178, 43%, 73%, 1)',
  'hsla(219, 29%, 43%, 1)'
]

const hasIntersection = (l1, l2) => l1.some((item) => l2.includes(item))

function extraItems(phrases, extra) {
  const uniqObjects = uniqBy(phrases, extra)
  let extraItems = compact(map(uniqObjects, extra))
  if (isEqual(extraItems, ['M'])) extraItems = ['M', 'F']
  if (isEqual(extraItems, ['F'])) extraItems = ['M', 'F']
  if (isEqual(extraItems, ['F', 'M'])) extraItems = ['M', 'F']
  if (isEqual(extraItems, ['SIM'])) extraItems = ['SIM', 'NÃO']
  if (isEqual(extraItems, ['NÃO'])) extraItems = ['SIM', 'NÃO']
  if (isEqual(extraItems, ['NÃO', 'SIM'])) extraItems = ['SIM', 'NÃO']
  return extraItems
}

function listUniq(objects, column) {
  const uniqModelObjects = uniqBy(objects, column)
  let items = map(uniqModelObjects, column)
  items = compact(items)
  items = flattenDeep(items)
  items = uniq(compact(items))
  return items
}

function rejectOthers(objects, filters) {
  objects = compact(objects)
  const filteredObjects = reject(objects, (o) => {
    let result = false
    if (!filters || isEqual(filters, {})) return result
    Object.keys(filters).forEach((item) => {
      if (filters[item] !== null && typeof filters[item] === 'object') {
        Object.keys(filters[item]).forEach(k => {
          if (o[item] && o[item][k] && o[item][k] !== '' && o[item][k] !== filters[item][k]) result = true
        })
      } else {
        if (o[item] && o[item] !== '' && filters[item] !== null && filters[item] !== '' && o[item] !== filters[item]) result = true
      }
    })
    return result
  })
  return filteredObjects
}

export const getSuppress = memoize(
  (phrases, selectedPhrases, selectedComplementPhrases) => {
    const selectedPhrasesValues = selectedPhrases ? Object.values(selectedPhrases) : []
    const selectedComplementPhrasesValues = selectedComplementPhrases ? flatten(Object.values(selectedComplementPhrases)) : []
    const selectedIds = [...selectedPhrasesValues, ...selectedComplementPhrasesValues].map(item => item.id)
    const idsToSuppress =  phrases.reduce((acc, phrase) => {
      if (phrase.suppress && selectedIds.includes(phrase._id))
        acc.push(...phrase.suppress)
      return acc
    }, [])
    phrases = phrases.filter((phrase) => !idsToSuppress.includes(phrase._id))
    return phrases
  }
)

export const getProtocols = memoize(
  (phrases) => listUniq(phrases, 'protocols')
)

export const getExtras = memoize(
  (phrases, protocols) => {
    if (!phrases || phrases.length === 0) return []
    phrases = phrases.filter((item) => (item.protocols && hasIntersection(item.protocols, protocols)))
    let allKeys = phrases.reduce((accumulator, item) => {
      accumulator.push(...Object.keys(item))
      return accumulator
    }, [])
    allKeys = uniq(allKeys)
    let extras = pull(allKeys, ...expectedColumns)
    extras = extras.map(extra => { return { name: extra, items: extraItems(phrases, extra) } })
    return extras
  }
)

export const getModels = memoize(
  (phrases, protocols, filters) => {
    if (!protocols) return []
    phrases = phrases.filter((item) => (item.protocols && hasIntersection(item.protocols, protocols)))
    if (filters && !isEqual(filters, {})) {
      phrases = rejectOthers(phrases, filters)
    }
    const result = listUniq(phrases, 'models')
    return result.filter((item) => item !== 'PADRÃO')
  }
)

export const getGroups = memoize(
  (phrases, selectedProtocols, filters, selectedModels = [], hiddenGroups = [], selectedBlocks, selectedPhrases, selectedComplementPhrases, groupsCollapse, groupsIgnoringSelections, fields, complementFields) => {

    if (!selectedModels || !selectedModels.length) {
      selectedModels = []
    }
    const joinedModels = selectedModels && !!selectedModels.length ? selectedModels.filter((model) => model !== 'PADRÃO').sort((a, b) => a.localeCompare(b)).join('+') : []
    let modelsToFilter = uniq([...selectedModels, joinedModels])
    if (!selectedModels.find((model) => model.includes('@'))) {
      modelsToFilter = modelsToFilter.includes('PADRÃO') ? modelsToFilter : [...modelsToFilter, 'PADRÃO']
    } else {
      modelsToFilter = modelsToFilter.includes('PADRÃO') ? modelsToFilter.filter((model) => model !== 'PADRÃO') : modelsToFilter
    }

    if (!groupsIgnoringSelections) {
      groupsIgnoringSelections = []
    }

    if (!selectedProtocols) {
      return []
    }
    const joinedProtocols = selectedProtocols && !!selectedProtocols.length ? [...selectedProtocols].sort((a, b) => a.localeCompare(b)).join('+') : []
    let protocolsToFilter = uniq([...selectedProtocols, joinedProtocols])
    phrases = phrases.filter((item) => {
      if (modelsToFilter.length > 0 && !groupsIgnoringSelections.includes(item.group)) {
        return (item.protocols && hasIntersection(item.protocols, protocolsToFilter) && item.models && hasIntersection(item.models, modelsToFilter))
      }
      return (item.protocols && hasIntersection(item.protocols, protocolsToFilter))
    })

    if (filters && !isEqual(filters, {})) {
      phrases = rejectOthers(phrases, filters)
    }

    const codesToHide = phrases.filter((item) => {
      if (item.hide && item.hide.split(';').length > 0) {
        return true
      }
      return false
    }).reduce((acc, item) => {
      const hide = item.hide.split(';')
      return [...acc, ...hide]
    }, [])

    if (codesToHide && codesToHide.length > 0) {
      phrases = phrases.filter((item) => {
        if (codesToHide.includes(item._id)) {
          return false
        }
        return true
      })
    }

    let groups = listUniq(phrases, 'group')
    if (hiddenGroups.length) {
      groups = groups.filter((group) => {
        return !hiddenGroups.includes(group)
      })
    }

    groups = groups.map((group, index) => {
      const showUndoIgnore = modelsToFilter.length > 0 && groupsIgnoringSelections.includes(group)
      const showIgnore = modelsToFilter.length > 0 && !showUndoIgnore
      const blocks = getBlocksByGroup(phrases, group, protocolsToFilter, filters, modelsToFilter, groupsIgnoringSelections.includes(group))
      const anyBlockSelected = !!selectedBlocks[group]
      const blocksOpen = (anyBlockSelected && blocks.length > 1) ? false : true
      const collapsed = groupsCollapse[group]

      const selectedBlock = selectedBlocks[group] ? selectedBlocks[group] : null
      const selectedPhrase = selectedPhrases[group] ? selectedPhrases[group] : null
      const selectedComplementPhrasesByGroup = (selectedComplementPhrases[group] && selectedComplementPhrases[group].length) ? selectedComplementPhrases[group] : []
      const phrasesByGroup = getPhrasesByGroup(phrases, group, selectedBlock, protocolsToFilter, filters, modelsToFilter, groupsIgnoringSelections.includes(group))
      const complementPhrases = getComplementPhrasesByGroup(phrases, group, protocolsToFilter, filters, modelsToFilter, groupsIgnoringSelections.includes(group))
      const fieldsByGroup = fields && fields[group] ? fields[group] : null
      const complementFieldsByGroup = complementFields && complementFields[group] ? complementFields[group] : null

      return {
        name: group,
        color: groupsColors[index],
        phrases: phrasesByGroup,
        selectedComplementPhrases: selectedComplementPhrasesByGroup,
        fields: fieldsByGroup,
        complementFields: complementFieldsByGroup,
        complementPhrases,
        selectedBlock,
        selectedPhrase,
        anyBlockSelected,
        blocks,
        showUndoIgnore,
        showIgnore,
        blocksOpen,
        collapsed
      }
    })

    return groups
  }
)

function blocksByGroup(phrases, group, protocols, filters, models = [], ignoreSelections = false) {
  const joinedProtocols = protocols && !!protocols.length ? [...protocols].sort((a, b) => a.localeCompare(b)).join('+') : []
  let protocolsToFilter = uniq([...protocols, joinedProtocols])

  phrases = phrases.filter((item) => (item.protocols && hasIntersection(item.protocols, protocolsToFilter)))

  if (!models || !models.length) models = []
  const joinedModels = models.filter((model) => model !== 'PADRÃO').sort((a, b) => a.localeCompare(b)).join('+')
  let modelsToFilter = uniq([...models, joinedModels])
  if (!models.find((model) => model.includes('@'))) {
    modelsToFilter = modelsToFilter.includes('PADRÃO') ? modelsToFilter : [...modelsToFilter, 'PADRÃO']
  } else {
    modelsToFilter = modelsToFilter.includes('PADRÃO') ? modelsToFilter.filter((model) => model !== 'PADRÃO') : modelsToFilter
  }

  phrases = phrases.filter((item) => {
    if (!ignoreSelections && models) return (item.group === group && item.models && hasIntersection(item.models, modelsToFilter))
    return (item.group === group)
  })

  if (filters && !isEqual(filters, {})) {
    phrases = rejectOthers(phrases, filters)
  }

  const codesToHide = phrases.filter((pitem) => {
    if (pitem.hide && pitem.hide.split(';').length > 0) {
      return true
    }
    return false
  }).reduce((acc, pitem) => {
    const hide = pitem.hide.split(';')
    return [...acc, ...hide]
  }, [])

  if (codesToHide && codesToHide.length > 0) {
    phrases = phrases.filter((pitem) => {
      if (codesToHide.includes(pitem._id)) {
        return false
      }
      return true
    })
  }

  let blocks = listUniq(phrases, 'block')
  blocks = blocks.filter((item) => { return !item.split(' ').includes('COMPLEMENTO') })
  return blocks
}

export const getBlocksByGroup = memoize(
  (phrases, group, protocols, filters, models, ignoreSelections = false) => {
    return blocksByGroup(phrases, group, protocols, filters, models, ignoreSelections)
  }
)

export const getPhrasesByGroup = memoize(
  (phrases, group, block, protocols, filters, models = [], ignoreSelections = false) => {

    const joinedProtocols = protocols && !!protocols.length ? [...protocols].sort((a, b) => a.localeCompare(b)).join('+') : []
    let protocolsToFilter = uniq([...protocols, joinedProtocols])

    phrases = phrases.filter((item) => {
      if (!item.protocols || !item.models || !item.group || !item.block) return false

      const isGroup = item.group === group
      const isBlock = block ? item.block === block : true
      const includeProtocol = protocols ? hasIntersection(item.protocols, protocolsToFilter) : true

      if (!models || !models.length) models = []
      const joinedModels = models.filter((model) => model !== 'PADRÃO').sort((a, b) => a.localeCompare(b)).join('+')
      let modelsToFilter = uniq([...models, joinedModels])

      if (!models.find((model) => model.includes('@'))) {
        modelsToFilter = modelsToFilter.includes('PADRÃO') ? modelsToFilter : [...modelsToFilter, 'PADRÃO']
      } else {
        modelsToFilter = modelsToFilter.includes('PADRÃO') ? modelsToFilter.filter((model) => model !== 'PADRÃO') : modelsToFilter
      }

      const includeModel = (!ignoreSelections && modelsToFilter) ? hasIntersection(item.models, modelsToFilter) : true
      const isNotComplement = !item.block.split(' ').includes('COMPLEMENTO')

      return isGroup && isBlock && includeProtocol && includeModel && isNotComplement
    })

    if (filters && !isEqual(filters, {})) {
      phrases = rejectOthers(phrases, filters)
    }

    const codesToHide = phrases.filter((pitem) => {
      if (pitem.hide && pitem.hide.split(';').length > 0) {
        return true
      }
      return false
    }).reduce((acc, pitem) => {
      const hide = pitem.hide.split(';')
      return [...acc, ...hide]
    }, [])

    if (codesToHide && codesToHide.length > 0) {
      phrases = phrases.filter(pitem => {
        if (codesToHide.includes(pitem._id)) {
          return false
        }
        return true
      })
    }

    return phrases
  }
)

export const getComplementPhrasesByGroup = memoize(
  (phrases, group, protocols, filters, models = [], ignoreSelections = false) => {

    if (!models || !models.length) models = []
    const joinedModels = models.filter((model) => model !== 'PADRÃO').sort((a, b) => a.localeCompare(b)).join('+')
    let modelsToFilter = uniq([...models, joinedModels])
    if (!models.find((model) => model.includes('@'))) {
      modelsToFilter = modelsToFilter.includes('PADRÃO') ? modelsToFilter : [...modelsToFilter, 'PADRÃO']
    } else {
      modelsToFilter = modelsToFilter.includes('PADRÃO') ? modelsToFilter.filter(model => model !== 'PADRÃO') : modelsToFilter
    }

    const joinedProtocols = protocols && !!protocols.length ? protocols.sort((a, b) => a.localeCompare(b)).join('+') : []
    let protocolsToFilter = uniq([...protocols, joinedProtocols])

    phrases = phrases.filter((item) => {
      if (!item.protocols || !item.models || !item.group || !item.block) return false
      const isGroup = item.group === group
      const includeProtocol = protocols ? (item.protocols && hasIntersection(item.protocols, protocolsToFilter)) : true

      const includeModel = (!ignoreSelections && modelsToFilter.length > 0) ? (item.models && hasIntersection(item.models, modelsToFilter)) : true
      const isComplement = item.block.split(' ').includes('COMPLEMENTO')
      return isGroup && includeProtocol && includeModel && isComplement
    })
    if (filters && !isEqual(filters, {})) {
      phrases = rejectOthers(phrases, filters)
    }
    const codesToHide = phrases.filter((pitem) => {
      if (pitem.hide && pitem.hide.split(';').length > 0) {
        return true
      }
      return false
    }).reduce((acc, pitem) => {
      const hide = pitem.hide.split(';')
      return [...acc, ...hide]
    }, [])

    if (codesToHide && codesToHide.length > 0) {
      phrases = phrases.filter((pitem) => {
        if (codesToHide.includes(pitem._id)) {
          return false
        }
        return true
      })
    }
    return phrases
  }
)

// export const cleanPhraseItem = (item) => ({ id: item._id, text: item.text, name: item.name, block: item.block, group: item.group, fields: [], color: '' })
export function cleanPhraseItem(item) {
  let text = item.text
  if (text && !text.includes('$$') && !text.includes('^') && item.textCodes && item.textCodes.length > 0) {
    text = `${item.textCodes.join(',')}$$${item.text}`
  }
  return { id: item._id, text: text, name: item.name, block: item.block, group: item.group, fields: {}, complementFields: {}, color: '' }
}

export const trimValues = (obj) => {
  if (!obj) return {}
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value && typeof value === 'string') value = value.trim()
    if (value && typeof value === 'string' && value === 'NaN') value = ''
    acc = { ...acc, [key]: value && typeof value === 'string' ? value.trim() : value }
    return acc
  }, {})
}

export const getVariables = ({ vars }) => {
  if (!vars) {
    vars = {}
  }

  // vars = Object.entries(vars).reduce((acc, curr) => {
  //   const [key, value] = curr
  //   if (/^.+?<.+?>$/.test(value)) {
  //     const found = value.match(/^(.+?)<(.+?)>$/)
  //     if (found[1] && found[2]) {
  //       return { ...acc, [key]: found[2], [`t_${key}`]: found[1] }
  //     }
  //   } else if (/^<.+?>.+?$/.test(value)) {
  //     const found = value.match(/^<(.+?)>(.+?)$/)
  //     if (found[1] && found[2]) {
  //       return { ...acc, [key]: found[1], [`t_${key}`]: found[2] }
  //     }
  //   }
  //   return { ...acc, [key]: value }
  // }, {})

  return Object.entries(vars).reduce((acc, [key, value]) => ({ ...acc, [key]: (value === null || value === undefined) ? '' : value }), {})
}

// export const getVariables = memoize(
  // ({ fields = {}, patient = {}, examination = {}, filters = {}, vars = {}, formulas = {} }) => {
    // if (!vars) {
      // vars = {}
    // }

    // const adicionalVars = {}

    // if (examination && examination.examinedAt) adicionalVars['data_exame'] = formatUtcDate(examination.examinedAt)
    // if (examination && examination.previousExam1At) adicionalVars['data_exame_anterior_1'] = formatUtcDate(examination.previousExam1At)
    // if (examination && examination.previousExam2At) adicionalVars['data_exame_anterior_2'] = formatUtcDate(examination.previousExam2At)

    // if (examination && examination.examinedAt && examination.previousExam1At) {
    //   adicionalVars['dif_data_exame_data_exame_anterior_1'] = diffMonths(new Date(examination.examinedAt), new Date(examination.previousExam1At))
    // }

    // if (examination && examination.examinedAt && examination.previousExam2At) {
    //   adicionalVars['dif_data_exame_data_exame_anterior_2'] = diffMonths(new Date(examination.examinedAt), new Date(examination.previousExam2At))
    // }

    // if (examination && examination.previousExam1At && examination.previousExam2At) {
    //   adicionalVars['dif_data_exame_anterior_1_data_exame_anterior_2'] = diffMonths(new Date(examination.previousExam1At), new Date(examination.previousExam2At))
    // }

    // filters = filters ? Object.fromEntries(Object.entries(filters).map(([k, v]) => [`filtro_${k.toLowerCase()}`, v])) : {}

    // const arr = Object.values(fields).reduce((acc, curr) => {
    //   acc = [...acc, ...Object.values(curr)]
    //   return acc
    // }, [])

    // const obj = arr.reduce((acc, curr) => {
    //   if (/^#\S+?#<.+?>.+?$/.test(curr)) {
    //     const found = curr.match(/#(\S+?)#<(.+?)>(.+?)/)
    //     if (found[1] && found[2] && found[3]) {
    //       acc = { ...acc, [found[1]]: convertIfNumber(found[2]), [`t_${found[1]}`]: convertIfNumber(found[3]) }
    //     }
    //   } else if (/^#\S+?#.+?<.+?>$/.test(curr)) {
    //     const found = curr.match(/#(\S+?)#(.+?)<(.+?)>$/)
    //     if (found[1] && found[2] && found[3]) {
    //       acc = { ...acc, [found[1]]: convertIfNumber(found[3]), [`t_${found[1]}`]: convertIfNumber(found[2]) }
    //     }
    //   } else if (/^#\S+?#/.test(curr)) {
    //     const inputFound = curr.match(/^#(\S+?)#(.+?)$/)
    //     if (inputFound[1] && inputFound[2]) {
    //       acc = {...acc, [inputFound[1]]: convertIfNumber(inputFound[2].replace('.', '').replace(',', '.'))}
    //     }
    //   }
    //   return acc
    // }, filters)

    // vars = Object.entries(vars).reduce((acc, curr) => {
    //   const [key, value] = curr
    //   if (/^.+?<.+?>$/.test(value)) {
    //     const found = value.match(/^(.+?)<(.+?)>$/)
    //     if (found[1] && found[2]) return { ...acc, [key]: found[2], [`t_${key}`]: found[1] }
    //   } else if (/^<.+?>.+?$/.test(value)) {
    //     const found = value.match(/^<(.+?)>(.+?)$/)
    //     if (found[1] && found[2]) return { ...acc, [key]: found[1], [`t_${key}`]: found[2] }
    //   }
    //   return { ...acc, [key]: value }
    // }, {})

    // const allVariables = { ...obj, ...vars, ...patient, ...adicionalVars }


    // const formulaVars = Object.entries(formulas).reduce((acc, curr) => {
    //   const [key, value] = curr
    //   const originalFormula = value
    //   let calculatedValue = 0



    //   let newVariables = Object.keys({ ...allVariables, ...acc }).reduce((ac, key) => {
    //     let newValue = { ...allVariables, ...acc }[key]
    //     if (/\d+,\d+/.test(newValue)) newValue = newValue.replace(',', '.')
    //     if (newValue && !isNaN(newValue)) newValue = Number(newValue)
    //     if (key === 'paciente_sexo') newValue = normalizeGender(newValue)
    //     ac = { ...ac, [key]: newValue }
    //     return ac
    //   }, {})

    //   const vars = Object.keys(newVariables).join(', ')
    //   const varsStr = `({ ${vars} })`
    //   let formula = originalFormula.trim()

    //   if (/\(if.+\)/.test(formula)) {
    //     formula = formula.slice(1, -1)
    //   } else if (!formula.includes('return')) {
    //     formula = `return (${formula})`
    //   }

    //   const evalStr = `(${varsStr} => { ${formula} })${varsStr}`

    //   let result = ''
    //   try {
    //     result = memoSafeEval(evalStr, newVariables)
    //     calculatedValue = result

    //   } catch(err) {}



    //   return { ...acc, [key]: calculatedValue }
    // }, {})

    // return { ...allVariables, ...formulaVars }

    // return {}

    // return Object.entries(allVariables).reduce((acc, [key, value]) => ({ ...acc, [key]: (value === null || value === undefined) ? '' : value}), {})
  // },
  // (...args) => JSON.stringify(args)
// )

// export const replaceFields = memoize((text, variables) => {
//   if (!text) {
//     return ''
//   }

//   text = text.replace(/<@(.+?)@>/g, (match, originalFormula) => {

//     const newVariables = Object.keys(variables).reduce((acc, key) => {
//       let newValue = variables[key]
//       if (/\d+,\d+/.test(newValue)) newValue = newValue.replace(',', '.')
//       if (newValue && !isNaN(newValue)) newValue = Number(newValue)
//       acc = {...acc, [key]: newValue}
//       return acc
//     }, {})

//     const vars = Object.keys(newVariables).join(', ')
//     const varsStr = `({ ${vars} })`
//     let formula = originalFormula.trim()

//     if (!formula.includes('return')) formula = `return (${formula})`
//     const evalStr = `(${varsStr} => { ${formula} })${varsStr}`

//     let result = ''
//     try {
//       result = memoSafeEval(evalStr, newVariables)
//       result = result.toString()

//       if (originalFormula.includes('toFixed(')) {
//         result = result.toString()
//       } else if (!originalFormula.includes('return') && !originalFormula.includes('if') && !originalFormula.includes('(') && !originalFormula.includes('+') && !originalFormula.includes('-') && !originalFormula.includes('/') && !originalFormula.includes('*')) {
//         return result
//       } else if (/^return \([A-Za-z0-9_-]+\)$/.test(formula) && !isNaN(result) && /\d+\.\d+/.test(result)) {
//         result = Number(result).toFixed(2).toString()
//       } else if (/\d[,.]\d+/.test(result)) {
//         result = result.replace(',', '.')
//         // result = Number(result).toFixed(2).toString()
//         result = parseInt(result).toString()
//       }
//       result = result.replace(/(\d+)(\.)(\d{1,2})/g, "$1,$3")

//     } catch(err) {}
//     return result
//   })

//   if (text && /\d\.\d/.test(text)) text = text.replace('.', ',')
//   return text
// }, (...args) => JSON.stringify(args))

export const replaceFields = (text, variables) => {
  if (!text) {
    return ''
  }

  text = text.replace(/<@(.+?)@>/g, (match, originalFormula) => {

    const newVariables = Object.keys(variables).reduce((acc, key) => {
      let newValue = variables[key]
      if (/\d+,\d+/.test(newValue)) {
        newValue = newValue.replace(',', '.')
      }
      if (newValue && !isNaN(newValue)) {
        newValue = Number(newValue)
      }
      acc = {...acc, [key]: newValue}
      return acc
    }, {})

    // const vars = Object.keys(newVariables).join(', ')
    // const varsStr = `({ ${vars} })`
    let formula = originalFormula.trim()

    if (!formula.includes('return')) {
      formula = `return (${formula})`
    }
    // const evalStr = `(${varsStr} => { ${formula} })${varsStr}`
    const evalStr = formula

    let result = ''
    try {
      result = evalWithVariables(evalStr, newVariables)
      result = result.toString()

      if (originalFormula.includes('toFixed(')) {
        result = result.toString()
      } else if (!originalFormula.includes('return') && !originalFormula.includes('if') && !originalFormula.includes('(') && !originalFormula.includes('+') && !originalFormula.includes('-') && !originalFormula.includes('/') && !originalFormula.includes('*')) {
        return result
      } else if (/^return \([A-Za-z0-9_-]+\)$/.test(formula) && !isNaN(result) && /\d+\.\d+/.test(result)) {
        result = Number(result).toFixed(2).toString()
      } else if (/\d[,.]\d+/.test(result)) {
        result = result.replace(',', '.')
        // result = Number(result).toFixed(2).toString()
        result = parseInt(result).toString()
      }
      result = result.replace(/(\d+)(\.)(\d{1,2})/g, "$1,$3")
      console.log('result', result)

    } catch(err) {
      console.error(err)
    }
    return result
  })

  if (text && /\d\.\d/.test(text)) {
    text = text.replace('.', ',')
  }
  return text
}

export const mountPhrase = ({ selectedPhrase, fields }) => {
  if (!selectedPhrase || !selectedPhrase.text) {
    return ''
  }

  let text = selectedPhrase.text

  let textWithoutCaptures = text.includes('~') ? text.split('~')[1] : text

  textWithoutCaptures = textWithoutCaptures.includes('$$') ? textWithoutCaptures.split('$$')[1] : textWithoutCaptures

  const textFields = textWithoutCaptures.split(/\[.*?\]/)

  if (fields) {
    Object.entries(fields).forEach(([key, value]) => {
      textFields.splice(key, 0, value)
    })
    textWithoutCaptures = textFields.join('')
  }

  textWithoutCaptures = textWithoutCaptures.replace(/\*\*(.+?)\*\*/g, `$1`).replace(/__(.+?)__/g, `$1`)

  return textWithoutCaptures
}

export function getDefaultValue(fields, index) {
  if (!fields) {
    return ''
  }
  if (fields && fields[index] === null) {
    return ''
  }
  if (fields && fields[index]) {
    return fields[index]
  }
  return ''
}

export function replaceMultiples(text, phraseId) {
  let i = 1
  let found = []
  const newText = text.replace(/<@.*?(m\d{5}).*?@>/g, (match, originalCode) => {
    if (found.includes(originalCode)) {
      i++
    }
    found.push(originalCode)
    const newCode = `${originalCode}_${phraseId}_${i}`
    const newMatch = match.replaceAll(originalCode, newCode)
    return newMatch
  })
  return newText
}

export const sanitize = (text) => sanitizeHtml(text, { allowedTags: ['strong', 'em'] })

export function isNumeric(str) {
  if (typeof str != 'string') {
    return false
  }
  return !isNaN(str) && !isNaN(parseFloat(str))
}

export function isoDateToBr(isoDate) {
  const regex = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z/
  const [_, year, month, day] = isoDate.match(regex)
  return `${day}/${month}/${year}`
}

export function diffDatesInDays(d1, d2) {
  const date1 = new Date(d1)
  const date2 = new Date(d2)
  const diffTime = Math.abs(date2 - date1)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays
}

export function stringifyValues(obj) {
  const regex = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})\.(\d{3})Z/
  const newObj = {}
  obj = omitBy(obj, (value) => (value === null || value === undefined))
  Object.keys(obj).forEach((key) => {
    if (key !== 'dif_data_exame_data_exame_anterior_1') {
      if (obj[key] && (typeof obj[key] === 'number' || isNumeric(obj[key]))) {
        newObj[key] = Number(obj[key]).toFixed(2).toString()
      } else if (obj[key] && typeof obj[key] !== 'string') {
        try {
          newObj[key] = obj[key].toString()//.replace(/\s/g, '')
        } catch (e) {
          newObj[key] = ''
        }
      } else {
        try {
          newObj[key] = obj[key].trim()
          if (regex.test(newObj[key])) {
            newObj[key] = isoDateToBr(newObj[key])
          }
        } catch (e) {
          newObj[key] = ''
        }
      }
    }
  })
  return newObj
}

export function getTableVariablesCodes(text) {
  let variables = []

  if (text.includes('$$')) {
    const matches1 = text.split('$$')[0].matchAll(/(\d{5})/g)
    for (const match of matches1) {
      variables.push(match[1])
    }
  }

  const matches = text.matchAll(/[^\d\w]([cfmvonurs]\d{5}?)\D/g)
  for (const match of matches) {
    variables.push(match[1])
  }

  variables = variables.map((code) => code.replace(/[cfmvonurs]/, ''))
  variables = uniq(variables)

  return variables
}

export function getVariablesAndCalculated(vars = {}, variablesData = [], examination) {
  let newVariables = Object.keys(vars).reduce((acc, key) => {
    let newValue = vars[key]
    if (/\d+,\d+/.test(newValue)) newValue = newValue.replace(',', '.')
    if (newValue && !isNaN(newValue)) newValue = Number(newValue)
    acc = { ...acc, [key]: newValue }
    return acc
  }, {})

  const systemVariablesData = Object.keys(systemVariables).reduce((acc, key) => {
    let newValue = ''
    if (examination && examination[systemVariables[key]]) {
      newValue = examination[systemVariables[key]]
    }
    acc = {...acc, [key]: newValue}
    return acc
  }, {})

  newVariables = { ...newVariables, ...systemVariablesData }

  for (const v of variablesData) {
    if (v && v.mode && v.mode.toUpperCase() === 'S' && v.source) {
      if (v.source === 'examinedAt') {
        try { newVariables[v.code] = formatUtcDate(examination.examinedAt) } catch(err) {}
      } else if (v.source === 'previousExam1At') {
        try { newVariables[v.code] = formatUtcDate(examination.previousExam1At) } catch(err) {}
      } else if (v.source === 'previousExam2At') {
        try { newVariables[v.code] = formatUtcDate(examination.previousExam2At) } catch(err) {}
      } else if (v.source === 'diffExaminedAtPreviousExam1At') {
        try { newVariables[v.code] = diffDatesInDays(examination.previousExam1At, examination.examinedAt) } catch(err) {}
      } else if (v.source === 'diffExaminedAtPreviousExam2At') {
        try { newVariables[v.code] = diffDatesInDays(examination.previousExam2At, examination.examinedAt) } catch(err) {}
      } else if (v.source === 'diffPreviousExam1AtPreviousExam2At') {
        try { newVariables[v.code] = diffDatesInDays(examination.previousExam2At, examination.previousExam1At) } catch(err) {}
      } else {
        try { newVariables[v.code] = examination[v.source] } catch(err) {}
      }
    }

    if (v && v.mode && ['F', 'C'].includes(v.mode.toUpperCase())) {
      // const vars = Object.keys(newVariables).join(', ')
      // const varsStr = `({ ${vars} })`
      let formula = v.source.trim()
      // ----
      if (/^\(.+\)$/.test(formula)) {
        formula = formula.replace(/^\(/, '').replace(/\)$/, '')
      }
      // ----
      // if (!formula.includes('return')) formula = `return (${formula})`
      // const evalStr = `(${varsStr} => { ${formula} })${varsStr}`
      const evalStr = formula
      let result = ''
      try {
        result = evalWithVariables(evalStr, newVariables)

        if (v.valueType && v.valueType.toUpperCase() === 'DECIMAL') {
          if (result && !isNaN(result)) {
            result = Number(result).toFixed(2)
            result = Number(result)
          } else {
            result = 0.00
          }
        } else if (v.valueType && v.valueType.toUpperCase() === 'INTEIRO') {
          if (result && !isNaN(result)) {
            result = Math.trunc(Number(result))
          } else {
            result = 0
          }
        } else {
          if (typeof result === 'undefined') {
            result = ''
          }
        }

        newVariables = { ...newVariables, [v.code]: result }
      } catch(error) {}
    }
  }

  return newVariables
}

export function getInitialValues(variablesData, variables) {
  const result = variablesData.reduce((acc, { code, name, unit, valueType, options, range, mode }) => {
    let value = ''

    const found = Object.keys(variables).find((key) => { return (key.includes('_') && key.includes(code)) })

    const newCode = found || code

    if (variables[newCode]) {
      if (valueType === 'DECIMAL') {
        const typeOfVariable = typeof variables[newCode]
        if (typeOfVariable === 'number') {
          value = variables[newCode].toString().replace('.', ',')
        } else if (typeOfVariable === 'string') {
          if (variables[newCode].includes(',') && !isNaN(variables[newCode].replace(',', '.'))) {
            value = variables[newCode]
          }
          if (variables[newCode].includes('.') && !isNaN(variables[newCode])) {
            value = variables[newCode].replace('.', ',')
          }
        }
      } else if (valueType === 'INTEIRO') {
        if (!isNaN(variables[newCode])) {
          value = parseInt(variables[newCode]).toString()
        }
      } else {
        value = variables[newCode].toString()
      }
    }
    acc[newCode] = value
    return acc
  }, {})

  return result
}

export function getValidationSchema(variablesData) {
  const shapeObj = variablesData.reduce((acc, { code, valueType, mode, range }) => {
    if (mode && ['V', 'O'].includes(mode.toUpperCase())) {
      if (valueType === 'DECIMAL') {
        acc[code] = yup.string().test('decimal', 'Deve ser um número decimal', (value) => {
          if (!value) return false
          if (/\d,\d/.test(value.toString())) return true
          return false
        })

      } else if (valueType === 'INTEIRO') {
        acc[code] = yup.number().typeError('Deve ser um número inteiro').positive('Deve ser maior que zero').integer('Deve ser um número inteiro').required('Campo obrigatório')
      } else if (valueType === 'TEXTO') {
        acc[code] = yup.string().required('Campo obrigatório')
      }
    }
    return acc
  }, {})

  return yup.object().shape(shapeObj)
}

export function getFieldsAndOptions(phraseText) {
  const textFields = phraseText.split(/\[.*?\]/)
  const options = phraseText.match(/\[.*?\]/g)

  return textFields.reduce((result, item, index) => {
    result.push(item)
    if (options && options[index] && !/\[#\S+?#\s*?\(.+\)/.test(options[index])) {
      const option = options[index]
      if (option === '[]' || option === '[ ]') {
        result.push([])
      } else {
        result.push(option.replace('[', '').replace(']', '').trim().split('|'))
      }
    }
    return result
  }, [])
}

export function getSortedVariablesData(phraseText, contentVariables) {
  const codes = getTableVariablesCodes(phraseText)
  let variablesData = []
  let sortedVariablesData = []
  if (codes.length > 0 && contentVariables && contentVariables.length > 0) {
    variablesData = contentVariables.filter((item) => codes.includes(item.code))
    for (const code of codes) {
      const found = variablesData.find((item) => item.code === code)
      if (found) {
        sortedVariablesData.push(found)
      }
    }
  }

  sortedVariablesData = sortedVariablesData.map(({ code, mode, ...rest }) => ({ code: `${mode.toLowerCase()}${code}`, mode, ...rest }))

  return sortedVariablesData
}

function exec(regex, text) {
  let result
  let lastMatchIndex = 0
  const matches = []
  while ((result = regex.exec(text))) {
    const match = []
    lastMatchIndex = text.indexOf(result[0], lastMatchIndex)
    let relIndex = 0
    for (let i = 1; i < result.length; i++) {
      if (result[i]) {
        relIndex = text.indexOf(result[i], relIndex)
        match.push({ value: result[i], start: relIndex, end: relIndex + result[i].length })
      }
    }
    matches.push(match)
  }
  return matches
}

export const getMarkdownStyles = (text) => {
  const boldsRegex = /(\*\*(.+?)\*\*)/g
  const ItalicsRegex = /(__(.+?)__)/g
  const bolds = exec(boldsRegex, text)
  const italics = exec(ItalicsRegex, text)
  const formats = [...bolds, ...italics].sort((a, b) => (a[0].start - b[0].start))

  const styles = []
  let newText = text
  formats.forEach((bold, index) => {
    const item = bold[0]
    const clean = bold[1]
    newText = newText.replace(item.value, clean.value)
    const start = index === 0 ? item.start : item.start - (4 * index)
    const end = index === 0 ? item.end - 4 : item.end - ((4 * index) + 4)
    let styleName = ''
    if (/\*\*.+?\*\*/.test(item.value)) styleName = 'BOLD'
    if (/__.+?__/.test(item.value)) styleName = 'ITALIC'
    styles.push({ style: styleName, start, end })
  })
  return { text: newText, styles }
}

export const normalizeGender = gender => {
  if (!gender) {
    return ''
  }
  if (gender.toString().toUpperCase() === 'M') {
    return 'MASCULINO'
  }
  if (gender.toString().toUpperCase() === 'F') {
    return 'FEMININO'
  }
  return gender
}

export const shortKey = (name) => {
  return md5(name).substring(0, 5)
}

export function peerReviewStatus(order) {
  if (order?.peerReviewDisapprovedAt && order?.signedAt) {
    return 'CORRECTED'
  }
  if (order?.peerReviewApprovedAt) {
    return 'APPROVED'
  }
  if (order?.peerReviewDisapprovedAt) {
    return 'DISAPPROVED'
  }
  if (order?.peerReviewCommentsReadAt) {
    return 'COMMENTS_READ'
  }
  if (order?.peerReviewCommented1At) {
    return 'COMMENTED1'
  }
  if (order?.peerReviewCommented2At) {
    return 'COMMENTED2'
  }
  if (order?.peerReviewingAt) {
    return 'PEER_REVIEWING'
  }
}

export const peerReviewStatusMap = {
  'CORRECTED': 'Corrigido',
  'PEER_REVIEWING': 'Revisando',
  'COMMENTED1': 'Comentado 1',
  'COMMENTED2': 'Comentado 2',
  'COMMENTS_READ': 'Comentado - lido',
  'APPROVED': 'Aprovado',
  'DISAPPROVED': 'Não aprovado'
}

export function reconstructionStatus(order) {
  if (order?.documentedAt) {
    return 'DOCUMENTED'
  }
  if (order?.reconstructionApprovedAt) {
    return 'APPROVED'
  }
  if (order?.reconstructionCorrectedAt) {
    return 'CORRECTED'
  }
  if (order?.reconstructionDisapprovedAt) {
    return 'DISAPPROVED'
  }
  if (order?.reconstructionCommentsReadAt) {
    return 'COMMENTS_READ'
  }
  if (order?.reconstructionCommentedAt) {
    return 'COMMENTED'
  }
  if (order?.reconstructedAt) {
    return 'RECONSTRUCTED'
  }
  if (order?.reconstructingAt) {
    return 'RECONSTRUCTING'
  }
  if (order?.portfolioHasReconstruction || order?.portfolio?.hasReconstruction) {
    return 'TO_RECONSTRUCT'
  }
  return  ''
}

export const reconstructionStatusMap = {
  'DOCUMENTED': 'Documentado',
  'TO_RECONSTRUCT': 'A reconstruir',
  'RECONSTRUCTING': 'Reconstruindo',
  'RECONSTRUCTED': 'Reconstruído',
  'COMMENTED': 'Comentado',
  'COMMENTS_READ': 'Comentado - lido',
  'APPROVED': 'Aprovado',
  'DISAPPROVED': 'Não aprovado',
  'CORRECTED': 'Corrigido'
}
