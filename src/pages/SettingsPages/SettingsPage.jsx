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
                color: "",
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
            flexWrap: "wrap",
            gap: 50,
          }}
        >
          <div style={{ width: "400px" }}>
            <CustomInput
              title="NAME"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "400px" }}>
            <CustomInput
              title="EMAIL"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "400px" }}>
            <CustomInput
              title="PHONE NUMBER "
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "400px" }}>
            <CustomInput
              title="PASSWORD"
              onChange={(e) => console.log(e.target.value)}
            />
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
            flexWrap: "wrap",
            gap: 50,
          }}
        >
          <div style={{ width: "400px" }}>
            <CustomInput
              title="COMPANY NAME"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "400px" }}>
            <CustomInput
              title="CIN"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "400px" }}>
            <CustomInput
              title="COMPANY ADDRESS"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "400px" }}>
            <CustomInput
              title="PAN"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "400px" }}>
            <CustomInput
              title="COMPANY EMAIL"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "400px" }}>
            <CustomInput
              title="GSTIN"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "400px" }}>
            <CustomInput
              title="COMPANY PHONE"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "400px" }}>
            <CustomInput
              title="BANK NAME"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "400px" }}>
            <CustomInput
              title="INDUSTRY "
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "400px" }}>
            <CustomInput
              title="BANK A/C NO."
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "400px" }}>
            <CustomInput
              title="STATE"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "400px" }}>
            <CustomInput
              title="IFSC CODE"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div style={{ width: "400px" }}></div>
          <div style={{ width: "400px" }}>
            <CustomInput
              title="BRANCH"
              onChange={(e) => console.log(e.target.value)}
            />
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
