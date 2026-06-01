import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App";
import Product from "./components/product";

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render([<App/>,<Product/>])

// ReactDOM.hydrateRoot(document.getElementById('root'),[<App/>,<Product/>])