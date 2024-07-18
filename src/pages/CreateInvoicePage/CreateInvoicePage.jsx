import { useState } from "react";
import Menu from "../../Container/MenuSection/Menu";

export default function CreateInvoice() {
  const [itemData, setItemData] = useState([
    {
      ItemDescription: "mobile",
      SacCode: "33564",
      TaxableValue: "20,000",
    },
  ]);
  return (
    <div style={{ fontFamily: "poppins" }}>
      <section className="CreateInvoiceSection">
        <div>
          <p
            style={{ fontSize: 40, fontWeight: 600, margin: 0, color: "black" }}
          >
            Create Invoice
          </p>
        </div>
        <div>
          <p style={{ color: "grey", margin: 0 }}>Enter your detail below</p>
        </div>
        <div
          style={{ display: "flex", gap: 10, marginTop: 40, marginBottom: 40 }}
        >
          <div>
            <button
              style={{
                width: "200px",
                height: "40px",
                fontSize: 15,
                padding: 10,
                fontWeight: 700,
                border: "1px solid black",
                backgroundColor: "white",
                color: "black",
              }}
            >
              New Customer
            </button>
          </div>
          <div>
            <button
              style={{
                width: "200px",
                height: "40px",
                fontSize: 15,
                padding: 10,
                fontWeight: 300,
                border: "1px solid white",
                backgroundColor: "black",
                color: "white",
              }}
            >
              Existing Customer
            </button>
          </div>
        </div>
      </section>

      <section className="DetailSector" style={{ marginTop: 10 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <p style={{ fontSize: 20, padding: 5, margin: 0 }}>DETIALS</p>
        </div>
        <div style={{ margin: 50, display: "flex", flexWrap: "wrap" }}>
          <div>
            <input
              placeholder="CUSTOMER NAME"
              style={{
                borderBottom: "none",
                borderLeft: "none",
                borderRight: "none",
              }}
            />
          </div>
        </div>
      </section>
      <section className="ItemSector">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <p style={{ fontSize: 20, padding: 5, margin: 0 }}>ITEMS</p>
        </div>
        <div style={{ display: "flex", gap: 20 }}>
          <div>
            {itemData.map((item) => {
              <p style={{ borderBottom: "2px solid black" }}>
                {item.ItemDescription}
              </p>;
            })}
            <p>ITEM DESCRIPTION</p>
          </div>
          <div>
            {itemData.map((item) => {
              <p style={{ borderBottom: "2px solid black" }}>
                {item.ItemDescription}
              </p>;
            })}
            <p>SAC CODE</p>
          </div>
          <div>
            {itemData.map((item) => {
              <p style={{ borderBottom: "2px solid black" }}>
                {item.ItemDescription}
              </p>;
            })}
            <p>TAXABLE VALUE</p>
          </div>
          <div>
            <p>₹900</p>
            <p>CGST (%)</p>
          </div>
          <div>
            <p>₹900</p>
            <p>CGST (%)</p>
          </div>
          <div>
            <p>₹11800</p>
            <p>TOTAL VALUE</p>
          </div>
        </div>
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              width: "200px",
              height: "40px",
              fontSize: 15,
              padding: 10,
              fontWeight: 700,
              border: "1px solid black",
              backgroundColor: "black",
              color: "white",
            }}
          >
            ADD ITEMS
          </button>
        </div>
      </section>
      <section className="PreviewSection" style={{ marginTop: 40 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <p style={{ fontSize: 20, padding: 5, margin: 0 }}>PREVIEW</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            <p>TAXABLE AMOUNT</p> <p>₹40000</p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <p>TOTAL TAX</p> <p>₹7200</p>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <p>INVOICE TOTAL</p> <p>₹47000</p>
          </div>
        </div>
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              width: "200px",
              height: "40px",
              fontSize: 15,
              padding: 10,
              fontWeight: 700,
              border: "1px solid black",
              backgroundColor: "black",
              color: "white",
            }}
          >
            CREATE INVOICE
          </button>
        </div>
      </section>
    </div>
  );
}
