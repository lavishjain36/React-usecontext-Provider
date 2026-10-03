import {useContext} from 'react';

import { ProductContext } from '../context/ProductContext';



function ProductDetails() {
    const product = useContext(ProductContext);

    return(
        <div>
            <h2>Product Details</h2>
            <p>Name: {product.name}</p>
            <p>Category: {product.category}</p>
        </div>
    );

}

export default ProductDetails;