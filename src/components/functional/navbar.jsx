const Navbar = ({products}) => {
    return ( 
        <nav>
            <a className="m-2" href="">
                {products.reduce((sum,p)=>sum+p.count,0)}
            </a>
        </nav>
     );
}
 
export default Navbar;