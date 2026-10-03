import {useContext} from 'react'

//import the ProductContext 
import { ProductContext } from '../context/ProductContext';

function Product() {

    const product=useContext(ProductContext);


    return (
        <div>
            <h2>Product Info</h2>
            <p>Name: {product.name}</p>
            <p>Price: {product.price}</p>
            <p>Category: {product.category}</p> 
        </div>


    );

}

export default Product;