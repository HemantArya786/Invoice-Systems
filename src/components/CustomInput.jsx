// eslint-disable-next-line react/prop-types
const CustomInput = ({ title, onChange }) => {
  return (
    <div>
      <p style={{ margin: 0, padding: 0 }}>{title}</p>
      <input
        onChange={onChange}
        style={{
          borderWidth: "0px 0px 2px 0px",
          width: "100%",
          height: 30,
          fontSize: "24px",
        }}
      />
    </div>
  );
};

export default CustomInput;
