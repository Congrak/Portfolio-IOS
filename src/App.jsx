import { Background } from "./Components/Backgrund";
import { Dock } from "./Components/Dock";
import { Folders } from "./Components/Folders";
import { Nav } from "./Components/Navbar";

function App() {
  
  return (
    <>
      <div className="bg-black h-screen w-screen text-center relative overflow-hidden font-Apple font-custom">
        <div className="z-40 relative text-white text-xs">
          <Nav />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <Background />
        </div>
        <Folders />
        <div className="fixed bottom-0 left-0 right-0 pb-4 flex justify-center z-40">
          <Dock />
        </div>
      </div>
    </>
  );
}

export default App;
