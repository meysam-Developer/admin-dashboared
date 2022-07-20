import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import {Routes,Route} from "react-router-dom";
import { productInput, userInput } from "./FormInputResource";
import './style/dark.scss'
import { useState } from "react";

function App() {
  const[dark,setDark]=useState(false);
  return (
    <div className={dark ? "app dark" : "app"}>
      <Routes>
        <Route path="/">
          <Route index element={<Home/>} />
          <Route path="login" element={<Login/>}/>

          <Route path="users">
            <Route index element={<List/>}/>
            <Route path=":userId" element={<Single/>}/>
            <Route path="new" element={<New inputs={userInput} title="Add new user"/>}/>
          </Route>

          <Route path="products">
            <Route index element={<List/>}/>
            <Route path=":productId" element={<Single/>}/>
            <Route path="new" element={<New inputs={productInput}  title="Add new product"/>}/>
          </Route>


        </Route>

      </Routes>
   
    </div>
  );
}

export default App;
