import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';
import PageLayout from '../components/PageLayout';

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <div></div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Index;
