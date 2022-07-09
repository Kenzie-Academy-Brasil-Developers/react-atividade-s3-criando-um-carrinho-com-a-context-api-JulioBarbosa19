
import './App.css';

import { CartProvider } from './providers/Carrinho/cart';
import ListaProdutos from './components/ListaProduto';
import { CatalogueProvider } from './providers/Catalogo/catalogue';

function App() {
  return (
    <div className="App">
      <CatalogueProvider>
        <CartProvider>
          <ListaProdutos type="catalogue" />
          <ListaProdutos  type="cart" />
        </CartProvider>
      </CatalogueProvider>
      
    </div>
  );
}

export default App;
