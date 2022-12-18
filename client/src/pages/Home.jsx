import { About } from '../components/About'
import { Banner } from '../components/Banner'
import { ProductsPreview } from '../components/ProductsPreview'

export const Home = () => {
  return (
    <>
      <Banner />
      <ProductsPreview />
      <About />
    </>
  )
}
