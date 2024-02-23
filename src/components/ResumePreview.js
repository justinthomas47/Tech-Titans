import {
  Box,
  Heading,
  HStack,
  Tag,
  TagLabel,
  Text,
  VStack,
  Wrap,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { useResume } from "../Context";
import { MdMail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";

const ResumePreview = () => {
  const { theme, about, educationList, skills, workList, projects, printElem } =
    useResume();
  const imgStyle = {
    width: "115px",
    height: "115px",
    margin: "15px",
    borderRadius: "50%",
  };

  return (
    <Box bg={"gray.50"} p={6} rounded={"md"} shadow={"md"}>
      <Box bg={"white"} rounded={"md"} shadow={"lg"} overflow={"hidden"} minH={"100vh"}>
        <div ref={printElem}>
          <HStack>
            {about.picture && (
              <img
                style={imgStyle}
                src={about.picture}
                alt="avatar"
              />
            )}
            <VStack m={4} alignItems={"flex-start"} spacing={0.5}>
              <Heading as="h4" size="md">
                {about.name ? about.name : "Ethan Foster"}
              </Heading>
              <Text color={"gray.500"}>
                {about.role ? about.role : "System Analyst"}
              </Text>
            </VStack>
          </HStack>

          <HStack
            bg={theme}
            color={"white"}
            p={4}
            justifyContent={"space-between"}
          >
            <HStack spacing={1}>
              <MdMail />{" "}
              <Text>{about.email ? about.email : "ethanfoster@gmail.com"}</Text>
            </HStack>
            <HStack spacing={1}>
              <MdLocalPhone />{" "}
              <Text>{about.phone ? about.phone : "+14845691868"}</Text>
            </HStack>
            <HStack spacing={1}>
              <MdLocationPin />{" "}
              <Text>{about.address ? about.address : "USA, Newyork"}</Text>
            </HStack>
            <HStack spacing={1}>
              <RiLinkedinBoxFill />{" "}
              <Text as="a" href={about.linkedin}>
                LinkedIn
              </Text>
            </HStack>
          </HStack>

          <HStack
            w={"full"}
            h={"full"}
            my={2}
            mb={6}
            px={2}
            justifyContent={"space-between"}
            alignItems={"flex-start"}
            spacing={1}
          >
            <VStack mx={2} alignItems={"flex-start"} w={"full"} spacing={6}>
              <Section title="EDUCATION">
                {educationList.map((education, index) => (
                  <EducationItem key={index} education={education} />
                ))}
              </Section>
              <Section title="WORK EXPERIENCE">
                {workList.map((work, index) => (
                  <WorkExperienceItem key={index} work={work} />
                ))}
              </Section>
            </VStack>

            <VStack mx={2} alignItems={"flex-start"} w={"full"} spacing={6}>
              <Section title="SKILLS">
                <Wrap>
                  {skills.map((skill, index) => (
                    <Tag
                      size={"md"}
                      borderRadius="md"
                      variant="solid"
                      bg={theme.replace("400", "500")}
                      key={index}
                    >
                      <TagLabel>{skill.name}</TagLabel>
                    </Tag>
                  ))}
                </Wrap>
              </Section>
              <Section title="PROJECTS">
                {projects.map((project, index) => (
                  <ProjectItem key={index} project={project} />
                ))}
              </Section>
            </VStack>
          </HStack>
        </div>
      </Box>
    </Box>
  );
};

const Section = ({ title, children }) => (
  <Box>
    <Heading as="h4" size="md" color={"gray.700"} mb={4}>
      {title}
    </Heading>
    {children}
  </Box>
);

const EducationItem = ({ education }) => (
  <VStack spacing={0} alignItems={"flex-start"} pb={2}>
    <Text fontWeight={"medium"}>{education.degree ? education.degree : "B.Tech Computer Engineering"}</Text>
    <Text fontSize={"sm"}>{education.school ? education.school : "Stanford University"}</Text>
    <HStack fontSize={"xs"} fontStyle={"italic"} justifyContent={"space-between"} w={"full"}>
      <Text>{education.startYr ? education.startYr : 2014} - {education.endYr ? education.endYr : 2018}</Text>
      <Text>{education.grade ? education.grade : "8.5 CGPA"}</Text>
    </HStack>
  </VStack>
);

const WorkExperienceItem = ({ work }) => (
  <VStack spacing={0.5} alignItems={"flex-start"} pb={2} lineHeight={1.3}>
    <Text fontWeight={"medium"}>{work.position ? work.position : "System Analyst"}</Text>
    <Text fontSize={"sm"}>{work.company ? work.company : "Microsoft"} - {work.type ? work.type : "Full-time"}</Text>
    <Text fontSize={"xs"} fontStyle={"italic"}>{work.startDate ? work.startDate : "2018-03"} - {work.endDate ? work.endDate : "2021-12"}</Text>
    <Text fontSize={"sm"} as="p">
      {work.description
        ? work.description
        : "Enhanced system efficiency by identifying and resolving bugs, implemented crucial website enhancements, and significantly improved overall functionality and speed as a System Analyst."}
    </Text>
  </VStack>
);

const ProjectItem = ({ project }) => (
  <VStack spacing={0.5} alignItems={"flex-start"} pb={2} lineHeight={1.3}>
    <HStack as="a" href={project.url} target="_blank" spacing={0.5}>
      <Text fontWeight={"medium"} flex={"row"}>{project.name ? project.name : "Project Name"} </Text>{" "}
      <BiLinkExternal />
    </HStack>
    <UnorderedList pl={5}>
      <ListItem>
        <Text fontSize={"sm"} as="p">
          {project.description
            ? project.description
            : "Lorem ipsum dolor sit amet consectetur adipisicing."}
        </Text>
      </ListItem>
    </UnorderedList>
  </VStack>
);

export default ResumePreview;
