import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import theme from '../utils/theme';
import {
    DATE_RANGE_PICKER_DESCRIPTION,
    SELF_CONFIG_DESCRIPTION,
    ONE_CLICK_MANAGER_JUDGMENT_DESCRIPTION,
    SNACKBAR_DESCRIPTION,
    COLLAPSIBLE_QUOTA_VIEW_DESCRIPTION,
    STAGE_PROGRESSION_DESCRIPTION
} from '../resources/descriptions';
import WorkDemoContainer from '../components/WorkDemoContainer';

const App = props => {
    return (
        <>
            <ContentWrapper>
                <FlexColumn>
                    <MeSection>
                        <NameWrapper>
                            <NameLabel>
                                Domas Piragas
                            </NameLabel>
                            <NameCaption>
                                Software Engineer
                            </NameCaption>
                            <SocialsWrapper>
                                <a href={'https://linkedin.com/in/domas-piragas/'}><img width={32} height={32} src={'src/resources/images/Linkedin-Dark-64px.png'}/></a>
                                <a href={'https://github.com/domaspiragas'}><img width={32} height={32} src={'src/resources/images/GitHub-Mark-64px.png'}/></a>
                            </SocialsWrapper>
                        </NameWrapper>
                    </MeSection>
                    <Education>
                        <img width={'75px'} height={'70px'} src={'src/resources/images/UU.png'} />
                        <FlexColumn>
                            <SchoolLabel>
                                Bachelor of Science in Computer Science
                            </SchoolLabel>
                            <SchoolCaption>
                                University of Utah
                            </SchoolCaption>
                        </FlexColumn>
                    </Education>
                    <Work>
                        <WorkDemoFlexColumn>
                            <WorkContainerWrapper>
                                <WorkDemoContainer title={'Custom Date Range Picker'} videoSrc={'DateRangePicker'} imgSrc={'DateRangePicker'} descriptionText={DATE_RANGE_PICKER_DESCRIPTION}/>
                            </WorkContainerWrapper>
                            <WorkContainerWrapper>
                                <WorkDemoContainer title={'Sales Forecasting Manager Judgment'} videoSrc={'OneClickManagerJudgment'} imgSrc={'OneClickManagerJudgment'} descriptionText={ONE_CLICK_MANAGER_JUDGMENT_DESCRIPTION}/>
                            </WorkContainerWrapper>
                            <WorkContainerWrapper>
                                <WorkDemoContainer title={'Collapsible Quota Visualization'} videoSrc={'CollapsibleQuotaView'} imgSrc={'CollapsibleQuotaView'} descriptionText={COLLAPSIBLE_QUOTA_VIEW_DESCRIPTION}/>
                            </WorkContainerWrapper>
                        </WorkDemoFlexColumn>
                        <WorkDemoFlexColumn>
                            <WorkContainerWrapper>
                                <WorkDemoContainer title={'Custom Grid Self Configuration'} videoSrc={'SelfConfig'} imgSrc={'SelfConfig'} descriptionText={SELF_CONFIG_DESCRIPTION}/>
                            </WorkContainerWrapper>
                            <WorkContainerWrapper>
                                <WorkDemoContainer title={'Snackbar Messages'} videoSrc={'Snackbar'} imgSrc={'Snackbar'} descriptionText={SNACKBAR_DESCRIPTION}/>
                            </WorkContainerWrapper>
                            <WorkContainerWrapper>
                                <WorkDemoContainer title={'Stage Progression Waterfall Chart'} videoSrc={'StageProgression'} imgSrc={'StageProgression'} descriptionText={STAGE_PROGRESSION_DESCRIPTION}/>
                            </WorkContainerWrapper>
                        </WorkDemoFlexColumn>
                    </Work>
                </FlexColumn>
            </ContentWrapper>
        </>
    );
};

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 72px;
  height: 32px;
`;

const MeSection = styled.div`
  background-color: ${theme.colors.primary};
  height: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
  display: flex;
  justify-content: center;
  padding: 12px 0;
`;

const WorkDemoFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const SchoolLabel = styled.div`
  font-size: 38px;
  letter-spacing: .5px;
  color:${theme.colors.secondaryText};
  margin-left: 24px;
`;

const SchoolCaption = styled.div`
  font-size: 24px;
  letter-spacing: .5px;
  color: ${theme.colors.secondaryText};
  text-align: center;
`;

const NameLabel = styled.div`
  font-size: 72px;
  letter-spacing: .5px;
  line-height: 72px;
  color: ${theme.colors.primaryText};

`;

const NameCaption = styled.div`
  font-size: 24px;
  letter-spacing: .5px;
  color: ${theme.colors.primaryText};
  margin-bottom: 4px;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

