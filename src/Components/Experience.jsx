import React from 'react';
import { Box, Text, Flex, Icon, Divider, Badge, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack } from '@chakra-ui/react';
import { MdWork, MdSchool } from 'react-icons/md';

const Experience = () => {
  const experiences = [
    {
      company: 'DevRiser LLC',
      position: 'Full-Stack Web Developer',
      duration: 'May 2023 - July 2023',
      description: 'Wroking as a Full stack Web Developer (MERN).',
    }
  ];

  const education = [
    {
      institution: 'Masai School',
      degree: 'Full -Stack Web Development',
      duration: 'April 2023 - Feb 2023',
      description: 'This is total 8 months, 9 to 9 and 6 days a week learning program.'
    },
    {
      institution: 'B O S E',
      degree: 'Diploma in Electrical Engineering',
      duration: '2017 - 2019',
      description: 'This was 2 Year diploma program through full time.',
    },
  ];
  return (
    <Box  id='experience'>
         <div className="slider" >
        <RangeSlider aria-label={["min", "max"]} defaultValue={[0, 100]}>
          <RangeSliderTrack bg="skyblue">
            <RangeSliderFilledTrack bg="black" />
          </RangeSliderTrack>
        </RangeSlider>
      </div>
    <Box borderRadius="md" margin={"auto"} w={"80%"} justifyContent={"center"} alignItems={"center"}>
      <Flex p={4} direction={{base:"column",md:"row",lg:"row",xl:"row","2xl":"row"}} >


      <Box color={"white"} width={{base:"100%",md:"50%",lg:"50%",xl:"50%","2xl":"50%"}}>
        <Text fontSize={"30px"} my={"20px"}  color="#FFEF03" fontWeight="bold">
        Education
      </Text>
          {education.map((edu, index) => (
            <Flex key={index}  mb={6} textAlign={"left"}>
              <Icon as={MdSchool} boxSize={6} mr={4} color="white" />
              <Box>
                <Text fontWeight="bold">{edu.degree}</Text>
                <Text>{edu.institution}</Text>
                <Badge fontSize="sm" border={"2px solid #FFEF03"} bg={"transparent"} textTransform={"none"} p={1} rounded={"lg"} width={"auto"} color="#FFEF03" mt={1}>
                  {edu.duration}
                </Badge>
                <Text mt={2}>{edu.description}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
        <Box width={{base:"100%",md:"50%",lg:"50%",xl:"50%","2xl":"50%"}}>
        <Text fontSize={"30px"} my={"20px"}  color="#FFEF03" fontWeight="bold">
        Experience
      </Text>
          {experiences.map((experience, index) => (
              <Flex key={index} mb={6} textAlign={"left"} color={"white"}>
                <Icon as={MdWork} mr={4} color="white"/>
              <Box>
                <Text fontWeight="bold">{experience.position}</Text>
                <Text>{experience.company}</Text>
                <Badge fontSize="sm" border={"2px solid #FFEF03"} bg={"transparent"} textTransform={"none"} p={1} rounded={"lg"} width={"auto"} color="#FFEF03" mt={1}>
                  {experience.duration}
                </Badge>
                <Text mt={2}>{experience.description}</Text>
              </Box>
            </Flex>
          ))}
        </Box>
       
      </Flex>
    </Box>
    </Box>
  );
};

export default Experience;
