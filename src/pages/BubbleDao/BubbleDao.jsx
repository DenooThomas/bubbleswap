import { flexColumn, flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components';
import bubble from 'assets/images/bubble.png';
import BubbleDaoImg from 'assets/images/BubbleDao.png';
import { SubTitle, Text } from 'assets/styling/text';

function BubbleDao() {
  return (
    <Wrapper>
      <BubbleTitle>
        <img src={BubbleDaoImg} alt="Bubble Dao header" />
      </BubbleTitle>
      <StyledSubTitle>
        We believe that the Bubble organization can achieve great success through
        a DAO governance model.
      </StyledSubTitle>
      <TextCont>
        <StyledText>
          This structure will allow for transparent and decentralized decision-making,
          as well as efficient project development. By involving our community in governance,
          we can tap into the collective wisdom and experience of our members.
        </StyledText>
        <StyledText>
          In addition, this governance model will align the interests of our community with those
          of the organization, promoting sustainable growth. We believe that crypto businesses can
          benefit greatly from DAO governance, and we are excited to pioneer this new model
          within our organization.
        </StyledText>
      </TextCont>
      <BubbleRight src={bubble} alt="bubble" />
    </Wrapper>
  );
}

export default BubbleDao;

const Wrapper = styled.div`
    ${flexColumn('nowrap', 'flex-start', 'flex-start')};
    height: 100vh;
    position: relative;
    padding: 0 5rem;
    margin-bottom: 6rem;
`;

const BubbleTitle = styled.div`
    ${flexRow('nowrap', 'flex-end', 'center')};
    z-index: 2;
    width: 100%;
    height: 400px;
    padding-right: 150px;
    margin-top: -4rem;
    margin-bottom: 1.5rem;
`;

const StyledSubTitle = styled(SubTitle)`
    width: 575px;
    font-size: 1.8rem;
`;

const TextCont = styled.div`
    ${flexRow('nowrap', 'center', 'center')};
`;

const StyledText = styled(Text)`
    flex-basis: 50%;
    padding: 3rem;
    padding-left: 2rem;
    padding-right: 6rem;
`;

const BubbleRight = styled.img`
  position: absolute;
  top: -200px;
  right: -550px;
  transform: rotate(-15deg);
  z-index: 1;
`;
