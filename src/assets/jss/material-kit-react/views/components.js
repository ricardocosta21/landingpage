import { container } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  container,
  
  brand: {
    color: "#000000",
    textAlign: "center"
  },
  title: {
    fontSize: "3rem",
    fontWeight: "600",
    display: "inline-block",
    position: "center"
  },
  subtitle: {
    fontSize: "1rem"
    // maxWidth: "500px"
    // margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
   mainRight: {
    background: "#FFFFFF",
    textAlign: "right",
    position: "relative",
    zIndex: "2"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none"
  },

 image: {
   height: "auto",
  },
  
  containerSides: {
    height: "100%"
  },
  
  splitLeft: {
    height: "100%",
    width: "60%",
    position: "fixed",    
    float: "left",
    top: "0",
    left: "0",
    background: "#ffffff"
  },

  splitRight: {
    height: "100%",
    width: "50%",
    position: "fixed",
    float: "right",
    right: "0",
    background: "#ffffff"
  },

/* If you want the content centered horizontally and vertically */
centered: {
  // transform: translate(-50%, -50%),
  float: "center",
},


  textCenter: {
    textAlign: "center"
  }
};

export default componentsStyle;
