import {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Users from "./components/users";
import User from "./components/user";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App(){
  const [users, setUserData] = useState([]);

  const getUserData = ()=>{
    fetch("https://jsonplaceholder.typicode.com/users", {headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }}).then(function(response){
      return response.json();
    }).then(function(userJson){
      setUserData(userJson);
    });
  };

  useEffect(()=>{
    getUserData()
  }, []);

  return(
      <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
        <Routes>
          <Route path="/" element={<Users data={users} />} />
          <Route path="user/:userId" element={<User />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
