import { Route, Routes } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main";
import Header from "./components/header/Header";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
