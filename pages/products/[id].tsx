import { GetStaticPaths,GetStaticProps ,NextPage} from "next"
import Head from "next/head"
import { ReactNode } from "react"
import { Container } from "reactstrap"
import Header from "@/app/Header"
import ProductDetails from "@/app/ProductDetails"
import { fetchProduct, fetchProducts, ProductType } from "../../src/services/products";


export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id
  
    if (typeof id === 'string') {
    const product = await fetchProduct(id)

      return { props: { product }, revalidate: 10 }
      }

  return {
    redirect: { destination: '/products', permanent: false }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = await fetchProducts()

  const paths = products.map(product => {
     return { params: { id: product.id.toString() } }
  })
   return { paths, fallback: false }
}

interface ProductProps {
  children: ReactNode;
  product?: ProductType;
}

const Product: NextPage<ProductProps> = (props) => {
  return (
    <div>
      <Head>
        <title>{props.product?.name}</title>
        <meta name="description" content={props.product?.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Container className="mt-5">
        {props.product ? ( // Verifica se props.product está definido
          <ProductDetails product={props.product} />
        ) : (
          <p>No product available</p> // Renderiza uma mensagem caso props.product seja undefined
        )}
      </Container>
    </div>
  );
};

export default Product;