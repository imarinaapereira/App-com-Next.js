// src/components/CartTable.tsx

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Col, Row, Table } from "reactstrap";
import { useCart } from "../hooks/useCart";
import { ProductType } from "../services/products";

type CartEntry = {
  product: ProductType
  quantity: number
}

const CartTableRow = (props: {
  entry: CartEntry
}) => {
  const { addProduct, removeProduct } = useCart()

  return (
    <tr>
      <td>
        <Row className="align-items-center">
          <Col xs={4} md={2} lg={1}>
           <Image
  src={props.entry.product.imageUrl}
  alt={props.entry.product.name}
  width={600}
  height={500}
  layout="responsive"
/>



          </Col>
          <Col xs={8} md={10} lg={11}>
            {props.entry.product.name}
          </Col>
        </Row>
      </td>
      <td>R$ {props.entry.product.price}</td>
      <td>{props.entry.quantity}</td>
      <td>R$ {(props.entry.product.price * props.entry.quantity)}</td>
      <td>
        <Button
          color="primary"
          size="sm"
          onClick={() => addProduct(props.entry.product)}
        >
          +
        </Button>
        {' '}
        <Button
          color="danger"
          size="sm"
          onClick={() => removeProduct(props.entry.product.id)}
        >
          –
        </Button>
      </td>
    </tr>
  )
}

// src/components/CartTable.tsx

// ...

// ... (imports)

// ... (imports)

// ... (imports)

export default function CartTable() {
  const { cart } = useCart();

  // Inicialize o array cartEntries usando a função useState
  const [cartEntries, setCartEntries] = useState<CartEntry[]>([]);

  useEffect(() => {
    // Use a função reduce para calcular as entradas do carrinho
    const entriesList = cart.reduce((list, product) => {
      const entryIndex = list.findIndex(entry => entry.product.id === product.id);

      if (entryIndex === -1) {
        return [
          ...list,
          {
            product,
            quantity: 1,
          },
        ];
      }

      list[entryIndex].quantity++;
      return list;
    }, [] as CartEntry[]);

    setCartEntries(entriesList); // Atualize o estado com as entradas calculadas
  }, [cart]);

  // Calcula o valor total de todos os produtos no carrinho
  const totalValue = cartEntries.reduce(
    (total, entry) => total + entry.product.price * entry.quantity,
    0
  );

  return (
    <Table responsive className="align-middle" style={{ minWidth: '32rem' }}>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Qtd.</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {cartEntries.map(entry => (
          <CartTableRow key={entry.product.id} entry={entry} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td colSpan={3} className="text-end">Total:</td>
          <td>R$ {totalValue.toFixed(2)}</td>
          <td></td>
        </tr>
      </tfoot>
    </Table>
  );
}
