import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Login from './Login';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
// import { Browser as Router, Switch, Route } from "react-router-dom"
import { BrowserRouter,Routes, Route
} from "react-router-dom"
import Footer from './Footer';
import { auth } from './firebase';
import { useStateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const promise = loadStripe('pk_test_51KFKSpSGI6P4F7kPWfGxjpMYHahGfcflTx97VcAMmWbFHqzDIif9RSeiflZbncdfLbFmodLI0PtX1wYs2KlN0Q4l00vKVDju36');

function App() {
  const [{}, dispatch] = useStateValue();

useEffect(() => {
  auth.onAuthStateChanged((authUser) => {
    console.log("User=",authUser);

    if (authUser) {
      dispatch({
        type: 'SET_USER',
        user: authUser
      });
    } else {
      dispatch({
        type: 'SET_USER',
        user: null
      });
    }
  });
}, []);

  return (
    <BrowserRouter>
    
      <Routes>
        <Route path="/login" element={<><Login /></>} >
        </Route>
        <Route path="/checkout" element={<><Header /><Checkout /><Footer /></>}>
        </Route>
        <Route path="/" element={<><Header /><Home /><Footer /></>}>
        </Route>      
        <Route path="/payment" element={<><Header /><Payment /><Footer /></>}>
        </Route>   
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
