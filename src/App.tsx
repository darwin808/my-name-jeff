import React from "react"

function App() {
   const ref1 = React.useRef<any>()
   const [showJeff, setshowJeff] = React.useState<Boolean>(false)

   const handlePlay = () => {
      ref1.current.play()
      // ref1.current.requestFullscreen()
      setshowJeff(true)
   }

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
               position: "fixed",
               right: 0,
               bottom: 0,
               minWidth: "100%",
               minHeight: "100%",
               display: showJeff ? "block" : "none",
            }}
            controls={false}
            src={"/vid/jeff.mp4"}
            loop
            // autoPlay
            className="bgvid"
            // muted={muted}
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
