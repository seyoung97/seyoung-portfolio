import { useMemo } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";

import ProjectsList from "./assets/data/projectsList.json";
import { ProjectsListData } from "./interface";

import Main from "./pages/Main";
import Header from "./components/header/Header";
import Detail from "./pages/Detail";

function App() {
  const projectsData: ProjectsListData = useMemo(() => ProjectsList, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main projectsData={projectsData} />} />
        <Route
          path="/detail"
          element={<Detail projectsData={projectsData} />}
        />
      </Routes>
    </>
  );
}

export default App;
