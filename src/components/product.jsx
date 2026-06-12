import { Component } from "react"

class Product extends Component{
    render(){
        return (
            <div>
                <span className='m-2 text-info'>{this.props.name}</span>
                <button className='m-2 badge bg-primary'>{this.props.count!==0 ? this.props.count : 'zero'}</button>
                <button onClick={()=>{this.props.onIncr(this.props.id)}} className='m-2 btn btn-sm btn-success'>+</button>
                <button onClick={()=>{this.props.onDecr(this.props.id)}} className='m-2 btn btn-sm btn-warning'>-</button>
                <button onClick={()=>{this.props.onDele(this.props.id)}} className='m-2 btn btn-sm btn-danger'>delete</button>
            </div>
        );
    };
};
 
export default Product;