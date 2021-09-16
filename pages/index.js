import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import PageLayout from '../components/PageLayout';
import ColorBlock from '../components/ColorBlock';
import InfoBlock from '../components/InfoBlock';
import LargeBlock from '../components/LargeBlock';
import MediumBlock from '../components/MediumBlock';
import SmallBlock from '../components/SmallBlock';
import XLBlock from '../components/XLBlock';
import SpecialBlock from '../components/SpecialBlock';

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <div className='firstrow'>
          <InfoBlock></InfoBlock>
          <div id='xlarge_isout_largeblock'>
            <LargeBlock
              img='../static/images/Work_4.JPG'
              title='Supercell: Everdale'
              category='Branding, Identity'
            ></LargeBlock>
          </div>
          <div id='xlarge_ison_spblock'>
            <SpecialBlock
              img='../static/images/Work_4.JPG'
              title='Supercell: Everdale'
              category='Branding, Identity'
            ></SpecialBlock>
          </div>
          <ColorBlock></ColorBlock>
        </div>
        <div className='secondrow'>
          <SmallBlock
            img='../static/images/Work_6.jpg'
            title='Sangsung: Galaxy S8'
            category='Branding, Print'
          ></SmallBlock>
          <SmallBlock
            img='../static/images/Work_2.gif'
            title='Samsung: A7 & A9'
            category='Branding, Digital'
          ></SmallBlock>
          <SmallBlock
            img='../static/images/Work_14.png'
            title='Samsung: Milan Design Week'
            category='Branding'
          ></SmallBlock>
          <MediumBlock
            img='../static/images/Work_5.jpg'
            title='Milan Design Week'
            category='Photography'
          ></MediumBlock>
          <ColorBlock></ColorBlock>
          <XLBlock
            img='../static/images/Work_7.png'
            title='Blizzard: Overwatch'
            category='Advertising'
          ></XLBlock>
        </div>
        <div className='thirdrow'>
          <SmallBlock
            img='../static/images/Work_8.png'
            title='Homeliaison'
            category='Branding'
          ></SmallBlock>
          <SmallBlock
            img='../static/images/Work_3.gif'
            title='Widen & kennedy: Stella Artois'
            category='Advertising, Copywriting'
          ></SmallBlock>
          <SmallBlock
            img='../static/images/Work_9.jpg'
            title='Samsung: Gear S3'
            category='Branding, Event'
          ></SmallBlock>
          <SmallBlock
            img='../static/images/Work_1.gif'
            title='Samsung: Galaxy S7'
            category='Branding, Print'
          ></SmallBlock>
          <LargeBlock
            img='../static/images/Work_7.png'
            title='Blizzard: Overwatch'
            category='Advertising'
          ></LargeBlock>
          <div id='xlarge_ison_colorblock'>
            <ColorBlock></ColorBlock>
          </div>
          <div id='xlarge_ison_smallblock'>
            <SmallBlock
              img='../static/images/Work_15.png'
              title='Blizzard: Overwatch'
              category='Advertising'
            ></SmallBlock>
          </div>
          <ColorBlock></ColorBlock>
        </div>
        <div className='forthrow'>
          <MediumBlock
            img='../static/images/Work_10.jpg'
            title='Samsung: Galaxy S7'
            category='Branding, Degital'
          ></MediumBlock>
          <SmallBlock
            img='../static/images/Work_12.gif'
            title='Hyunjoon Yoo Architects: SCG'
            category='Branding, Website'
          ></SmallBlock>
          <XLBlock
            img='../static/images/Work_13.jpg'
            title='Samsung: Galaxy Note 7'
            category='Branding, Event'
          ></XLBlock>
          <ColorBlock></ColorBlock>
          <MediumBlock
            img='../static/images/Work_11.png'
            title='Wallpaper: LG Signature'
            category='Photography, Print'
          ></MediumBlock>
        </div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Index;
