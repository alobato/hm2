import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Select, SpinnerWithDelay as Spinner } from 'components'

function DoctorsAndBiomedicsSelect({ data: { allDoctorsAndBiomedics }, ...props }) {
  return (
    <Select {...props}>
      {allDoctorsAndBiomedics.map(({ id, name }) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </Select>
  )
}

const DoctorsAndBiomedicsSelectQuery = React.forwardRef(({ AccountId, ...rest }, ref) => {
  const { loading, error, data } = useQuery(gql`query($AccountId: ID) { allDoctorsAndBiomedics(AccountId: $AccountId) { id, name } }`, { variables: { AccountId }, fetchPolicy: 'network-only' })
  if (loading) return <Spinner />
  if (error) return error.message
  return <DoctorsAndBiomedicsSelect data={data} ref={ref} {...rest} />
})

export default DoctorsAndBiomedicsSelectQuery
