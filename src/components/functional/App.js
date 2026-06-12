import { useState } from 'react';
import Products from './products';
import Navbar from './navbar';
import ProductsCtx from '../../context/products';

const App=()=>{
    const [state,setState]=useState({
        products:[
            {id:1,count:1,name:"laptop"},
            {id:2,count:2,name:"phone"},
            {id:3,count:3,name:"tablet"},
        ]
    })
    return(
        <>
            <Navbar products={state.products}/>
            <button onClick={handleReset} className='m-2'>Reset</button>
            <Products 
                products={state.products}
                onDelete={handleDelete}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
            />
        </>
    );
    function handleReset(){
        setState({products:state.products.map(p=>(
            {
                ...p,
                count:0
            }
        ))});
    };
    function handleDelete(productId){
        setState({products:state.products.filter(p=>
            p.id===productId
            ?false
            :true
        )});
    };
    function handleIncrement(productId){
        setState({products:state.products.map(p=>
            p.id===productId
            ?{...p,count:p.count+1}
            :p
        )});
    };
    function handleDecrement(productId){
        setState({products:state.products.map(p=>
            p.id===productId && p.count>0
            ?{...p,count:p.count-1}
            :p
        )});
    };
}

export default App