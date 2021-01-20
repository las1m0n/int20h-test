export const schema = gql`
  type PriceMap {
    id: Int!
    price: Float!
    date: DateTime
  }

  type Item {
    id: Int!
    name: String!,
    shop: String!
    currentPrice: Float!
    priceMap: [PriceMap!]!
  }

  type Query {
    item(name: String!): [Item!]!
  }
`
