import styled from "styled-components";
import { darkGray, butter } from "../../theme";

const Category = () => {
  return (
    <Ul>
      <li>Self Introduction</li>
      <li>Tech Stack</li>
      <li>Education</li>
      <li>Work Experience</li>
    </Ul>
  );
};

const Ul = styled.ul`
  display: flex;
  width: 100%;
  li {
    width: 25%;
    padding: 20px 0px;
    text-align: center;
    border: 1px solid ${butter};
    font-size: 1.5rem;
    color: ${butter};
  }
`;

export default Category;
