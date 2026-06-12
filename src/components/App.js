import { Component } from 'react';
import Products from './products';
import Navbar from './navbar';
import ProductsCtx from '../context/products';
import { render } from '@testing-library/react';

class App extends Component{
    state={
        products:[
            {id:1,count:1,name:"laptop"},
            {id:2,count:2,name:"phone"},
            {id:3,count:3,name:"tablet"},
        ]
    };
    render(){
        return(
            <>
                <Navbar products={this.state.products}/>
                <button onClick={this.handleReset} className='m-2'>Reset</button>
                <Products 
                    products={this.state.products}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                />
            </>
        )
    };
    
    handleReset=()=>{
        this.setState({products:this.state.products.map(p=>(
            {
                ...p,
                count:0
            }
        ))});
    };
    handleDelete=(productId)=>{
        this.setState({products:this.state.products.filter(p=>
            p.id===productId
            ?false
            :true
        )});
    };
    handleIncrement=(productId)=>{
        this.setState({products:this.state.products.map(p=>
            p.id===productId
            ?{...p,count:p.count+1}
            :p
        )});
    };
    handleDecrement=(productId)=>{
        this.setState({products:this.state.products.map(p=>
            p.id===productId && p.count>0
            ?{...p,count:p.count-1}
            :p
        )});
    };
}

export default App