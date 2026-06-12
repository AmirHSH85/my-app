import Product from "./product";
import { Component } from "react";

class Products extends Component {
    render(){
        return ( 
            <div>
                {this.props.products.map(p=>{
                    return <Product
                                key={p.id}
                                id={p.id}
                                name={p.name}
                                count={p.count}
                                onDele={this.props.onDelete}
                                onIncr={this.props.onIncrement}
                                onDecr={this.props.onDecrement}
                            />
                    })}
            </div>
        );
    }  
};
 
export default Products;