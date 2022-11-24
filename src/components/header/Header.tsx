import styled from "styled-components";
import { darkGray, butter } from "../../theme";

const Header = () => {
  return (
    <Section>
      <h1>SeYoung</h1>
      <h2>About me</h2>
      <h2>Projects</h2>
      <h2>Internship</h2>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${darkGray};

  h1 {
    margin: 3.5rem 10rem 1rem 5rem;
    font-size: 2rem;
    color: ${butter};
  }
  h2 {
    margin: 3.5rem 1rem 1rem 1rem;
    font-size: 1.3rem;
    color: ${butter};
  }
`;

export default Header;
