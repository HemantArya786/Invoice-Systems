import Menu from "../Container/MenuSection/Menu";

/* eslint-disable react/prop-types */
const Layout = (props) => {
  return (
    <div style={{ display: "flex", background: "#ececec" }}>
      <Menu />
      <main
        style={{
          width: "100%",
          padding: 50,
          maxHeight: "100vh",
          backgroundColor: "",
          overflow: "auto",
          fontFamily: "poppins",
          boxSizing: "border-box",
        }}
      >
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
