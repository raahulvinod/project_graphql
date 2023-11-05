import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Header from './components/Header';

const client = new ApolloClient({
  uri: process.env.APOLLO_SERVER_URI,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container"></div>
      </ApolloProvider>
    </>
  );
}

export default App;
