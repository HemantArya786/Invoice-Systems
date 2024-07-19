/* eslint-disable */
import { useState } from "react";
import Menu from "../../Container/MenuSection/Menu";
const InvoicesPage = () => {
  let menuTheme = localStorage.getItem("themeColor") || "black";
  const [data, setData] = useState([
    {
      date: "23 May 2024",
      InvoiceNumber: "1324732127",
      Amount: "21,999.13",
      CustomerName: "Arnav Kukreja",
    },
    {
      date: "23 May 2024",
      InvoiceNumber: "1324732127",
      Amount: "21,999.13",
      CustomerName: "Arnav Kukreja",
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
        <section
          style={{
            display: "flex",
            backgroundColor: menuTheme,
            color: "white",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p style={{ fontSize: 20, padding: 0, margin: 3 }}>Date</p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p style={{ fontSize: 20, padding: 0, margin: 3 }}>Inv.Number</p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p style={{ fontSize: 20, padding: 0, margin: 3 }}>Amount(₹)</p>
          </div>
          <div
            style={{
              width: "100%",

              display: "flex",
              justifyContent: "center",
            }}
          >
            <p style={{ fontSize: 20, padding: 0, margin: 3 }}>Customer Name</p>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </section>
        <section style={{}}>
          {/* {JSON.stringify(data)} */}

          {data.map((item) => {
            return (
              <div
                style={{
                  marginTop: 1,
                  display: "flex",

                  justifyContent: " space-around",

                  border: "1px solid grey",
                }}
              >
                {/* <p>{JSON.stringify(item)}</p> */}
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <p>{item.date}</p>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <p>{item.InvoiceNumber}</p>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <p>{item.Amount}</p>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <p>{item.CustomerName}</p>
                </div>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <button
                      style={{
                        width: 150,
                        fontSize: 15,

                        fontWeight: "bold",
                        padding: 10,
                        backgroundColor: menuTheme,
                        color: "white",
                      }}
                    >
                      View PDF
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
};

export default InvoicesPage;
