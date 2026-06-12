import Product from "./product";

const Products = ({products,onDelete,onDecrement,onIncrement}) => {
    return ( 
        <div>
            {products.map(p=>{
                return <Product
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            count={p.count}
                            onDele={onDelete}
                            onIncr={onIncrement}
                            onDecr={onDecrement}
                        />
            })}
        </div>
     );
}
 
export default Products;