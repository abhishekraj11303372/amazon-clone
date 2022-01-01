import './App.css';
import Header from './Header';
import Login from './Login';
import Home from './Home';
import Checkout from './Checkout';
// import { Browser as Router, Switch, Route } from "react-router-dom"
import { BrowserRouter,Routes, Route
} from "react-router-dom"
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/login" element={<><Login /></>} >
        </Route>
        <Route path="/checkout" element={<><Header /><Checkout /><Footer /></>}>
        </Route>
        <Route path="/" element={<><Header /><Home /><Footer /></>}>
        </Route>        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
