import { React, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const params = useParams();
  const [productName, setProductName] = useState(params.productname);
  const [totalProduct, setTotalProduct] = useState();
  const [namaPenerima, setNamaPenerima] = useState();

  // function handleInput(e) {
  //   setTotalProduct(e.target.value);
  //   console.log("e", e);
  // }

  return (
    <>
      <section className="m-4">
        <h1 className="m-4 text-2xl font-semibold">
          Detail Produk || CheckOut Product
        </h1>
        <h5 className="m-4">{productName}</h5>

        <label className="m-4">
          Jumlah Pembelian <br />
          <input
            className="m-4 border-blue-800"
            type="number"
            onChange={(event) => setTotalProduct(event.target.value)}
            value={totalProduct}
            placeholder="masukan jumlah"
          ></input>
        </label>
        <br />
        <label className="m-4">
          {" "}
          nama penerima <br />
          <input
            className="m-4"
            type="text"
            onChange={(event) => setNamaPenerima(event.target.value)}
            value={namaPenerima}
            placeholder="masukan nama penerima"
          ></input>
        </label>
      </section>
    </>
  );
}
