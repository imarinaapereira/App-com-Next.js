// src/components/Header.tsx

import Link from "next/link";
import { Nav, Navbar } from "reactstrap";
const Header = () => {
  return (
    <Navbar container="md" color="dark" dark>
      <Link href="/" passHref className="navbar-brand">
        Inicio
       
      </Link>
      <Nav className="flex-row" navbar>
        <Link href="/products" passHref className="navbar-brand">
        Produtos
        </Link>
        <Link href="/cart" passHref className="navbar-brand" >
         Carrinho
        </Link>
      </Nav>
    </Navbar>
  )
}

export default Header