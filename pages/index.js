import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import PageLayout from '../components/PageLayout';
import ColorBlock from '../components/ColorBlock';
import InfoBlock from '../components/InfoBlock';
import LargeBlock from '../components/LargeBlock';
import MediumBlock from '../components/MediumBlock';
import SmallBlock from '../components/SmallBlock';
import XLBlock from '../components/XLBlock';

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <div className='firstrow'>
          <InfoBlock></InfoBlock>
          <LargeBlock img='../static/images/Work_4.JPG'></LargeBlock>
          <ColorBlock></ColorBlock>
          <MediumBlock></MediumBlock>
        </div>
        <div className='secondrow'>
          <SmallBlock img='../static/images/Work_6.JPG'></SmallBlock>
          <SmallBlock img='../static/images/Work_2.gif'></SmallBlock>
          <SmallBlock img='../static/images/Work_14.png'></SmallBlock>
          <MediumBlock img='../static/images/Work_5.jpg'></MediumBlock>
          <ColorBlock></ColorBlock>
          <XLBlock></XLBlock>
        </div>
        <div className='thirdrow'>
          <SmallBlock img='../static/images/Work_8.png'></SmallBlock>
          <SmallBlock img='../static/images/Work_3.gif'></SmallBlock>
          <SmallBlock img='../static/images/Work_9.jpg'></SmallBlock>
          <SmallBlock img='../static/images/Work_1.gif'></SmallBlock>
          <LargeBlock img='../static/images/Work_7.png'></LargeBlock>
          <ColorBlock></ColorBlock>
        </div>
        <div className='forthrow'>
          <MediumBlock img='../static/images/Work_10.jpg'></MediumBlock>
          <SmallBlock img='../static/images/Work_12.gif'></SmallBlock>
          <XLBlock img='../static/images/Work_13.jpg'></XLBlock>
          <ColorBlock></ColorBlock>
          <MediumBlock img='../static/images/Work_11.png'></MediumBlock>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Index;
