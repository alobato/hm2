import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Select, SpinnerWithDelay as Spinner } from 'components'

function DoctorsSelect({ data: { allDoctors }, ...props }) {
  return (
    <Select {...props}>
      {allDoctors.map(({ id, name }) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </Select>
  )
}

const DoctorsSelectQuery = React.forwardRef(({ AccountId, ...rest }, ref) => {
  const { loading, error, data } = useQuery(gql`query($AccountId: ID) { allDoctors(AccountId: $AccountId) { id, name } }`, { variables: { AccountId }, fetchPolicy: 'network-only' })
  if (loading) return <Spinner />
  if (error) return error.message
  return <DoctorsSelect data={data} ref={ref} {...rest} />
})

export default DoctorsSelectQuery
