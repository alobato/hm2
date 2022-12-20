import React from 'react'
import { NavLink } from 'react-router-dom'
import { Flex } from 'theme-ui'
import { Icon } from 'components'

function ButtonNavLink({ className, children, to, path }) {
  return (
    <NavLink className={className} to={to}>
      <Flex sx={{ alignItems: 'center', flexShrink: 0, p: 2, '.active > &': { bg: 'elevated' } }}>
        <Flex className='icon' sx={{ mr: 2 }}>
          <Icon height={20} path={path} />
        </Flex>
        <Flex className='text'>
          <Flex>{children}</Flex>
        </Flex>
      </Flex>
    </NavLink>
  )
}

export default ButtonNavLink
