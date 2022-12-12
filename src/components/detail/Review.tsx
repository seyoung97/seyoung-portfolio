import styled from "styled-components";
import { darkGray, paragraphFontSize, explainWidth } from "../../theme";
import { ContentPropsType } from "../../interface";

const Review = ({ Data }: ContentPropsType) => {
  return (
    <ReviewSection>
      <h2 id="project_review">느낀점</h2>
      {Data.review.map((review) => {
        return (
          <>
            <h3 id={review.sub_titile}>{review.sub_titile}</h3>
            <ul>
              {review.explain.map((paragraph, i) => {
                return <li key={i}>{paragraph}</li>;
              })}
            </ul>
          </>
        );
      })}
    </ReviewSection>
  );
};

const ReviewSection = styled.section`
  ul {
    width: ${explainWidth};
    margin: 20px 0px 0px 25px;
    li {
      margin-bottom: 20px;
      font-size: ${paragraphFontSize};
    }
  }
`;

export default Review;
