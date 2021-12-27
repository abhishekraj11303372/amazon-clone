import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
// import { Browser as Router, Switch, Route } from "react-router-dom"
import { BrowserRouter,Routes, Route
} from "react-router-dom"
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/checkout" element={<Checkout />}>
        </Route>
        <Route path="/" element={<Home />}>
        </Route>        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
