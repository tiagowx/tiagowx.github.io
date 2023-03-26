import { ThemeProvider } from "@mui/material";
import { ReactElement } from "react";
import { themeDefault } from "../../Themes/themeDefault";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface IProps {
  children: ReactElement;
}

export const LayoutDefault: React.FC<IProps> = (props: IProps) => {

  return (

    <ThemeProvider theme={themeDefault}>
      <Header />
      {props.children}
      <Footer />
    </ThemeProvider>


  );
}