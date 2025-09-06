import "./App.css";
import GradientBlinds from "../ReactBits/GradientBlinds.jsx";
import axios from "axios";

function App() {
  const response = await axios.get('/test')
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
      </div>

      {/* Foreground Content */}
      <div className="flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">AI Resume Builder</h1>
        <p className="mt-2 text-lg">Build resumes with style & AI power 🚀</p>
      </div>
    </div>
  );
}

export default App;

        {/* <GradientBlinds
          gradientColors={["#FF9FFC", "#5227FF"]}
          angle={0}
          noise={0.3}
          blindCount={12}
          blindMinWidth={50}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="left"
          mixBlendMode="lighten"
        /> */}