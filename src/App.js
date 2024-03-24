import Header from "./component/Header";
import Container from "./component/Container";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./component/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Container />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
