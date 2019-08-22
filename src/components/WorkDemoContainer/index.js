import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../utils/theme';

export const WorkDemoContainer = ({videoSrc, imgSrc, descriptionText}) => {
    const [expanded, setExpanded] = useState(false);
   return(
       <Container expanded={expanded}>
           <Section>
                <ExampleImageContainer>
                    <img src={'src/resources/PageUnderConstruction.png'} width={384} height={384}/>
                    <ExpandButton onClick={() => setExpanded(!expanded)}>
                        Click Here To See Demo
                    </ExpandButton>
                </ExampleImageContainer>
               <Description>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
               </Description>
           </Section>
           <Section>
               <video controls width={'768'} height={'432'} src={'src/resources/CollapsibleQuotaView.mp4'}/>
           </Section>
       </Container>
   )
};

export default WorkDemoContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.secondary};
  max-height: ${props => props.expanded ? '904px' : '408px'};
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

const Description = styled.p`
  margin: unset;
  font-size: 18px;
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
`;