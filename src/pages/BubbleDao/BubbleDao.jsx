import { flexColumn, flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components';
import bubble from 'assets/images/bubble.png';

function BubbleDao() {
  return (
    <Wrapper>
      <BubbleTitle />
      <SubTitle>
        We believe that the Bubble organization can achieve great success through
        a DAO governance model.
      </SubTitle>
      <TextCont>
        <Text>
          This structure will allow for transparent and decentralized decision-making,
          as well as efficient project development. By involving our community in governance,
          we can tap into the collective wisdom and experience of our members.
        </Text>
        <Text>
          In addition, this governance model will align the interests of our community with those
          of the organization, promoting sustainable growth. We believe that crypto businesses can
          benefit greatly from DAO governance, and we are excited to pioneer this new model
          within our organization.
        </Text>
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
`;

const BubbleTitle = styled.div`
    width: 700px;
    height: 400px;
    background-color: red;
    margin-bottom: 1.5rem;
    background: rgba(255, 255, 255, 0.08);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
`;

const SubTitle = styled.h2`
    width: 575px;
    font-size: 1.8rem;
`;

const TextCont = styled.div`
    ${flexRow('nowrap', 'center', 'center')};
`;

const Text = styled.p`
    flex-basis: 50%;
    padding: 5rem;
    font-size: 0.9rem;
`;

const BubbleRight = styled.img`
  position: absolute;
  top: -200px;
  right: -550px;
  transform: rotate(-15deg);
  z-index: 1;
`;
