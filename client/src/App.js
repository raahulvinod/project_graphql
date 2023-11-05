import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Header from './components/Header';
import Clients from './components/Clients';

const client = new ApolloClient({
  uri: process.env.REACT_APP_SERVER_URI,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="container">
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
