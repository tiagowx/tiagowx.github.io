import { AppBar, Box, Link, Typography } from "@mui/material";
import { styles } from "./styles";
import { BsGithub, BsLinkedin, BsMedium } from "react-icons/bs";
import { TbCode, TbCodeDots, TbBracketsContain } from "react-icons/tb";
import { useEffect, useState } from "react";

export const Header = () => {
  const [icon, setIcon] = useState(0);

  const renderIcon = (n: number) => {
    const icon = [<TbCode />, <TbCodeDots />, <TbBracketsContain />];

    return icon[n];
  }

  useEffect(() => {
    setTimeout(() => {
      setIcon(icon + 1);
      if (icon >= 2)
        setIcon(0);
    }, 4000)

  },);

  return (
    <AppBar>
      <Box sx={styles}>
        <Typography component="h1" variant="h4">
          <span>
            {renderIcon(icon)}
          </span>
          Tiago Batista
        </Typography>
        <Box className="social-list">
          <Link
            className="btn"
            href="https://github.com/tiagowx/"
            target="_blank"
          >
            <BsGithub />
          </Link>
          <Link className="btn"
            href="https://www.linkedin.com/in/tiagowx/"
            target="_blank"
          >
            <BsLinkedin />
          </Link>
          <Link className="btn"
            href="https://medium.com/@tiagowx"
            target="_blank"
          >
            <BsMedium />
          </Link>
        </Box>
      </Box>
    </AppBar>
  )

}