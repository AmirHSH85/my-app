import React, { Component } from 'react';
import "./product.css"

class Product extends Component {
    state = {
        amount:5,
      }
      imgSrc="1.jpg"
    list=["item 1","item 2","item 3"]
    mappedList=this.list.map((item,index)=><li key={index}>{item}</li>)
    render() { 
        return (
            <>
                <span className='m-2 text-info'>laptop</span>
                <button className='m-2 badge bg-primary'>{this.state.amount!==0 ? this.state.amount : 'zero'}</button>
                <button onClick={this.handleIncr} className='m-2 btn btn-sm btn-success'>+</button>
                <button onClick={this.handleDecr} className='m-2 btn btn-sm btn-warning'>-</button>
                <button onClick={this.handleDele} className='m-2 btn btn-sm btn-danger'>dele</button>
                <ul>{this.mappedList}</ul>
                <img src={this.imgSrc} alt="" style={{width:"300px",height:"300px"}} />
            </>
        );
    }
    handleIncr=()=>{
        let {amount:a}=this.state
        this.setState({amount:a+1})
    }
    handleDecr=()=>{
        let {amount:a}=this.state
        if(a>0){
            this.setState({amount:a-1})
        }
    }
    handleDele=()=>{
        let {amount:a}=this.state
        this.setState({amount:0})
    }
    

}
 
export default Product;