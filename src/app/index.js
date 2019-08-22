import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import theme from '../utils/theme';
import WorkDemoContainer from '../components/WorkDemoContainer';

//<VideoPlayer controls width={'1200px'} height={'680px'} src={videoSrc}/>
//                    <div style={{display: 'flex', justifyContent: 'center'}}>
//                         <VideoPlayer controls width={'768'} height={'432'} src={'src/resources/CollapsibleQuotaView.mp4'}/>
//                     </div>

const App = props => {
    return (
        <>
            <ContentWrapper>
                <FlexColumn>
                    <MeSection>
                        <NameLabel>
                            Domas Piragas
                        </NameLabel>
                    </MeSection>
                    <Education>
                        <img width={'75px'} height={'70px'} src={'src/resources/UU.png'} />
                        <FlexColumn>
                            <SchoolLabel>
                                University of Utah
                            </SchoolLabel>
                            <SchoolCaption>
                                Bachelor of Science in Computer Science
                            </SchoolCaption>
                        </FlexColumn>
                    </Education>
                    <Work>
                        <WorkDemoFlexColumn>
                            <WorkContainerWrapper>
                                <WorkDemoContainer videoSrc={'src/resources/CollapsibleQuotaView.mp4'} descriptionText={'this is the video'}/>
                            </WorkContainerWrapper>
                            <WorkContainerWrapper>
                                <WorkDemoContainer videoSrc={'src/resources/CollapsibleQuotaView.mp4'} descriptionText={'this is the video'}/>
                            </WorkContainerWrapper>
                        </WorkDemoFlexColumn>
                        <WorkDemoFlexColumn>
                            <WorkContainerWrapper>
                                <WorkDemoContainer videoSrc={'src/resources/CollapsibleQuotaView.mp4'} descriptionText={'this is the video'}/>
                            </WorkContainerWrapper>
                            <WorkContainerWrapper>
                                <WorkDemoContainer videoSrc={'src/resources/CollapsibleQuotaView.mp4'} descriptionText={'this is the video'}/>
                            </WorkContainerWrapper>
                            <WorkContainerWrapper>
                                <WorkDemoContainer videoSrc={'src/resources/CollapsibleQuotaView.mp4'} descriptionText={'this is the video'}/>
                            </WorkContainerWrapper>
                        </WorkDemoFlexColumn>
                    </Work>
                </FlexColumn>
            </ContentWrapper>
        </>
    );
};
const MeSection = styled.div`
  background-color: ${theme.colors.primary};
  height: 500px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Education = styled.div`
  background-color:${theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
`;

const Work = styled.div`
  background-color: ${theme.colors.primary};
  height: 1000px;
  display: flex;
  justify-content: center;
`;

const WorkDemoFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const SchoolLabel = styled.div`
  font-size: 72px;
  color:${theme.colors.secondaryText};
  margin-left: 24px;
`;

const SchoolCaption = styled.div`
  font-size: 24px;
  color: #000;
  text-align: center;
`;

const NameLabel = styled.div`
  font-size: 72px;
  color: ${theme.colors.primaryText};
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const Button = styled.button`
  width: 200px;
  height: 200px;
`;

const WorkContainerWrapper = styled.div`
  margin: 4px;
`;

ReactDOM.render(<App />, document.getElementById('app'));

