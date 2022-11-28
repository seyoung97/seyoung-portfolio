import { Route, Routes } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import Main from "./pages/Main";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
