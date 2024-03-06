import styled from 'styled-components';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

const AppContainer = styled.div`
`;


function App() {
  return (
    <AppContainer>
      <Header></Header>
      <div>
        <ProductList></ProductList>
      </div>
    </AppContainer>
  );
}

export default App;
