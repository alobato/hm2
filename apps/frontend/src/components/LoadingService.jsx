import { useSubscription, gql } from '@apollo/client'

function LoadingService({ uuid, onFinish }) {
  console.log('LoadingService uuid', uuid)
  useSubscription(
    gql`subscription($uuid: ID!) { captureUpdated(uuid: $uuid) }`,
    {
      skip: !uuid,
      variables: { uuid },
      onSubscriptionData: ({ client, subscriptionData }) => {
        const { data } = subscriptionData
        console.log('data.captureUpdated', data.captureUpdated)
        if (data.captureUpdated.percent === 100) {
          onFinish()
        }
      }
    }
  )
  return null
}

export default LoadingService
