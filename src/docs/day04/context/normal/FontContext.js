//  초기값
// createContext({})
import { createContext, useState } from "react";

export const FontSizeContext = createContext({
  state : {
    fontSize : "",
    color : "",
    width : "",
    height : ""
  },
  action : {
    setFontsize : () => {},
    setColor : () => {},
    setWidth : () => {},
    setHeight : () => {},
  }
})

// Provider 제공

const FontSizeProvider = ({children}) => {

  const [fontSize, setFontsize]= useState("1rem")
  const [color, setColor] = useState("black");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const value = {
    state : {
      fontSize,
      color,
      width,
      height 
    },
    action : {
      setFontsize,
      setColor,
      setWidth,
      setHeight,
    }
  }

  return (
    <FontSizeContext.Provider value={value}>
      {children}
    </FontSizeContext.Provider >
  )
}

export default FontSizeProvider;
