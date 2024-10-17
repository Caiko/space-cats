// Component for making a text/img or img/text section

export default function TextImg({
  image,
  headerOne,
  headerTwo,
  pText,
  imgPosition = "left",
  textPosition = "center", // Optional text possitioning
  backgroundColor = "transparent", // Optional bg color
  headerOneColor = "#580030", // Optional h1 color
  headerTwoColor = "#FF1935", // Optional h2 color
}) {
  const background = {
    // Inline styling is not a good practice, but I wanted to stick to vanilla code.
    backgroundColor: backgroundColor, // I would probably use styled-components or Tailwind otherwise
  };
  const headOne = {
    color: headerOneColor,
  };
  const headTwo = {
    color: headerTwoColor,
  };

  return (
    <div className="container" style={background}>
      {imgPosition === "left" && <img className="textimg" src={image} />}
      <section className={`textsection ${textPosition}`}>
        <div className="headings">
          <h1 className="header1" style={headOne}>
            {headerOne}
          </h1>
          <h2 className="header2" style={headTwo}>
            {headerTwo}
          </h2>
        </div>
        <p className="ptext">{pText}</p>
      </section>
      {imgPosition === "right" && <img className="textimg" src={image} />}
    </div>
  );
}

// Possible alternative approaches
// <div className={`container ${imgPosition === "right" ? "reverse" : ""}`}> + CSS with flex-direction: row-reverse;
// useState()
