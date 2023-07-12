"use client";

import { Provider } from "react-redux";
import { reduxStore } from "@/lib/redux/store";
import { ThemeProvider } from "@mui/material";
import { TODOtheme } from "@/lib/MUI/theme";


export const Providers = (props: React.PropsWithChildren) => {
  return (
    <Provider store={reduxStore}>
      <ThemeProvider theme={TODOtheme}>
          {props.children}
      </ThemeProvider>
    </Provider>
  );
};
