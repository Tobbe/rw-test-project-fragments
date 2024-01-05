export const schema = gql`
  type Produce {
    id: String!
    name: String!
    quantity: Int!
    price: Int!
    nutrients: String
    region: String!
    isSeedless: Boolean
    ripenessIndicators: String
    vegetableFamily: String
    isPickled: Boolean
    stall: Stall!
    stallId: String!
  }

  type Query {
    produces: [Produce!]! @requireAuth
    produce(id: String!): Produce @requireAuth
  }

  input CreateProduceInput {
    name: String!
    quantity: Int!
    price: Int!
    nutrients: String
    region: String!
    isSeedless: Boolean
    ripenessIndicators: String
    vegetableFamily: String
    isPickled: Boolean
    stallId: String!
  }

  input UpdateProduceInput {
    name: String
    quantity: Int
    price: Int
    nutrients: String
    region: String
    isSeedless: Boolean
    ripenessIndicators: String
    vegetableFamily: String
    isPickled: Boolean
    stallId: String
  }

  type Mutation {
    createProduce(input: CreateProduceInput!): Produce! @requireAuth
    updateProduce(id: String!, input: UpdateProduceInput!): Produce!
      @requireAuth
    deleteProduce(id: String!): Produce! @requireAuth
  }
`
