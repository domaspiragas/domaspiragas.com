import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../utils/theme';

export const WorkDemoContainer = ({videoSrc, imgSrc, descriptionText, title}) => {
    const [expanded, setExpanded] = useState(false);
   return(
       <Container expanded={expanded}>
           <Title>
               {title}
               <ExpandButton onClick={() => setExpanded(!expanded)}>
                   {expanded ? 'Close Demo' : 'View Demo'}
                   <svg width={24} height={24} viewBox={'0 0 24 24'} style={{display: 'inline-block', verticalAlign: 'middle'}}>
                       <path d={expanded ? 'M7 14l5-5 5 5z' : 'M7 10l5 5 5-5z'} style={{fill: theme.colors.secondaryText, color: theme.colors.secondaryText}}/>
                   </svg>
               </ExpandButton>
           </Title>
           <Section>
                <ExampleImageContainer>
                    <Image src={imgSrc} width={384} height={384}/>
                </ExampleImageContainer>
               <PreCenter>
                   <Description>
                       {descriptionText}
                   </Description>
               </PreCenter>
           </Section>
           <Section>
               <video controls width={'768'} height={'432'} src={videoSrc}/>
           </Section>
       </Container>
   )
};

export default WorkDemoContainer;

const Image = styled.img`

`;

const PreCenter = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.secondary};
  max-height: ${props => props.expanded ? '946px' : '442px'};
  transition: max-height 250ms ease-in-out;
  width: 784px;
  box-shadow: 0 1px 5px 0 rgba(0,0,0,0.2), 0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12);
  border-radius: 4px;
  overflow: hidden;
`;

const Section = styled.div`
  display: flex;
  margin: 8px;
`;

const Description = styled.pre`
  margin: unset;
  font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 18px;
  letter-spacing: .5px;
  background-color: ${theme.colors.secondary};
  color: ${theme.colors.secondaryText};
  padding-left: 8px;
`;

const ExampleImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  outline: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
  color: ${theme.colors.secondaryText};
  font-weight: 700;
  text-align: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: .5px;
  padding: 8px;
  border-bottom: 1px solid ${theme.colors.primary};
  color: ${theme.colors.secondaryText};
`;