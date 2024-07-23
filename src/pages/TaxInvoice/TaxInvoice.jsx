// eslint.config.js
import { useState } from "react";
import CustomerKeyValues from "../../components/CustomerKeyValues";

function TaxInvoice() {
  const [data, setData] = useState([
    {
      CIN: "R0239583409UOJBDS2",
      PAN: "OIHSDU3RRRL9",
      GSTIN: "13ULUSD0212473990Z",
      State: "Delhi",
      InvoiceDate: "13 May 2020",
      InvoiceNo: "RUHI/20-21/R1321",
    },
  ]);
  const [dataTwo, setDataTwo] = useState([
    {
      CustomerName: "INFINITY PRIVATE LTD",
      CustomerGSTIN: "RLERIL234NMBF99",
      PlaceofSupply: "Karnataka (27)",
      CustomerBillingAddress: "Varsha Apartments Indira Nagar Bangalore",
      ReverseChargeApplicable: "NIL",
    },
  ]);
  const [dataThree, setDataThree] = useState([
    {
      BankName: "R0239583409UOJBDS2",
      BankAcNo: "OIHSDU3RRRL9",
      IFSCCode: "13ULUSD0212473990Z",

      Branch: "Delhi",
      TAXABLEAMOUNT: "₹10000",
      TOTALTAX: "₹1800",
      INVOICETOTAL: "₹11800",
    },
  ]);

  return (
    <div>
      <section
        className=""
        style={{
          fontFamily: "Poppins",
          display: "flex",
          backgroundColor: "white",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img
            style={{ width: 100 }}
            src="https://img.freepik.com/free-vector/butterfly-logo-colorful-gradient-illustrations_483537-972.jpg?t=st=1721451096~exp=1721454696~hmac=1b5793f9b611229ac8d4a86eb87ffb9be555bdf79c78287421f704147edb3e3e&w=826"
          />
        </div>
        <div
          style={{
            display: "flex",

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
              ASPEK India Private Limited
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "end",
            }}
          >
            <p style={{ margin: 0 }}>EMAIL: abc@abcdef.com</p>
            <p style={{ margin: 0 }}>TEL: 9321039458</p>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "white", paddingTop: 50 }}>
        {data.map((item, idx) => {
          return (
            <div key={idx} className="" style={{ display: "flex" }}>
              <div style={{ width: "50%" }}>
                <CustomerKeyValues KeyTitle={"CIN"} keyValue={item.CIN} />
                <CustomerKeyValues KeyTitle={"PAN"} keyValue={item.GSTIN} />
                <CustomerKeyValues
                  KeyTitle={"Invoice No"}
                  keyValue={item.InvoiceNo}
                />
                <CustomerKeyValues KeyTitle={"State"} keyValue={item.State} />
              </div>
              <div style={{ width: "50%" }}>
                <CustomerKeyValues
                  KeyTitle={"Invoice Date"}
                  keyValue={item.InvoiceDate}
                />
                <CustomerKeyValues KeyTitle={"PAN"} keyValue={item.PAN} />
              </div>
            </div>
          );
        })}
      </section>
      <section style={{ backgroundColor: "white", paddingTop: 50 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            background: "white",

            borderTop: "2px solid black",
            borderBottom: "2px solid black",
          }}
        >
          <p
            style={{
              fontSize: 40,
              fontWeight: 600,
              margin: 0,
            }}
          >
            TAX INVOICE
          </p>
        </div>
        <div>
          {dataTwo.map((item, idx) => {
            return (
              <div key={idx} className="" style={{ display: "flex" }}>
                <div style={{ width: "50%" }}>
                  <CustomerKeyValues
                    KeyTitle={"Customer Name"}
                    keyValue={item.CustomerName}
                  />
                  <CustomerKeyValues
                    KeyTitle={"Custome rGSTIN"}
                    keyValue={item.CustomerGSTIN}
                  />
                  <CustomerKeyValues
                    KeyTitle={"Place of Supply"}
                    keyValue={item.PlaceofSupply}
                  />
                </div>
                <div style={{ width: "50%" }}>
                  <CustomerKeyValues
                    KeyTitle={"Customer Billing Address"}
                    keyValue={item.CustomerBillingAddress}
                  />
                  <CustomerKeyValues
                    KeyTitle={"Reverse Charge Applicable"}
                    keyValue={item.ReverseChargeApplicable}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section></section>

      <section style={{ backgroundColor: "white", paddingTop: 50 }}>
        <div>
          {dataThree.map((item, idx) => {
            return (
              <div key={idx} className="" style={{ display: "flex" }}>
                <div style={{ width: "50%" }}>
                  <CustomerKeyValues
                    KeyTitle={"Customer Name"}
                    keyValue={item.CustomerName}
                  />
                  <CustomerKeyValues
                    KeyTitle={"Custome rGSTIN"}
                    keyValue={item.CustomerGSTIN}
                  />
                  <CustomerKeyValues
                    KeyTitle={"Place of Supply"}
                    keyValue={item.PlaceofSupply}
                  />
                </div>
                <div style={{ width: "50%" }}>
                  <CustomerKeyValues
                    KeyTitle={"Bank A/c No."}
                    keyValue={item.CustomerBillingAddress}
                  />
                  <CustomerKeyValues
                    KeyTitle={"Reverse Charge Applicable"}
                    keyValue={item.ReverseChargeApplicable}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <div>
          <p>Regd Office: C-1/46, Krishan Vihar, New Delhi-110086</p>
        </div>
      </section>
    </div>
  );
}

export default TaxInvoice;
