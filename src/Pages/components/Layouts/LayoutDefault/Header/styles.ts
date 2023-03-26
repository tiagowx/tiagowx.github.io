import { SxProps } from "@mui/material";

export const styles: SxProps = {
  display: "flex",
  bgcolor: "#006",
  justifyContent: "space-around",
  p: "0.4rem",
  h1: {
    display: "flex",
    fontWeight: "500",
    span: {
      display: "flex",
      mx: "1rem",
      alignItems: "center",
    },
  },
  ".social-list": {
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    gap: ".4rem",
    ".btn": {
      color: "#006",
      bgcolor: "white",
      minWidth: "32px",
      minHeight: "32px",
      padding: ".2rem",
      margin: 0,
      fontSize: "1.6rem",
      borderRadius: ".4rem"
    },
  },
};
