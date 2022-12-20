import { Flex } from 'theme-ui'
import { Portal } from 'components'

function PortalAwareItem({ children, provided, snapshot, ...rest }) {
  // https://github.com/atlassian/react-beautiful-dnd/blob/master/stories/src/portal/portal-app.jsx
  const usePortal = snapshot.isDragging
  const child = (
    <Flex sx={{ alignItems: 'center', mb: 1 }} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} {...rest}>
      {children}
    </Flex>
  )
  if (!usePortal) {
    return child
  }
  return <Portal>{child}</Portal>
}

export default PortalAwareItem
