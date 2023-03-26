import { Box, Tooltip, Typography } from "@mui/material";
import {
  TbBrandAngular,
  TbBrandCSharp,
  TbBrandCss3,
  TbDatabase,
  TbBrandHtml5,
  TbBrandReact,
  TbBrandTypescript,
} from "react-icons/tb";
import {
  SiDotnet,
  SiNodedotjs
} from "react-icons/si";
import { style } from "./style";

export const Footer = () => {
  return (
    <Box component="footer" sx={style}>
      <Typography component="h6" variant="h6">&copy;  {new Date().getFullYear()} - Tiago Batista</Typography>
      <Typography component="span" className="tech-icons">
        <Tooltip title="HTML5" followCursor>
          <Box>
            <TbBrandHtml5 />
          </Box>
        </Tooltip>
        <Tooltip title="CSS3" followCursor>
          <Box>
            <TbBrandCss3 />
          </Box>
        </Tooltip>
        <Tooltip title="NodeJS" followCursor>
          <Box>
            <SiNodedotjs />
          </Box>
        </Tooltip>
        <Tooltip title="Typescript" followCursor>
          <Box>
            <TbBrandTypescript />
          </Box>
        </Tooltip>
        <Tooltip title="AngularJS" followCursor>
          <Box>
            <TbBrandAngular />
          </Box>
        </Tooltip>
        <Tooltip title="ReactJS" followCursor>
          <Box>
            <TbBrandReact />
          </Box>
        </Tooltip>
        <Tooltip title="C#" followCursor>
          <Box>
            <TbBrandCSharp />
          </Box>
        </Tooltip>
        <Tooltip title=".NET" followCursor>
          <Box>
            <SiDotnet />
          </Box>
        </Tooltip>
        <Tooltip title="SQL" followCursor>
          <Box>
            <TbDatabase />
          </Box>
        </Tooltip>
      </Typography >
    </Box >
  );
} 