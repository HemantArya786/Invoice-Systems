import { useState } from "react";
import "../../pages/SettingsPages/SettingsPage.css";
import CustomInput from "../../components/CustomInput";

function SettingsPage() {
  const [themeColor, setthemeColor] = useState({
    colorName: "#5052E2",
    colorName2: "#129A98",
    colorName3: "#FF5653",
    colorName4: "#000000",
    colorName5: "#FFC430",
  });

  return (
    <div>
      <section
        className="settingPage-colortheme"
        style={{
          display: "flex",
          backgroundColor: "white",
          flexDirection: "column",
          paddingLeft: 300,
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: 50,
            marginBottom: 50,
            flexDirection: "column",
          }}
        >
          <div>
            <p
              style={{
                fontSize: 40,
                fontWeight: 600,
                margin: 0,
                color: "black",
              }}
            >
              Color Theming
            </p>
          </div>
          <div>
            <p style={{ color: "grey", margin: 0 }}>
              Select your preferred color theming for invoices.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            marginBottom: 60,
            gap: 70,
          }}
        >
          <div>
            <button
              style={{
                width: 84,
                height: 84,
                border: "none",
                backgroundColor: themeColor.colorName,
                borderRadius: 50,
              }}
              onClick={() => {
                localStorage.setItem("themeColor", themeColor.colorName);
                setTimeout(() => {
                  window.location.reload();
                }, 500);
              }}
            ></button>
          </div>
          <div>
            <button
              style={{
                width: 84,
                height: 84,
                border: "none",
                backgroundColor: themeColor.colorName2,
                borderRadius: 50,
              }}
              onClick={() => {
                localStorage.setItem("themeColor", themeColor.colorName2);
                setTimeout(() => {
                  window.location.reload();
                }, 500);
              }}
            ></button>
          </div>
          <div>
            <button
              onClick={() => {
                localStorage.setItem("themeColor", themeColor.colorName3);
                setTimeout(() => {
                  window.location.reload();
                }, 500);
              }}
              style={{
                width: 84,
                height: 84,
                border: "none",
                backgroundColor: themeColor.colorName3,
                borderRadius: 50,
              }}
            ></button>
          </div>
          <div>
            <button
              onClick={() => {
                localStorage.setItem("themeColor", themeColor.colorName4);
                setTimeout(() => {
                  window.location.reload(), 500;
                });
              }}
              style={{
                width: 84,
                height: 84,
                border: "none",
                backgroundColor: themeColor.colorName4,
                borderRadius: 50,
              }}
            ></button>
          </div>
          <div>
            <button
              onClick={() => {
                localStorage.setItem("themeColor", themeColor.colorName5);
                setTimeout(() => {
                  window.location.reload();
                }, 500);
              }}
              style={{
                width: 84,
                height: 84,
                border: "none",
                backgroundColor: themeColor.colorName5,
                borderRadius: 50,
              }}
            ></button>
          </div>
        </div>
      </section>
      <section
        className="settingPage-colortheme"
        style={{
          marginTop: 40,

          display: "flex",
          paddingLeft: 300,
          backgroundColor: "white",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: 50,
            marginBottom: 50,
            flexDirection: "column",
          }}
        >
          <div>
            <p style={{ fontSize: 40, fontWeight: 600, margin: 0 }}>
              Account Details
            </p>
          </div>
          <div>
            <p style={{ color: "grey", margin: 0 }}>
              Edit your account details below.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            marginBottom: 50,

            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "",
              gap: 50,
            }}
          >
            <div style={{ width: "400px" }}>
              <input
                placeholder="NAME"
                style={{
                  borderTop: "1px sold grey",
                  width: "100%",
                  height: 30,
                  fontSize: "24px",
                }}
              />
            </div>
            <div style={{ width: "400px" }}>
              <input
                placeholder="EMAIL"
                style={{
                  borderTop: "1px sold grey",
                  width: "100%",
                  height: 30,
                  fontSize: "24px",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            marginBottom: 50,

            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "",
              gap: 50,
            }}
          >
            <div style={{ width: "400px" }}>
              <input
                placeholder="PHONE NUMBER "
                style={{
                  width: "100%",
                  height: 30,
                  fontSize: "24px",
                }}
              />
            </div>
            <div style={{ width: "400px" }}>
              <input
                placeholder="PASSWORD"
                style={{
                  width: "100%",
                  height: 30,
                  fontSize: "24px",
                }}
              />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", marginBottom: 50 }}>
          <div>
            <button
              style={{
                width: 870,
                fontSize: 15,

                fontWeight: "bold",
                padding: 10,
                backgroundColor: "black",
                color: "white",
              }}
            >
              DONE
            </button>
          </div>
        </div>
      </section>
      <section
        className="settingPage-colortheme"
        style={{
          marginTop: 40,

          display: "flex",
          paddingLeft: 300,
          backgroundColor: "white",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: 50,
            marginBottom: 50,
            flexDirection: "column",
          }}
        >
          <div>
            <p style={{ fontSize: 40, fontWeight: 600, margin: 0 }}>
              Company Details
            </p>
          </div>
          <div>
            <p style={{ color: "grey", margin: 0 }}>
              Edit your account details below.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            marginBottom: 50,

            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "",
              gap: 50,
            }}
          >
            <div style={{ width: "400px" }}>
              <input
                placeholder="NAME"
                style={{
                  borderTop: "1px sold grey",
                  width: "100%",
                  height: 30,
                  fontSize: "24px",
                }}
              />
            </div>
            <div style={{ width: "400px" }}>
              <CustomInput
                title="EMAIL"
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            marginBottom: 50,

            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "",
              gap: 50,
            }}
          >
            <div style={{ width: "400px" }}>
              <input
                placeholder="PHONE NUMBER "
                style={{
                  width: "100%",
                  height: 30,
                  fontSize: "24px",
                }}
              />
            </div>
            <div style={{ width: "400px" }}>
              <input
                placeholder="PASSWORD"
                style={{
                  width: "100%",
                  height: 30,
                  fontSize: "24px",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            marginBottom: 50,

            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "",
              gap: 50,
            }}
          >
            <div style={{ width: "400px" }}>
              <input
                placeholder="PHONE NUMBER "
                style={{
                  width: "100%",
                  height: 30,
                  fontSize: "24px",
                }}
              />
            </div>
            <div style={{ width: "400px" }}>
              <input
                placeholder="PASSWORD"
                style={{
                  width: "100%",
                  height: 30,
                  fontSize: "24px",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            marginBottom: 50,

            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "",
              gap: 50,
            }}
          >
            <div style={{ width: "400px" }}>
              <input
                placeholder="PHONE NUMBER "
                style={{
                  width: "100%",
                  height: 30,
                  fontSize: "24px",
                }}
              />
            </div>
            <div style={{ width: "400px" }}>
              <input
                placeholder="PASSWORD"
                style={{
                  width: "100%",
                  height: 30,
                  fontSize: "24px",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            marginBottom: 50,

            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "",
              gap: 50,
            }}
          >
            <div style={{ width: "400px" }}>
              <input
                placeholder=" "
                style={{
                  width: "100%",
                  height: 30,
                  fontSize: "24px",
                }}
              />
            </div>
            <div style={{ width: "400px" }}>
              <input
                placeholder="STATE"
                style={{
                  width: "100%",
                  height: 30,
                  fontSize: "24px",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            marginBottom: 50,

            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "",
              gap: 50,
            }}
          >
            <div style={{ width: "400px" }}>
              <input
                placeholder="BANK A/C NO. "
                style={{
                  width: "100%",
                  height: 30,
                  fontSize: "24px",
                }}
              />
            </div>
            <div style={{ width: "400px" }}>
              <input
                placeholder="STATE"
                style={{
                  width: "100%",
                  height: 30,
                  fontSize: "24px",
                }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            marginBottom: 50,

            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "",
              gap: 50,
            }}
          >
            <div style={{ width: "400px" }}>
              <input
                placeholder="IFSC CODE"
                style={{
                  width: "100%",
                  height: 30,
                  fontSize: "24px",
                }}
              />
            </div>
            <div style={{ width: "400px" }}>
              <input
                placeholder="BRANCH"
                style={{
                  width: "100%",
                  height: 30,
                  fontSize: "24px",
                }}
              />
            </div>
          </div>
        </div>
        <div style={{ display: "flex", marginBottom: 50 }}>
          <div>
            <button
              style={{
                width: 870,
                fontSize: 15,

                fontWeight: "bold",
                padding: 10,
                backgroundColor: "black",
                color: "white",
              }}
            >
              DONE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SettingsPage;
