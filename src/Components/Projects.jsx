import { Button, Divider, Link, Text } from "@chakra-ui/react";
import {
  Icon,
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Image,
} from "@chakra-ui/react";
// import { BsLinkedin,BsGithub } from 'react-icons/bs'
// import {MdGraphicEq } from 'react-icons/md'

import React from "react";
// import "../CssPages/Projects.css"
const Projects = () => {
  return (
    
      <div className="Project">
        <div className="slider">
          <RangeSlider aria-label={["min", "max"]} defaultValue={[0, 100]}>
            <RangeSliderTrack bg="purple">
              <RangeSliderFilledTrack bg="black" />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={1} index={0}>
              <Box color="red" />
            </RangeSliderThumb>
            <RangeSliderThumb boxSize={1} index={1}>
              <Box color="Green" />
            </RangeSliderThumb>
          </RangeSlider>
        </div>
        <Text
          fontWeight={"semibold"}
          my="13px"
          fontSize={"30px"}
          color={"#FFEF03"}
        >
          Projects
        </Text>
        <div className="ProjectGrid">
          <Box  lineHeight={{sm:"6",base:"7"}}
           fontSize={{
            md: "14px",
            lg: "15px",
            xl: "15px",
            sm:"13px",
            base:"11px"
          }}
          py="5"

            borderRadius={"10px"}
            overflow="hidden"
        
            w="90%"
            margin={"auto"}
        
            textAlign="left"
            backgroundColor={"skyblue"}
            display={{
              md: "flex",
              lg: "flex",
              xl: "flex",
              "2xl": "flex",
              base: "inherit",
            }}
            
          >
            <Box
              w={{ md: "60%", lg: "60%", xl: "60%", "2xl": "60%", base: "90%" }}
              margin="auto"
            >
              <Image
                h="100%"
                w="88%"
                margin={"auto"}
                my="20px"
                src="https://qph.cf2.quoracdn.net/main-qimg-663fde19a326920ebb3f30412ca5a1b7-pjlq"
                alt="tripoto"
              />
            </Box>
            <Box px="12px"  w={{
                  md: "60%",
                  lg: "60%",
                  xl: "60%",
                  "2xl": "60%",
                  base: "90%",
                }} margin="auto" 
                
                
                >
              <Text
                fontWeight={"semibold"}               
                margin="auto"
                textAlign={"center"}
              >
                Tripoto
              </Text>
              <li>Created the Sign-in and Sign-up functionality.</li>
              <li>Created two-three pages.</li>
              <li>Good UI with navbar.</li>
              <h2>Tech stack- HTML | CSS | REACTJS | CHAKRAUI | AOS</h2>
              <Box margin={"auto"} textAlign="center">
                <Button
                  as={"Link"}
                  href="https://chic-bonbon-92e1a1.netlify.app"
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  backgroundColor="purple"
                  _hover={{ color: "black", backgroundColor: "white" }}
                >
                  Website
                </Button>
                <Button
                  as={"Link"}
                  href="https://chic-bonbon-92e1a1.netlify.app"
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  bg="black"
                  ml="10px"
                  _hover={{ color: "black", backgroundColor: "white" }}
                >
                  {" "}
                  Github
                </Button>
              </Box>
            </Box>
          </Box>
          </div>
          <Divider  w="90%" margin={"auto"} my="30px"/>
          <Box 
           fontSize={{
            md: "14px",
            lg: "15px",
            xl: "15px",
            sm:"13px",
            base:"11px"
          }}
            borderRadius={"10px"}
            overflow="hidden"
            lineHeight={{sm:"6",base:"7"}}
            w="90%"
            py={"16px"}
            margin={"auto"}
            textAlign="left"
            backgroundColor={"red.300"}
            display={{
              md: "flex",
              lg: "flex",
              xl: "flex",
              "2xl": "flex",
              base: "inherit",
            }}
          >
            <Box
              w={{ md: "60%", lg: "60%", xl: "60%", "2xl": "60%", base: "90%" }}
              margin="auto"
              px={"10px"}
            >
              <Image
                w="100%"
                margin={"auto"}
                m="auto"
                h={"100%"}
                src="https://user-images.githubusercontent.com/82999625/141300168-4b13c935-07f4-4a74-8b20-ef971b855283.png"
                alt="tripoto"
              />
            </Box>

            <Box
              px="12px"
             
              
              w={{ md: "60%", lg: "60%", xl: "60%", "2xl": "60%", base: "90%" }}
              margin="auto"
            >
              <Text fontWeight={"semibold"} textAlign={"center"}>
                Cricket.Com
              </Text>
              <li>Created the Sign-in and Sign-up functionality.</li>
              <li>Used latest cricket api,filter and search functionality.</li>
              <li>
                Provided results, stats, latest news & videos of all
                international, domestic & T20 series.{" "}
              </li>
              <h2>Tech stack- HTML | CSS | JAVASCRIPT</h2>
              <Box margin={"auto"} textAlign="center">
                <Button
                  as={"Link"}
                  href="https://drive.google.com/file/d/1oHF4pgDOvReUdcor_8KQ0syIy3FEcfCL/view"
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  backgroundColor="purple"
                  _hover={{ color: "black", backgroundColor: "white" }}
                >
                  Website
                </Button>
                <Button
                  as={"Link"}
                  href="https://github.com/Suvam778781/heroic-ice-5830"
                  fontSize={{ base: "0.8em" }}
                  className="btn"
                  color="white"
                  bg="black"
                  ml="10px"
                  _hover={{ color: "black", backgroundColor: "white" }}
                >
                  {" "}
                  Github
                </Button>
              </Box>
            </Box>
          </Box>
        
      </div>

  );
};

export default Projects;
