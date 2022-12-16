import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Header from 'layout/Header/Header';
import Wrapper from 'assets/styling/wrapper';
import { Title, SubTitle } from 'assets/styling/text';
import { flexColumn } from 'assets/styling/flexer';
import { glassBackground } from 'assets/styling/backgrounds';
import glassHover from 'assets/animations/glassHover';

function NotFound() {
  const { slug } = useParams();

  return (
    <>
      <Header />
      <StyledWrapper>
        <TextCont
          variants={glassHover}
          whileHover="hover"
        >
          <StyledTitle $center $large>{slug}</StyledTitle>
          <SubTitle $center>Under construction</SubTitle>
        </TextCont>
      </StyledWrapper>
    </>
  );
}

export default NotFound;

const StyledWrapper = styled(Wrapper)`
  ${flexColumn('nowrap', 'center', 'center')}
  height: 60vh;
`;

const StyledTitle = styled(Title)`
  text-transform: capitalize;
  margin-bottom: 0.5rem;
`;

const TextCont = styled(motion.div)`
  padding: 2rem 4rem;
  ${glassBackground}
`;
