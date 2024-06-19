import { lazy, Suspense } from "react";
import Main from "./screens/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Header = lazy(() => import("./components/Header"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube"></div>
          <div className="sk-cube2 sk-cube"></div>
          <div className="sk-cube4 sk-cube"></div>
          <div className="sk-cube3 sk-cube"></div>
        </div>
      }
    >
      <div className="container mx-auto my-10 bg-black App max-w-screen-1g">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/react" element={<Main />}></Route>
            <Route path="/gitactionCICD" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
