import "./Exercise4.css";

const Exercise4 = () => {
  const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  return (
    <>
      <h1
        style={{
          color: style_header.color,
          backgroundColor: style_header.backgroundColor,
          padding: style_header.padding,
          fontFamily: style_header.fontFamily,
        }}
      >
        I'm An H1 elements!
      </h1>
      <p className={"para"}>I am a paragraph</p>
      <a href="/">I am a link</a>
      <form>
        <input
          type="text"
          placeholder="I am an input field"
          style={{ marginTop: "10px" }}
        ></input>
        <button style={{ marginLeft: "5px" }}>Submit</button>
      </form>
      <img
        className="mb-4"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
        alt=""
        style={{ width: "350px", marginTop: "50px" }}
      ></img>
      <ul style={{ listStyle: "inside" }}>
        <li>List Item 1</li>
        <li>List Item 2</li>
        <li>List Item 3</li>
      </ul>
    </>
  );
};

export default Exercise4;