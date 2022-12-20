import React from 'react'
import { Icon, Tooltip } from 'components'

function PendenciesStatusIcon({ order, height = 20, ...rest }) {
  const openPendenciesQty = order?.openPendenciesQty || order?.OpenPendenciesQty || 0
  const closedPendenciesQty = order?.closedPendenciesQty || order?.ClosedPendenciesQty || 0
  const hasOpenPendencies = openPendenciesQty > closedPendenciesQty
  const hasPendencies = openPendenciesQty > 0 || closedPendenciesQty > 0

  if (hasOpenPendencies) {
    return <Tooltip tip={`${openPendenciesQty} pendências abertas e ${closedPendenciesQty} fechadas`}><Icon color='var(--theme-ui-colors-attention)' height={height} path='M9,7H13A2,2 0 0,1 15,9V11A2,2 0 0,1 13,13H11V17H9V7M11,9V11H13V9H11M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z' {...rest} /></Tooltip>
  } else if (hasPendencies) {
    return <Tooltip tip={`${openPendenciesQty} pendências abertas e ${closedPendenciesQty} fechadas`}><Icon color='var(--theme-ui-colors-body)' height={height} path='M9,7H13A2,2 0 0,1 15,9V11A2,2 0 0,1 13,13H11V17H9V7M11,9V11H13V9H11M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z' {...rest} /></Tooltip>
  } else {
    return <Tooltip tip='Sem pendências'><Icon color='var(--theme-ui-colors-hairline)' height={height} path='M9,7H13A2,2 0 0,1 15,9V11A2,2 0 0,1 13,13H11V17H9V7M11,9V11H13V9H11M5,3H19A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3M5,5V19H19V5H5Z' {...rest} /></Tooltip>
  }
}

export default PendenciesStatusIcon
