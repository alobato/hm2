import React from 'react'
import { Icon, Tooltip } from 'components'

function PeerReviewStatusIcon({ order, height = 20 }) {
  if (order?.peerReviewDisapprovedAt && order?.signedAt) {
    return <Tooltip tip='Corrigido'><Icon color='var(--theme-ui-colors-positive)' height={height} path='M15,11C15,12.11 14.1,13 13,13H11V15H15V17H9V13C9,11.89 9.9,11 11,11H13V9H9V7H13A2,2 0 0,1 15,9M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z' /></Tooltip>
  }
  if (order?.peerReviewApprovedAt) {
    return <Tooltip tip='Aprovado'><Icon color='var(--theme-ui-colors-positive)' height={height} path='M15,11C15,12.11 14.1,13 13,13H11V15H15V17H9V13C9,11.89 9.9,11 11,11H13V9H9V7H13A2,2 0 0,1 15,9M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z' /></Tooltip>
  }
  if (order?.peerReviewDisapprovedAt) {
    return <Tooltip tip='Não aprovado'><Icon color='var(--theme-ui-colors-negative)' height={height} path='M15,11C15,12.11 14.1,13 13,13H11V15H15V17H9V13C9,11.89 9.9,11 11,11H13V9H9V7H13A2,2 0 0,1 15,9M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z' /></Tooltip>
  }
  if (order?.peerReviewCommentsReadAt) {
    return <Tooltip tip='Comentado - Lido'><Icon color='var(--theme-ui-colors-positive)' height={height} path='M15,11C15,12.11 14.1,13 13,13H11V15H15V17H9V13C9,11.89 9.9,11 11,11H13V9H9V7H13A2,2 0 0,1 15,9M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z' /></Tooltip>
  }
  if (order?.peerReviewCommented1At) {
    return <Tooltip tip='Comentado 1'><Icon color='var(--theme-ui-colors-attention)' height={height} path='M15,11C15,12.11 14.1,13 13,13H11V15H15V17H9V13C9,11.89 9.9,11 11,11H13V9H9V7H13A2,2 0 0,1 15,9M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z' /></Tooltip>
  }
  if (order?.peerReviewCommented2At) {
    return <Tooltip tip='Comentado 2'><Icon color='var(--theme-ui-colors-attention)' height={height} path='M15,11C15,12.11 14.1,13 13,13H11V15H15V17H9V13C9,11.89 9.9,11 11,11H13V9H9V7H13A2,2 0 0,1 15,9M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z' /></Tooltip>
  }
  if (order?.peerReviewingAt) {
    return <Tooltip tip='Avaliando'><Icon height={height} path='M15,15H11V13H13A2,2 0 0,0 15,11V9C15,7.89 14.1,7 13,7H9V9H13V11H11A2,2 0 0,0 9,13V17H15M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z' /></Tooltip>
  }
  if (order?.peerReviewTargetAt) {
    return <Tooltip tip='A avaliar'><Icon color='var(--theme-ui-colors-hairline)' height={height} path='M15,15H11V13H13A2,2 0 0,0 15,11V9C15,7.89 14.1,7 13,7H9V9H13V11H11A2,2 0 0,0 9,13V17H15M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z' /></Tooltip>
  }

  return  ''
}

export default PeerReviewStatusIcon
