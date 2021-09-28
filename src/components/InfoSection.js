import React from "react";
import styled from "styled-components";
import { Button } from "./Button";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem 0rem;
`;

const Container = styled.div`
  padding: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 800px;

  @media screen and (max-width: 768px) {
    /* flex-direction: column-reverse;
    display: flex; */
    padding: 1.5rem 3rem;
    grid-template-columns: 1fr;
    grid-template-rows: 300px;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '2' : '1')};

  h1 {
    margin: 1rem 0rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }
  p {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 768px) {
    order: 2;
  }
`;
const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  order: ${({ reverse }) => (reverse ? '1' : '2')};

  @media screen and (max-width: 768px) {
    order: 1;
    padding: 0rem 2rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 100%;
    }
  }
`;


const InfoSection = ({ sections }) => {
  
  return (
    <Section>
      {sections.map((section, index) => {
        return (
          <Container key={index} >
            <ColumnLeft reverse={section.reverse}>
              <h1>{section.heading}</h1>
              <p>{section.content}</p>
              <p>{section.paragraph}</p>
              <Button to="/homes" primary="true">
                {section.buttonLabel}
              </Button>
            </ColumnLeft>
            <ColumnRight reverse={section.reverse}>
              <img src={section.image} alt="home" />
            </ColumnRight>
          </Container>
        );
      })}
    </Section>
  );
};

export default InfoSection;
