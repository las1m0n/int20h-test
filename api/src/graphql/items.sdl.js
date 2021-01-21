export const schema = gql`
  type PriceMap {
    id: Int!
    price: Float!
    date: DateTime
  }

  type Item {
    id: Int!
    name: String!
    shop: String!
    currentPrice: Float!
    url: String!
    priceMap: [PriceMap!]!
  }

  type Query {
    item(name: String!): [Item!]!
  }
`
