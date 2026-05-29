import { Component } from "react";
import "./product.css"

class Product extends Component{
    state={
        amount:6,
        list:["item","item","item"],
        imgSrc:"/1.jpg" //it is a dynamic attribute
    }//the programer should use state for data used in the component//concept of 'state' eliminates the need for dom//when properties of the state change ,react recalls render method of component and creates a new virtual dom , compare it to the real dom and applies the new changes 
    //the programer must not directly change the state, he/she must use setSate method//this is main concept of the react js//the programer should use the changeable properties not unchangeable ones
    render(){
        return this.state.amount!==0?(
            <>
                <span className="m-2 text-info">{this.createProductName()}</span>
                <span className="m-2 badge bg-primary">{this.state.amount!==0&&this.state.amount}</span> {/*i can use this "this.format" for span value but ternary operator is easier*/}
                <button onClick={this.handleIncr} className="m-2 btn btn-sm btn-success">+</button>
                <button onClick={this.handleDecr.bind(this)} className="m-2 btn btn-sm btn-warning">-</button>
                <button>{((info='digital')=>{return info})()}</button>
                <button onClick={()=>{this.handleDel(this.state.amount)}} className="m-2 btn btn-sm btn-danger">delete</button>
                <ul>{this.mappedUl()}</ul>
                <img src={this.state.imgSrc} style={{width:'200px',height:'200px'}}/>
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
        return this.state.list.map((item,index)=><li key={index}>{item}</li>)
    }
    format(){
        if(this.state.amount===0) return 'zero'
        else return this.state.amount
    }
}

export default Product