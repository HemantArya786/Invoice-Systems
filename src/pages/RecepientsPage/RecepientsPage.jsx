import { useState } from "react";
import Menu from "../../Container/MenuSection/Menu";

export default function Recepients() {
  let menuTheme = localStorage.getItem("themeColor") || "black";
  const [data, setData] = useState([
    {
      date: "23 May 2024",
      InvoiceNumber: "1324732127",
      Amount: "21,999.13",
      CustomerName: "Arnav Kukreja",
      CustomerBillingAddress: "13, Neeti Bagh, Delhi",
      CustomerGSTIN: "209KLN34JGBKJ",
      PlaceofSupply: "DELHI (21)",
    },
  ]);
  return (
    <div style={{ display: "flex" }}>
      <main
        style={{
          margin: 50,
          width: "100vw",

          fontFamily: "poppins",
        }}
      >
        <section style={{ marginBottom: 20 }}>
          <input
            style={{
              width: "40%",
              height: 30,
              fontSize: "24px",
              border: " 1px solid grey",
            }}
            placeholder="search "
          />
        </section>
        <div
          style={{
            display: "flex",
            backgroundColor: menuTheme,
            color: "white",
            fontSize: "20px",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div>
            <p>Customer Name</p>
          </div>
          <div>
            <p>Customer Billing Address</p>
          </div>
          <div>
            <p>Customer GSTIN</p>
          </div>
          <div>
            <p>Place of Supply</p>
          </div>
        </div>
        <div style={{}}>
          {data.map((item) => {
            return (
              // eslint-disable-next-line react/jsx-key
              <div
                style={{
                  display: "flex",
                  justifyContent: " space-around",
                  border: "2px solid grey",
                }}
                key={JSON.stringify(item)}
              >
                <p>{item.CustomerName}</p>

                <p>{item.CustomerBillingAddress}</p>
                <p>{item.CustomerGSTIN}</p>
                <p>{item.PlaceofSupply}</p>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
