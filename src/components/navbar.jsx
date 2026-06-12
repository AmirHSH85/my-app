import { Component } from "react";

class Navbar extends Component {
    render(){
        return ( 
            <nav>
                <a className="m-2" href="">
                    {this.props.products.reduce((sum,p)=>sum+p.count,0)}
                </a>
            </nav>
        );
    };
};
 
export default Navbar;