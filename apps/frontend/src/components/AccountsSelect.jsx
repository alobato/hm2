import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Select, SpinnerWithDelay as Spinner } from 'components'

function AccountsSelect({ data: { allAccounts }, ...props }) {
  return (
    <Select {...props}>
      {allAccounts.map(({ id, name }) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </Select>
  )
}

const AccountsSelectQuery = React.forwardRef((props, ref) => {
  const { loading, error, data } = useQuery(gql`query { allAccounts { id, name } }`, { fetchPolicy: 'network-only' })
  if (loading) return <Spinner />
  if (error) return error.message
  return <AccountsSelect data={data} ref={ref} {...props} />
})

export default AccountsSelectQuery
