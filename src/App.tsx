import { useState } from "react"
import reactLogo from "./assets/react.svg"
import ReactPlayer from "react-player"

function App() {
   return (
      <div
         className="App"
         style={{
            height: "100vh",
            width: "100vw",
            background: "transparent",
            display: "flex",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "center",
         }}
      >
         <video
            style={{
               objectFit: "cover",
               height: "100%",
               width: "100%",
            }}
            src={"/vid/jeff.mp4"}
            muted
            loop
            autoPlay
            className="bgvid"
         ></video>
      </div>
   )
}

export default App
