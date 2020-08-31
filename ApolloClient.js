import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'

// Instantiate required constructor fields
const cache = new InMemoryCache()
const BASE_URL = 'http://localhost:4000'
const httpLink = createHttpLink({
  uri: BASE_URL
})

const client = new ApolloClient({
  cache: cache,
  link: httpLink
})

export default client
