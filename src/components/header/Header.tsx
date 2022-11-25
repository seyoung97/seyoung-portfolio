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
  position: absolute;
  top: 0%;
  background-image: linear-gradient(
    to bottom,
    rgba(33, 32, 33, 1),
    rgba(33, 32, 33, 0)
  );

  h1 {
    margin: 3.5rem 10rem 3rem 5rem;
    font-size: 2rem;
    color: ${butter};
  }
  h2 {
    margin: 3.5rem 1rem 3rem 1rem;
    font-size: 1.3rem;
    color: ${butter};
  }
`;

export default Header;
