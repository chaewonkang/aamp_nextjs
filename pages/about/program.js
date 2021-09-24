import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import PageLayout from '../../components/PageLayout';

const Program = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <div>This is Program</div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default Program;
