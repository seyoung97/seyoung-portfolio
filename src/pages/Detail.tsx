import styled from "styled-components";
import { darkGray, butter, layout } from "../theme";
import Content from "../components/detail/Content";
import Index from "../components/detail/Index";
import { ProjectsListData } from "../interface";

interface DetailProps {
  projectsData: ProjectsListData;
}

const Detail = ({ projectsData }: DetailProps) => {
  return (
    <Section>
      <Content projectData={projectsData.projects_list[1]} />
      <Index />
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
