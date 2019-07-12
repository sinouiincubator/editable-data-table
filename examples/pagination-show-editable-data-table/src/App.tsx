import React from "react";
import ThemeProvider from "sinoui-components/styles/ThemeProvider";
import defaultTheme from "sinoui-components/styles/defaultTheme";
import Demo from './Demo';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Demo />
    </ThemeProvider>
  );
};

export default App;
