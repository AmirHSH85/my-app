const Product=({name,id,count,onDele,onIncr,onDecr})=>{

        return (
            <div>
                <span className='m-2 text-info'>{name}</span>
                <button className='m-2 badge bg-primary'>{count!==0 ? count : 'zero'}</button>
                <button onClick={()=>{onIncr(id)}} className='m-2 btn btn-sm btn-success'>+</button>
                <button onClick={()=>{onDecr(id)}} className='m-2 btn btn-sm btn-warning'>-</button>
                <button onClick={()=>{onDele(id)}} className='m-2 btn btn-sm btn-danger'>delete</button>
            </div>
        );
}
 
export default Product;