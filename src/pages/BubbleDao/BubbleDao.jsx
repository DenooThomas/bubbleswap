import { flexColumn, flexRow } from 'assets/styling/flexer';
import React from 'react';
import styled from 'styled-components';
import bubble from 'assets/images/bubble.png';
import BubbleDaoImg from 'assets/images/BubbleDao/BubbleDao.png';
import { SubTitle, Text } from 'assets/styling/text';
import Wrapper from 'assets/styling/wrapper';
import device from 'assets/styling/breakpoints';
import { showElementDelayed } from 'assets/animations/animations';

function BubbleDao() {
  return (
    <StyledWrapper
      variants={showElementDelayed}
      initial="hidden"
      animate="visible"
    >
      <BubbleHeader>
        <DaoBubble src={BubbleDaoImg} alt="Bubble Dao header" />
        <BubbleRight src={bubble} alt="bubble" />
      </BubbleHeader>
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
    </StyledWrapper>
  );
}

export default BubbleDao;

const StyledWrapper = styled(Wrapper)`
    ${flexColumn('nowrap', 'flex-start', 'flex-start')};
`;

const BubbleHeader = styled.div`
    ${flexRow('nowrap', 'center', 'center')};
    position: relative;
    width: 100%;
    height: 45vh;

    @media ${device.mobile} {
      height: 30vh;
    }
`;

const DaoBubble = styled.img`
  z-index: 10;
  width: auto;

  @media ${device.tablet} {
    width: 90vw;
  }
`;

const BubbleRight = styled.img`
  position: absolute;
  right: -550px;
  transform: rotate(-15deg);

  @media ${device.tablet} {
    width: 100vw;
    right: -275px;
  }
`;

const StyledSubTitle = styled(SubTitle)`
    text-align: left;
    width: 60vw;
    font-size: 1.8rem;
    padding-bottom: 1.3rem;

    @media ${device.tablet} {
      width: 75%;
    }

    @media ${device.mobile} {
      width: 100%;
    }
`;

const TextCont = styled.div`
    ${flexRow('nowrap', 'center', 'center')};

    @media ${device.tablet} {
    ${flexColumn('nowrap', 'space-between', 'flex-start')};
  }
`;

const StyledText = styled(Text)`
    flex: 1;
    padding: 3rem;
    min-width: 26vw;

    @media ${device.tablet} {
      padding: 0;
      padding-bottom: 1.5rem;
  }
`;
