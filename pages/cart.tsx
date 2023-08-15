import { NextPage } from "next";
import Header from "../src/app/Header";
import { Container } from "reactstrap";
import CartTable from "@/app/CartTable";
import Head from "next/head";
const Cart: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carrinho</title>
        <meta name="description" content="Meu carrinho de compras" />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Header/>
      <h1>Carrinho</h1>
      <main>
        <Container className="mb-5">
         <CartTable />
        </Container>
      </main>
    </>
  )
}

export default Cart;