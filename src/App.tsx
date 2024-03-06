import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import { CartProvider } from './CartContext';

function App() {
  return (
    <CartProvider>
      <Header></Header>
      <div>
        <ProductList></ProductList>
      </div>
    </CartProvider>

  );
}

export default App;
