import { Component } from "react";
import "./product.css"

class Product extends Component{
    state={
        amount:6,
    }//this is main concept of the react js//the programer should use state for data used in the component//the concept of 'state' eliminates the need for DOM//when properties of the state change ,react recalls render method of component and creates a new virtual DOM , compare it to the real DOM and applies the new changes 
    //the programer must not directly change the state, he/she must use setSate method//the programer should use the changeable properties not unchangeable ones in the state
    
    list=["item","item","item"]
    imgSrc="/1.jpg" //it is a dynamic attribute
    render(){
        return this.state.amount!==0?(
            <>
                <span className="m-2 text-info">{this.createProductName()}</span>
                <span className="m-2 badge bg-primary">{this.state.amount!==0&&this.state.amount}</span> {/*i can use "this.format" for span value but ternary operator is easier*/}
                <button onClick={this.handleIncr} className="m-2 btn btn-sm btn-success">+</button>
                <button onClick={this.handleDecr.bind(this)} className="m-2 btn btn-sm btn-warning">-</button>
                <span>{((info='digital')=>{return info})()}</span>
                <button onClick={()=>{this.handleDel(this.state.amount)}} className="m-2 btn btn-sm btn-danger">delete</button>
                <ul>{this.mappedUl()}</ul>
                <img src={this.imgSrc} style={{width:'200px',height:'200px'}}/>
            </>
        ):(
            <h1>there is no product</h1>
        )
    }
    handleIncr=()=>{
        const {amount:a}=this.state//it is called object destructuring
        this.setState({amount:a+1})
    }
    handleDecr(){
        const {amount:a}=this.state//it is called object destructuring
        this.setState({amount:a-1})
    }
    handleDel(itemAmount){
        console.log(itemAmount)
    }

     createProductName(){
        return <a href="">i-phone 17 pro max</a>
    }
    mappedUl=()=>{
        return this.list.map((item,index)=><li key={index}>{item}</li>)
    }
    format(){
        if(this.state.amount===0) return 'zero'
        else return this.state.amount
    }
}

export default Product