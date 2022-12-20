import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Select, SpinnerWithDelay as Spinner } from 'components'

function ClinicsSelect({ data: { allClinics }, ...props }) {
  return (
    <Select {...props}>
      {allClinics.map(({ id, name }) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </Select>
  )
}

const ClinicsSelectQuery = React.forwardRef(({ AccountId, ...rest }, ref) => {
  const { loading, error, data } = useQuery(gql`query($AccountId: ID) { allClinics(AccountId: $AccountId) { id, name } }`, { variables: { AccountId }, fetchPolicy: 'network-only' })
  if (loading) return <Spinner />
  if (error) return error.message
  return <ClinicsSelect data={data} ref={ref} {...rest} />
})

export default ClinicsSelectQuery
