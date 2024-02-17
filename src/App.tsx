import Form from "./components/Form";
import Submit from "./components/Submit";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-purple-400 flex items-center justify-center">
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/sub" element={<Submit />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
