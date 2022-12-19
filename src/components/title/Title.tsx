import styled from "styled-components";
import { butter } from "../../theme";

interface TitleProps {
  content: string;
}

const Title = ({ content }: TitleProps) => {
  return <StyledTitle>{content}</StyledTitle>;
};

const StyledTitle = styled.div`
  margin-top: 80px;
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  color: ${butter};
`;

export default Title;
