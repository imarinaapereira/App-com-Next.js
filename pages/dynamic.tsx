// import { NextPage ,GetServerSideProps} from "next";
// import {Row, Container ,Col} from "reactstrap";

// interface ApiResponse {
//   name: string
//   timestamp:Date
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//   const serverSideData:ApiResponse= await fetch(`${process.env.NEXT_PUBLIC_APIURL}/api/hello`).then(res=> res.json)
// }
// const Dynamic: NextPage = () => {
//   return (
//     <Container tag="main">
//       <h1 className="my-5">
//         Como funcionam as renderazações do Next.js
//       </h1>
//       <Row>
//         <Col>
//           <h3> 
//              Gerado no servidor
//           </h3>
//         </Col>
//       </Row>
//     </Container>
//   )
// }

// export default Dynamic