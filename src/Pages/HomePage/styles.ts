import { SxProps } from "@mui/material";

export const style: SxProps = {
  display: "flex",
  flex: 1,
  justifyContent: "space-around",
  padding: "1rem",
  py: "4rem",
  gap: "1rem",
  section: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    flex: 1,
    h3: {
      color: "#006",
      borderInline: ".2rem solid #006",
      borderBottom: ".2rem solid #006",
      borderRadius: "0 0 .4rem .4rem",
    },
    span: {
      margin: ".5rem",
    },
  },
};
