import { Routes, Route, Link } from "react-router";
import Movies from "./pages/Movies";
import Users from "./pages/Users";
import Product from "./pages/Product";

const App = () => {
  return (
    <>
      <nav className="navbar navbar-light">
         <ul className="nav navbar-nav">
           <li>
             {" "}
             <Link to="/">Homes</Link>
           </li>
           <li>
             <Link to="/users">Users</Link>
           </li>
           <li>
              <Link to="/product/1">Product</Link>
           </li>
         </ul>
       </nav>

      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/users" element={<Users />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </>
  );
};

export default App;
