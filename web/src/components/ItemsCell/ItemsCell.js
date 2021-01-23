import Item from 'src/components/Item/Item'

export const QUERY = gql`
  query {
    items {
      id
      name
      about
      image
      priceInfo {
        id
        url
        shop {
          id
          name
          imageUrl
        }
      }
      priceMap {
        id
        price
        date
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({error}) => <div>Error: {error.message}</div>

export const Success = ({items}) => {
  return items.map((item) => <Item key={item.id} item={item} />)
}
