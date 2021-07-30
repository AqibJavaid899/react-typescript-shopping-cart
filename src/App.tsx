import {useState} from 'react'
import {useQuery} from 'react-query'

import {Wrapper} from './App.styles'

import { LinearProgress, Grid, Badge, Drawer } from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'

import Item from './Item/Item'

// Defining the type of API product
export type productType = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  amount: number
}

const getProductsFromAPI =  async(): Promise<productType[]> => await (await fetch('https://fakestoreapi.com/products')).json() 


function App() {

  // Calling the Function through useQuery hook 
  const {data, isLoading, error} = useQuery<productType[]>('products', getProductsFromAPI)
  console.log(data)

  if(isLoading) {
    return <LinearProgress />
  }
  if(error) {
    return <div>Something went wrong...</div>
  }

  // Utility Functions
  const getTotalItem = () => null;
  const handleAddToCart = (product: productType) => null;
  const handleRemoveToCart = () => null;

  return (
    <Wrapper>
      <Grid container spacing={3} >
        {data?.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Item product={product} handleAddToCart={handleAddToCart} />
            </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
