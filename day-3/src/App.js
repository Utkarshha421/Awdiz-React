import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import UseState from "./25-05/UseState";
import NotFound from './NotFound';
import UseState2 from "./26-05/UseState2";
import UseEffect from "./26-05/UseEffect";
import UseEffect2 from "./26-05/UseEffect2";
import UseEffect3 from "./29-05/UseEffect3";
import UserDetails from './30-05/UserDetails';
import Routing from './30-05/Routing';
import AllProducts from './2-06/AllProducts';
import FunctionProp from "./04-06/FunctionProp";
import StyledComponents from "./04-06/StyledComponents";
import InlineStyling from "./04-06/InlineStyling";
import Todo from './06-06/Todo';
import Register from "./8-06/Register";
import Login from "./8-06/Login";
import Login1 from './09-06/Login1';
import Register1 from './09-06/Register1';
import ParentChild from './09-06/ParentChild';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="*" element={<NotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/use-state" element={<UseState/>}/>  
        <Route path="/use-state-2" element={<UseState2 />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/use-effect-2" element={<UseEffect2 />} /> 
        <Route path="/use-effect-3" element={<UseEffect3 />} />
        <Route path="/use-navigate" element={<Routing/>} />
        <Route path="/user/:ABcd134" element={<UserDetails/>} />  
        <Route path="/all-products" element={<AllProducts />} />  
        <Route path="/function-prop" element={<FunctionProp />} />
        <Route path="/styled-components" element={<StyledComponents />} />
        <Route path="/inline-styling" element={<InlineStyling />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register1" element={<Register1 />} />
        <Route path="/login1" element={<Login1 />} />
        <Route path="/childparent" element={<ParentChild />} />


      </Routes>
    </div>
  );
}

export default App;
