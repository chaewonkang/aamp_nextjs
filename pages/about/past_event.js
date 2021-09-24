import { ThemeProvider } from 'styled-components';

import theme from '../../styles/theme';
import PageLayout from '../../components/PageLayout';

const PastEvents = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageLayout>
        <div>This is PastEvents</div>
      </PageLayout>
    </ThemeProvider>
  );
};

export default PastEvents;
