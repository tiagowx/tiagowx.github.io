import { IArticle } from "@/interfaces/IArticle";
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Link, List, ListItem, Typography } from "@mui/material"
import { useState } from "react";
import { styles } from "./styles";

const Articles = () => {
  const [articles] = useState<IArticle[]>([
    {
      "description": "Observações sobre as diversas possibilidades de carreira no mercado de tecnologia e as habilidades necessárias para algumas delas em comparação com os personagens do anime One Piece.",
      "links": [
        {
          "url": "https://medium.com/@tiagowx/chap%C3%A9us-de-palha-em-um-projeto-dev-30c10e1eae31",
          "font": "Medium"
        }
      ],
      "title": "Chapéus de Palha em um projeto Dev"
    },
  ]);
  return (
    <Box component="section" sx={styles}>
      <Typography component="h3" variant="h4">
        Artigos
      </Typography>
      <Typography component="span">
        Educação, Insights e Tecnologia
      </Typography>
      <List>
        {articles.length > 0 && articles.map(item => (
          <ListItem>
            <Accordion>
              <AccordionSummary>
                <Typography component="h4" variant="h6">{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="p">{item.description}</Typography>
              </AccordionDetails>
              <AccordionActions>
                {item.links.map(link => (
                  <Link href={link.url} target="_blank">{link.font}</Link>
                ))}
              </AccordionActions>
            </Accordion>
          </ListItem>
        ))
        }
      </List>
    </Box>
  )
}

export default Articles;