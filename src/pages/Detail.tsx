import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import { darkGray, butter, layout } from "../theme";
import Content from "../components/detail/Content";
import Index from "../components/detail/Index";
import { ProjectsListData } from "../interface";

interface DetailProps {
  projectsData: ProjectsListData;
}

const Detail = ({ projectsData }: DetailProps) => {
  const params = useParams();
  const type = params.id.slice(0, 1);
  const detailId = parseInt(params.id.slice(1));

  let projectData = projectsData["projects_list"][detailId];

  if (type === "P") {
    projectData = projectsData["projects_list"][detailId];
  } else if (type === "I") {
    projectData = projectsData["internship_list"][detailId];
  }

  return (
    <Section>
      <Content projectData={projectData} />
      <Index indexData={projectData} />
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 150px;
  background-color: ${butter};
`;
export default Detail;
