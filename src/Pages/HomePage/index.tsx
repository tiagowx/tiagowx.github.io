import { Box } from "@mui/material";
import Articles from "./components/Articles";
import Bio from "./components/Bio";
import Projects from "./components/Projects";
import { style } from "./styles";

const Home: React.FC = () => {
  return (
    <Box component="main" sx={style}>
      <Articles/>
      <Bio />
      <Projects/>
    </Box>
  );
};

export default Home;