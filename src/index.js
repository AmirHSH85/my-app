import React from "react"
import ReactDOM from "react-dom/client"
import App from'./App'
import 'bootstrap/dist/css/bootstrap.min.css'
import Product from "./components/product"
// const reactElement=<h1>hello world</h1>
// ReactDOM.render(reactElement,document.getElementById('root'))
const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(reactElement)//the first argument is a jsx
// const root1=ReactDOM.createRoot(document.getElementById('root1'))
root.render([<App/>,<Product/>])//for Component the programmer must use this syntax
// root1.render(<Product/>)


//components with a state are called stateful and those without state are called stateless