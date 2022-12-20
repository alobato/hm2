import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Select, SpinnerWithDelay as Spinner } from 'components'

function SlotsSelect({ data: { allSlots }, ...props }) {
  return (
    <Select {...props}>
      {allSlots.map(({ id, name }) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </Select>
  )
}

const SlotsSelectQuery = React.forwardRef(({ AccountId, ...rest }, ref) => {
  const { loading, error, data } = useQuery(gql`query($AccountId: ID) { allSlots(AccountId: $AccountId) { id, name } }`, { variables: { AccountId }, fetchPolicy: 'network-only' })
  if (loading) return <Spinner />
  if (error) return error.message
  return <SlotsSelect data={data} ref={ref} {...rest} />
})

export default SlotsSelectQuery
