import logo from './logo.svg';
import './App.css';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import Navi from './Navi';
import {Container,Row} from "reactstrap"
function App() {
  return (
    <div className="App">
      <Container>
        <Row>
           <Navi/>
        </Row>
        <Row>
          <CategoryList/>
          <ProductList/>
        </Row>
      </Container>
     
      
    </div>
  );
}

export default App;
