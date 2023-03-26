import { SxProps } from "@mui/material";

export const style: SxProps = {
  display: "flex",
  justifyContent: "space-around",
  background: "#006",
  color: "white",
  padding: ".4rem",
  position: "fixed",
  width: "100%",
  top: "calc(100vh - 2.8rem)",
  h6: {
    flex: 1,
    borderRight: "2px solid #fff",
    textAlign: "center",
  },
  ".tech-icons": {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    flex: 1,
    gap: "1rem",
    borderLeft: "2px solid #fff",
    fontSize: "2rem" 
  }
};
