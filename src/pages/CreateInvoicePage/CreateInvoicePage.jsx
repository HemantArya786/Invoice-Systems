import { useState } from "react";
import CustomInput from "../../components/CustomInput";
import "../../pages/CreateInvoicePage/CreateInvoicePage.css";

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

      <section className="DetailSector" style={{}}>
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
        <div
          style={{
            padding: 60,

            display: "flex",
            flexWrap: "wrap",
            gap: 50,
          }}
        >
          <div style={{ width: "400px" }}>
            <CustomInput
              title="CUSTOMER NAME"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "400px" }}>
            <CustomInput
              title="CUSTOMER BILLING ADDRESS"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "400px" }}>
            <CustomInput
              title="CUSTOMER GSTIN"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "400px" }}>
            <CustomInput
              title="PLACE OF SUPPLY"
              onChange={(e) => console.log(e.target.value)}
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
        <div style={{ display: "flex", gap: 50, margin: 50 }}>
          <div style={{ width: "400px" }}>
            <CustomInput
              title="ItemDescription"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "200px" }}>
            <CustomInput
              title="ItemDescription"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "200px" }}>
            <CustomInput
              title="ItemDescription"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>

          <div style={{ width: "150px", padding: 0 }}>
            <p style={{ padding: 0, margin: 0 }}>₹900</p>
            <p style={{ color: "grey" }}>CGST (%)</p>
          </div>
          <div style={{ width: "150px" }}>
            <p style={{ padding: 0, margin: 0 }}>₹900</p>
            <p style={{ color: "grey" }}>CGST (%)</p>
          </div>
          <div style={{ width: "200px" }}>
            <p style={{ padding: 0, margin: 0 }}>₹11800</p>
            <p style={{ color: "grey" }}>TOTAL VALUE</p>
          </div>
        </div>
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "",
          }}
        >
          <button
            style={{
              width: "200px",
              height: "40px",
              fontSize: 15,
              padding: 10,
              marginBottom: 50,
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
      <section className="PreviewSection" style={{ marginTop: "" }}>
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
            <p>INVOICE TOTAL</p> <p style={{}}>₹47000</p>
          </div>
        </div>
        <div className="" style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              width: "200px",
              height: "40px",
              fontSize: 15,
              padding: 10,
              marginBottom: 50,
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
