import { Link } from "react-router-dom";

function Menu() {
  let menuTheme = localStorage.getItem("themeColor") || "black";

  return (
    <div
      style={{
        height: "100vh",
        width: "15%",
        paddingTop: "5px",
        backgroundColor: menuTheme,
        color: "white",
        display: "flex",
        flexDirection: "column",

        alignItems: "center",
      }}
    >
      <div style={{ fontFamily: "poppins" }}>
        <section style={{ margin: 30 }}>
          <div style={{ display: "flex", gap: 5, padding: 10 }}>
            <p style={{ fontSize: "24px", padding: 0, margin: 0 }}>Invoicing</p>
            <p
              style={{
                fontSize: "24px",
                padding: 0,
                margin: 0,
                fontWeight: 10,
              }}
            >
              System
            </p>
          </div>
          <div>
            <p
              style={{
                color: "grey",
                padding: 0,

                paddingLeft: 10,
                margin: 0,
              }}
            >
              v1.5
            </p>
          </div>
        </section>
        <section
          style={{
            margin: 40,
            paddingLeft: 10,

            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <div>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/invoices"}
            >
              <p
                style={{
                  fontSize: 20,
                  padding: 2,
                  margin: 5,
                }}
              >
                Invoices
              </p>
            </Link>
          </div>
          <div>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/recepients"}
            >
              <p style={{ fontSize: 20, padding: 2, margin: 5 }}> Recepients</p>
            </Link>
          </div>
          <div>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={"/settings"}
            >
              <p style={{ fontSize: 20, padding: 2, margin: 5 }}>Settings</p>
            </Link>
          </div>
        </section>

        <section style={{ display: "flex", justifyContent: "center" }}>
          <Link to={"/createInvoices"}>
            <button
              style={{
                height: "40px",
                width: "200px",
                fontSize: "20px",
                border: "1px solid white",
                backgroundColor: menuTheme,
                color: "white",
              }}
            >
              Create
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}

export default Menu;
