import React from "react"

function App() {
   const ref1 = React.useRef<any>()
   const [showJeff, setshowJeff] = React.useState<Boolean>(false)

   const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
   const handlePlay = () => {
      ref1.current.play()
      if (!isMobile) {
         ref1.current.requestFullscreen()
      }
      setshowJeff(true)
   }

   console.log("test")
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
            position: "relative",
         }}
      >
         <video
            id="vid"
            ref={ref1}
            style={{
               pointerEvents: "none",
               position: "fixed",
               right: 0,
               bottom: 0,
               minWidth: "100vh",
               minHeight: "100vw",
               display: showJeff ? "block" : "none",
               objectFit: "cover",
            }}
            src={"/vid/jeff.mp4"}
            loop
            autoPlay
            className="bgvid"
         ></video>

         {!showJeff && (
            <div className="bubble" onClick={handlePlay}>
               <div className="clickMe"></div>
            </div>
         )}
      </div>
   )
}

export default App
