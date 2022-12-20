import { Button } from 'theme-ui'
import { Icon } from 'components'

function ButtonIcon({ iconPath, iconHeight = 24, iconColor = 'currentColor', selected = false, ...rest }) {
  return (
    <Button variant='raw' {...rest}>
      <Icon path={iconPath} height={iconHeight} color={iconColor} />
    </Button>
  )
}

export default ButtonIcon
