import React, { useEffect } from "react";
import './App.css';
import Header from './Header';
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Checkout from "./Checkout"; 
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51NuYszSEErlnHKgmIx88ECNt6g7aP2PV5f1dscrv6NhykIFBVQMw9E927bdjjJYGswFXAZlfb0Cvtg7YaWDE1dRy00uhHA0Bz6"
);




function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM CONVENTION
    <Router>
      <div className="app">
        
        <Routes>
          <Route path="/login" element={<> <Login /> </>}> </Route>
          <Route path="/orders" element={<>  <Header /> <Orders /> </>}> </Route>
          <Route path="/checkout" element={<>  <Header /> <Checkout /> </>}> </Route>
          <Route path="/payment" element={<>  <Header /><Elements stripe={promise}> <Payment /></Elements>   </>}> </Route>
          <Route path="/" element={<> <Header /> <Home /> </>}> </Route>
        </Routes>
      </div>
    </Router>  
  );
} 

export default App;
