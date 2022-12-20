import React from 'react'
import { Icon, Tooltip } from 'components'

function ReconstructionStatusIcon({ order, height = 20 }) {
  if (order?.documentedAt) {
    return <Tooltip tip='Documentado'><Icon color='var(--theme-ui-colors-good)' height={height} path='M9,7V17H13A2,2 0 0,0 15,15V9A2,2 0 0,0 13,7H9M11,9H13V15H11V9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z' /></Tooltip>
  }
  if (order?.reconstructionApprovedAt) {
    return <Tooltip tip='Aprovado'><Icon color='var(--theme-ui-colors-positive)' height={height} path='M9,7V17H11V13H11.8L13,17H15L13.76,12.85C14.5,12.55 15,11.84 15,11V9A2,2 0 0,0 13,7H9M11,9H13V11H11V9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z' /></Tooltip>
  }
  if (order?.reconstructionCorrectedAt) {
    return <Tooltip tip='Corrigido'><Icon color='var(--theme-ui-colors-positive)' height={height} path='M9,7V17H11V13H11.8L13,17H15L13.76,12.85C14.5,12.55 15,11.84 15,11V9A2,2 0 0,0 13,7H9M11,9H13V11H11V9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z' /></Tooltip>
  }
  if (order?.reconstructionDisapprovedAt) {
    return <Tooltip tip='Não aprovado'><Icon color='var(--theme-ui-colors-negative)' height={height} path='M9,7V17H11V13H11.8L13,17H15L13.76,12.85C14.5,12.55 15,11.84 15,11V9A2,2 0 0,0 13,7H9M11,9H13V11H11V9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z' /></Tooltip>
  }
  if (order?.reconstructionCommentsReadAt) {
    return <Tooltip tip='Comentado - Lido'><Icon color='var(--theme-ui-colors-positive)' height={height} path='M9,7V17H11V13H11.8L13,17H15L13.76,12.85C14.5,12.55 15,11.84 15,11V9A2,2 0 0,0 13,7H9M11,9H13V11H11V9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z' /></Tooltip>
  }
  if (order?.reconstructionCommentedAt) {
    return <Tooltip tip='Comentado'><Icon color='var(--theme-ui-colors-attention)' height={height} path='M9,7V17H11V13H11.8L13,17H15L13.76,12.85C14.5,12.55 15,11.84 15,11V9A2,2 0 0,0 13,7H9M11,9H13V11H11V9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z' /></Tooltip>
  }
  if (order?.reconstructedAt) {
    return <Tooltip tip='Reconstruído'><Icon height={height} path='M9,7V17H11V13H11.8L13,17H15L13.76,12.85C14.5,12.55 15,11.84 15,11V9A2,2 0 0,0 13,7H9M11,9H13V11H11V9M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3Z' /></Tooltip>
  }
  if (order?.reconstructingAt) {
    return <Tooltip tip='Reconstruindo'><Icon height={height} path='M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z' /></Tooltip>
  }
  if (order?.portfolioHasReconstruction || order?.portfolio?.hasReconstruction) {
    return <Tooltip tip='A reconstruir'><Icon color='var(--theme-ui-colors-hairline)' height={height} path='M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z' /></Tooltip>
  }

  return  ''
}

export default ReconstructionStatusIcon
