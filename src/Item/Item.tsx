import {Button} from '@material-ui/core'
import React from 'react'
import { productType } from '../App'

import {Wrapper} from './Item.styles'

type propsType = {
    product: productType;
    handleAddToCart: (product: productType) => void
}

const Item: React.FC<propsType> = ({product, handleAddToCart}) => (
    <Wrapper>
        <img src={product.image} alt={product.title} />
        <div>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h4>${product.price}</h4>
        </div>
        <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
    </Wrapper>
)

export default Item