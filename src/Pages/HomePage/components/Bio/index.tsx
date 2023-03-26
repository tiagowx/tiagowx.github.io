import { IBio } from "@/interfaces/IBio";
import { Accordion, AccordionActions, AccordionDetails, AccordionSummary, Box, Link, List, ListItem, Typography } from "@mui/material";
import { useState } from "react";
import { styles } from "./styles";
const Bio = () => {
  const [accordion, setAccordion] = useState<string>("");

  const datas: IBio = {
    aboutMe: "Sou um entusiasta de tecnologia que decidiu construir uma carreira baseada em desenvolver sistemas e entende que o processo vai além de escrever scrpits em uma IDE.",
    formation: {
      academic: "Formação em Análise Desenvolvimento de Sistemas.",
      certificates: {
        bootcamps: [
          {
            name: "Impulso FullStack Developer",
            institution: "Digital Innovation One",
            description: "Treinamento intensivo em ferramentas voltadas ao desenvolvimento Fullstack como RubyOnRails, ExpressJs e ReactJS.",
            durationInHours: 104,
            month: 10,
            year: 2021,
            link: "https://www.dio.me/certificate/B1426F2B/share"
          },
          {
            name: "Impulso React Web Developer",
            institution: "Digital Innovation One",
            description: "Treinamento intensivo em desenvolvimento web com ReactJS.",
            durationInHours: 67,
            month: 11,
            year: 2021,
            link: "https://www.dio.me/certificate/BEBD4374/share"
          },
          {
            name: "Impulso FullStack Web Developer",
            institution: "Digital Innovation One",
            description: "Treinamento intensivo em ferramentas voltadas ao desenvolvimento Fullstack para aplicações web.",
            durationInHours: 104,
            month: 5,
            year: 2022,
            link: "https://www.dio.me/certificate/F4D79310/share"
          },
          {
            name: "Impulso Javascript Evolution",
            institution: "Digital Innovation One",
            description: "Treinamento intensivo em linguagem e recursos Javascript.",
            durationInHours: 104,
            month: 7,
            year: 2022,
            link: "https://www.dio.me/certificate/7E0B9062/share"
          },
        ],
        courses: []
      }
    }
  };


  return (
    <Box component="section" sx={styles}>
      <Typography component="h3" variant="h4">
        Biografia
      </Typography>
      <Typography component="span">
        Apresentação, Formação e Especializações
      </Typography>
      <List className="bio">
        <ListItem>
          <Accordion className="accordion-summary">
            <AccordionSummary className="accordion-summary">
              <Typography component="h5" variant="h6">Sobre mim</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="p">
                {datas.aboutMe}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ListItem>
        <ListItem>
          <Accordion>
            <AccordionSummary>
              <Typography component="h4" variant="h6">Bootcamps</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {datas.formation.certificates.bootcamps.length > 0 && datas.formation.certificates.bootcamps.map(bc =>
                <Accordion>
                  <AccordionSummary className="accordion-summary">
                    <Typography component="h4" variant="h6">
                      {bc.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography >
                      {bc.description}
                    </Typography>
                    <Typography component="span" textAlign="right">
                      Fornecido pela instituição {bc.institution}.
                      Duração de {bc.durationInHours} horas.
                      Concluído em {bc.month}/{bc.year}
                    </Typography>
                  </AccordionDetails>
                  <AccordionActions>
                    <Link href={bc.link}>Abrir</Link>
                  </AccordionActions>
                </Accordion>
              )}
            </AccordionDetails>
          </Accordion>
        </ListItem>
        <ListItem>
          <Accordion>
            <AccordionSummary className="accordion-summary">
              <Typography component="h4" variant="h6">Cursos</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {datas.formation.certificates.courses.length > 0 && datas.formation.certificates.courses.map(course =>
                <Accordion>
                  <AccordionSummary className="accordion-summary">
                    <Typography component="h4" variant="h6">{course.name} - {course.year} </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {course.description}
                  </AccordionDetails>
                  <AccordionActions>
                    <Link href={course.link}>Abrir</Link>
                  </AccordionActions>
                </Accordion>
              )}
            </AccordionDetails>
          </Accordion>
        </ListItem>
      </List>
    </Box>
  );
}

export default Bio;