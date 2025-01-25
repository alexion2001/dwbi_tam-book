import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const CardTitle = styled.h2`
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0.5px;
  padding: 0 18px 0 18px;
`;
const DecorImage = styled.img`
  width: 30px;
  height: auto;
`;

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <TitleContainer>
      <DecorImage
        src="https://www.dominos-pizza.ro/images/decor_elem_left_red.svg"
        alt="Left Decoration"
      />
      <CardTitle>{title}</CardTitle>
      <DecorImage
        src="https://www.dominos-pizza.ro/images/decor_elem_right_red.svg"
        alt="Right Decoration"
      />
    </TitleContainer>
  );
};

export default Title;
