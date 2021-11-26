

import './App.css';
import { Productos } from './componentes/Productos';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductList } from './componentes/ProductList';
import { Comentarios } from './componentes/Comentarios';

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Productos />
          </div>
          <div className="col">
            <ProductList />
          </div>
          <div className="col">
            <Comentarios/>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
