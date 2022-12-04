import styled from "styled-components";
import { darkGray, butter, layout } from "../theme";
import Content from "../components/detail/Content";
import Index from "../components/detail/Index";

const Detail = () => {
  return (
    <Section>
      <Content />
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
