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
    STAGE_PROGRESSION_DESCRIPTION,
    ABOUT_DESCRIPTION
} from '../resources/descriptions';
import UU from '../resources/images/UU.png';
import Github from '../resources/images/GitHub-Mark-64px.png';
import LinkedIn from '../resources/images/Linkedin-Dark-64px.png'
import Me from '../resources/images/Me.png';
import DateRangePickerImg from '../resources/images/DateRangePicker.png';
import DateRangePickerVid from '../resources/videos/DateRangePicker.mp4';
import SelfConfigImg from '../resources/images/SelfConfig.png';
import SelfConfigVid from '../resources/videos/SelfConfig.mp4';
import OneClickManagerJudgmentImg from '../resources/images/OneClickManagerJudgment.png';
import OneClickManagerJudgmentVid from '../resources/videos/OneClickManagerJudgment.mp4';
import SnackbarImg from '../resources/images/Snackbar.png';
import SnackbarVid from '../resources/videos/Snackbar.mp4';
import CollapsibleQuotaViewImg from '../resources/images/CollapsibleQuotaView.png';
import CollapsibleQuotaViewVid from '../resources/videos/CollapsibleQuotaView.mp4';
import StageProgressionImg from '../resources/images/StageProgression.png';
import StageProgressionVid from '../resources/videos/StageProgression.mp4';

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
                                <a href={'https://linkedin.com/in/domas-piragas/'}><img width={32} height={32} src={LinkedIn}/></a>
                                <a href={'https://github.com/domaspiragas'}><img width={32} height={32} src={Github}/></a>
                            </SocialsWrapper>
                        </NameWrapper>
                    </MeSection>
                    <Education>
                        <img width={'75px'} height={'70px'} src={UU} />
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
                        <WorkDemoGrid>
                            <WorkDemoFlexColumn>
                                <WorkContainerWrapper>
                                    <WorkDemoContainer title={'Custom Date Range Picker'} videoSrc={DateRangePickerVid} imgSrc={DateRangePickerImg} descriptionText={DATE_RANGE_PICKER_DESCRIPTION}/>
                                </WorkContainerWrapper>
                                <WorkContainerWrapper>
                                    <WorkDemoContainer title={'Sales Forecasting Manager Judgment'} videoSrc={OneClickManagerJudgmentVid} imgSrc={OneClickManagerJudgmentImg} descriptionText={ONE_CLICK_MANAGER_JUDGMENT_DESCRIPTION}/>
                                </WorkContainerWrapper>
                                <WorkContainerWrapper>
                                    <WorkDemoContainer title={'Collapsible Quota Visualization'} videoSrc={CollapsibleQuotaViewVid} imgSrc={CollapsibleQuotaViewImg} descriptionText={COLLAPSIBLE_QUOTA_VIEW_DESCRIPTION}/>
                                </WorkContainerWrapper>
                            </WorkDemoFlexColumn>
                            <WorkDemoFlexColumn>
                                <WorkContainerWrapper>
                                    <WorkDemoContainer title={'Custom Grid Self Configuration'} videoSrc={SelfConfigVid} imgSrc={SelfConfigImg} descriptionText={SELF_CONFIG_DESCRIPTION}/>
                                </WorkContainerWrapper>
                                <WorkContainerWrapper>
                                    <WorkDemoContainer title={'Snackbar Messages'} videoSrc={SnackbarVid} imgSrc={SnackbarImg} descriptionText={SNACKBAR_DESCRIPTION}/>
                                </WorkContainerWrapper>
                                <WorkContainerWrapper>
                                    <WorkDemoContainer title={'Stage Progression Waterfall Chart'} videoSrc={StageProgressionVid} imgSrc={StageProgressionImg} descriptionText={STAGE_PROGRESSION_DESCRIPTION}/>
                                </WorkContainerWrapper>
                            </WorkDemoFlexColumn>
                        </WorkDemoGrid>
                    </Work>
                    <Education>
                        <FlexSpaceWrapper>
                            <img width={268} height={268} src={Me} />
                            <Description>
                                {ABOUT_DESCRIPTION}
                            </Description>
                        </FlexSpaceWrapper>
                    </Education>
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

const FlexSpaceWrapper = styled.div`
  display: flex;
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

const Education = styled.div`
  background-color:${theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  min-width: 813px;
`;

const Work = styled.div`
  background-color: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  padding: 12px 0;
`;

const WorkDemoGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(792px, 1fr) minmax(792px, 1fr);
    @media (max-width: 1584px) {
    grid-template-columns: 792px;
    }
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

