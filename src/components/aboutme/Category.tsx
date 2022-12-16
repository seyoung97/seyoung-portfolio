import styled from "styled-components";
import { darkGray, butter } from "../../theme";

interface CategoryProps {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Category = ({ setCategory, category }: CategoryProps) => {
  return (
    <Ul>
      <li
        className={category === "selfIntroduction" ? "after" : "before"}
        onClick={() => setCategory("selfIntroduction")}
      >
        Self Introduction
      </li>
      <li
        className={category === "techStack" ? "after" : "before"}
        onClick={() => setCategory("techStack")}
      >
        Tech Stack
      </li>
      <li
        className={category === "education" ? "after" : "before"}
        onClick={() => setCategory("education")}
      >
        Education
      </li>
      <li
        className={category === "workExperience" ? "after" : "before"}
        onClick={() => setCategory("workExperience")}
      >
        Work Experience
      </li>
    </Ul>
  );
};

const Ul = styled.ul`
  display: flex;
  width: 100%;
  .before {
    width: 25%;
    padding: 20px 0px;
    text-align: center;
    border: 1px solid ${butter};
    font-size: 1.2rem;
    color: ${butter};
    cursor: pointer;
  }
  .after {
    width: 25%;
    padding: 20px 0px;
    text-align: center;
    border: 1px solid ${butter};
    font-size: 1.2rem;
    font-weight: bold;
    color: ${darkGray};
    background-color: ${butter};
    cursor: pointer;
  }
  @media (max-width: 1520px) {
    li.before {
      padding: 12px 0px;
      font-size: 1.1rem;
    }
    li.after {
      padding: 12px 0px;
      font-size: 1.1rem;
    }
  }
`;

export default Category;
