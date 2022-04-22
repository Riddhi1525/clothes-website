import { BrowserRouter } from 'react-router-dom';
import {title} from './App.css';

import { Products } from './Components/Products/Product';
import { productData, productDataTwo } from './Components/Products/Data';

function App() {
  return (
    <div>
      <BrowserRouter>
       <title heading="ECOMMERCE WEBSITE"/>
        <Products heading="ECOMMERCE WEBSITE" data={productData} />
        
        <Products heading="FOR WOMEN" data={productDataTwo} />
        
      </BrowserRouter>

    </div>
  );
}
export default App;