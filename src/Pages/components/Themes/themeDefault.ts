import { createTheme } from "@mui/material";

export const themeDefault = createTheme({
  
  components: {
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          margin: 0,
        },
        expanded: {
          margin: 0,
          minHeight: "0", 
          height: "2rem" 
        },
        root: {
          minHeight: "0", 
        },
        contentGutters: {
          minHeight: "0", 
          margin: 0,
          height: "2rem" 
        },
        gutters: {
          margin: 0,
          minHeight: "0", 
          height: "2rem" 
        }

      },
    },
  },
});
