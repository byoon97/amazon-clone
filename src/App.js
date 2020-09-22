import React, {useEffect} from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider"
import {auth} from "./firebase"

function App() {
  const [{user}, dispatch] = useStateValue()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //if user is logged in

        dispatch({
          type:"SET_USER",
          user: authUser
        })

      } else {
        //if user is logged out

        dispatch({
          type:"SET_USER",
          user: null
        })

      }
    })

    return  () => {
      unsubscribe()
    }
  }, [dispatch])

  console.log("USER IS >>>", user)

  return (
    <Router>
      <div className="app">
        <Switch>   
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
