import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { Select, SpinnerWithDelay as Spinner } from 'components'

function SecondOpinionSelect({ data: { secondOpinionDoctors }, ...props }) {
  return (
    <Select {...props}>
      {secondOpinionDoctors.map(({ id, name }) => (
        <option key={id} value={id}>{name}</option>
      ))}
    </Select>
  )
}

const SecondOpinionSelectQuery = React.forwardRef(({ portfolioId, ...rest }, ref) => {
  const { loading, error, data } = useQuery(gql`query($portfolioId: ID) { secondOpinionDoctors(portfolioId: $portfolioId) { id, name } }`, { variables: { portfolioId }, fetchPolicy: 'network-only' })
  if (loading) return <Spinner />
  if (error) return error.message
  return <SecondOpinionSelect data={data} ref={ref} {...rest} />
})

export default SecondOpinionSelectQuery
