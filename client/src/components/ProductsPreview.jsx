import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import { ProductPreviewCard } from './ProductPreviewCard'
import { addToCart } from '../stores/cart/cartSlice'

export const ProductsPreview = () => {
  const [products, setProducts] = useState([])
  const dispatch = useDispatch()

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  }

  const onAddProduct = product => {
    dispatch(addToCart(product))
  }

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(resp => resp.json())
      .then(data => setProducts(data?.data))
      .catch(e => console.log(e))
  }, [])

  return (
    <div className="container mx-auto pb-4 w-2/3 text-white bg-black">
      <h2>Products</h2>
      <Carousel responsive={responsive}>
        {products.length > 0 &&
          products.map((product, index) => (
            <div className="w-full p-3" key={index}>
              <ProductPreviewCard product={product} onAddProduct={onAddProduct} />
            </div>
          ))}
      </Carousel>
    </div>
  )
}
