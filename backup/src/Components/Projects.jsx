import { Button, Divider, Link, Text } from "@chakra-ui/react";
import AOS from "aos";
import "aos/dist/aos.css";
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
import '../App.css';
import React from "react";
// import "../CssPages/Projects.css"
const Projects = () => {
  AOS.init({
    duration: 1200,
  });

  return (
    <div id="Projects">
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
      <Text fontWeight={"bold"} my="13px" fontSize={"30px"} color={"#FFEF03"}>
        Projects
      </Text>
      <div className="ProjectGrid">

        <div className="project_box">
        <Box
        
          data-aos="fade-up-right"
          
          lineHeight={{ sm: "6", base: "7" }}
          fontSize={{
            md: "14px",
            lg: "15px",
            xl: "15px",
            sm: "13px",
            base: "11px",
          }}
          py="5"
          borderRadius={"10px"}
          overflow="hidden"
          w="80%"
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
            className="project_image"
            w={{ md: "60%", lg: "60%", xl: "60%", "2xl": "60%", base: "90%" }}
            margin="auto"
          >
            <Image
            borderRadius={20}
            border="5px solid "
              h="100%"
              w="88%"
              margin={"auto"}

              my="20px"
              src="https://i.ibb.co/y5mnVWW/2022-12-05.png"
              alt="tripoto"
            />
          </Box>
        
          <Box
            px="12px"
            w={{
              md: "60%",
              lg: "60%",
              xl: "60%",
              "2xl": "60%",
              base: "90%",
            }}
            margin="auto"
          >
            <Text fontWeight={"semibold"} margin="auto" textAlign={"center"}>
              Tripoto
            </Text>
            <Text fontSize={"13px"} lineHeight="14px" w="90%" m="auto">Tripoto is one of the largest communities of Travelers in the world. We are crowd-sourcing amazing travel itineraries from around the world. Tripoto allows travelers to share their travel stories and discover amazing itineraries by real travelers. See all.</Text>
          <Divider w="90%" m="auto" pb="15px"/>
            
            <li>Created the Sign-in and Sign-up functionality.</li>
            <li>Created two-three pages.</li>
            <li>Good UI with navbar.</li>
            <h2>Tech stack- HTML | CSS | REACTJS | CHAKRAUI | AOS</h2>
            <Box margin={"auto"} textAlign="center" mt="10px">
              <Link
                href="https://makeatrip.netlify.app/"
                fontSize={{ base: "0.8em" }}
                w="90px"
                h="70px"
                p="13px"
                color="black"
                backgroundColor="yellow"
                borderRadius={"5px"}
                _hover={{ color: "black", backgroundColor: "white" }}
              >
                Website
              </Link>
              <Link
                // as={"Link"}
                href="https://github.com/Suvam778781/hushed-voyage-7986"
                fontSize={{ base: "0.8em" }}
                w="90px"
                h="70px"
                p="13px"
                borderRadius={"5px"}
                color="white"
                bg="black"
                ml="10px"
                _hover={{ color: "black", backgroundColor: "white" }}
              >
                Github
              </Link>
            </Box>
          </Box>
          
        </Box>
        </div>
      </div>
      <Divider w="90%" margin={"auto"} my="30px" />

      <div className="project_box">
      <Box
        data-aos="fade-up-left"
        fontSize={{
          md: "14px",
          lg: "15px",
          xl: "15px",
          sm: "13px",
          base: "11px",
        }}
        borderRadius={"10px"}
        overflow="hidden"
        lineHeight={{ sm: "6", base: "7" }}
        w="80%"
        py={"16px"}
        margin={"auto"}
        textAlign="left"
        // backgroundColor={"red.300"}
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
          px={"10px"}
        >
          <Image
           borderRadius={20}
           border="5px solid "
             h="100%"
             w="88%"
             margin={"auto"}

             my="20px"
            className="project_image"
            m="auto"
        
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
          <Text fontSize={"13px"} lineHeight="14px" w="90%" m="auto">Get live cricket scores, scorecard updates, match schedule, predictions & results, stats, latest news & videos of all international, domestic & T20 series. We Created the Sign-in and Sign-up functionality. Created Live news pages and live news video pages also providing functionality like sorting whatever we need click on the option and data will be sorted Good UI with resposive</Text>
          <Divider w="90%" m="auto" pb="15px"/>
          <li>Created the Sign-in and Sign-up functionality.</li>
          <li>Used latest cricket api,filter and search functionality.</li>
          <li>
            Provided results, stats, latest news & videos of all international,
            domestic & T20 series.{" "}
          </li>
          <h2>Tech stack- HTML | CSS | JAVASCRIPT</h2>
          <Box margin={"auto"} textAlign="center" mt="10px">
            <Link
              href="https://heroic-ice-5830-suvam778781.vercel.app/"
              fontSize={{ base: "0.8em" }}
              w="90px"
              h="70px"
              p="13px"
              color="black"
              backgroundColor="yellow"
              borderRadius={"5px"}
              _hover={{ color: "black", backgroundColor: "white" }}
            >
              Website
            </Link>
            <Link
              // as={"Link"}
              href="https://github.com/Suvam778781/Cricket.com_Website_Clone"
              fontSize={{ base: "0.8em" }}
              w="90px"
              h="70px"
              p="13px"
              borderRadius={"5px"}
              color="white"
              bg="black"
              ml="10px"
              _hover={{ color: "black", backgroundColor: "white" }}
            >
              Github
            </Link>
          </Box>
        </Box>
      </Box>
      </div>
      <Divider w="90%" margin={"auto"} my="30px" />

      <div className="project_box">
      <Box
        data-aos="fade-up-left"
        fontSize={{
          md: "14px",
          lg: "15px",
          xl: "15px",
          sm: "13px",
          base: "11px",
        }}
        borderRadius={"10px"}
        overflow="hidden"
        lineHeight={{ sm: "6", base: "7" }}
        w="80%"
        py={"16px"}
        margin={"auto"}
        textAlign="left"
        // backgroundColor={"red.300"}
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
          px={"10px"}
        >
          <Image
           borderRadius={20}
           border="5px solid "
             h="100%"
             w="88%"
             margin={"auto"}

             my="20px"
            className="project_image"
            m="auto"
        
            src="https://i.ibb.co/KGL75Q1/2022-12-11-1.png"
            alt="timelify"
          />
        </Box>
        <Box
          px="12px"
          w={{ md: "60%", lg: "60%", xl: "60%", "2xl": "60%", base: "90%" }}
          margin="auto"
        >
          <Text fontWeight={"semibold"} textAlign={"center"}>
            Timelify.com
          </Text>
           <Text fontSize={"13px"} lineHeight="14px" w="90%" m="auto">Forget timers, note taking and manual input—Timely can track time spent in every web and desktop app automatically for you. Get a precise daily record of all the time you spend in documents, meetings, emails, websites and video calls with zero effort. It's all 100% private to you.</Text>
<Divider w="90%" m="auto" pb="15px"/>
          <li>Created the Sign-in and Sign-up functionality.</li>
          <li>Use api for time tracking functionality and integration page.</li>
          <h2>Tech stack- HTML | CSS | JAVASCRIPT</h2>
          <Box margin={"auto"} textAlign="center" mt="10px">
            <Link
              href="https://the-great-suvam778781-site.netlify.app"
              fontSize={{ base: "0.8em" }}
              w="90px"
              h="70px"
              p="13px"
              color="black"
              backgroundColor="yellow"
              borderRadius={"5px"}
              _hover={{ color: "black", backgroundColor: "white" }}
            >
              Website
            </Link>
            <Link
              // as={"Link"}
              href="https://github.com/Suvam778781/Timelify-clone"
              fontSize={{ base: "0.8em" }}
              w="90px"
              h="70px"
              p="13px"
              borderRadius={"5px"}
              color="white"
              bg="black"
              ml="10px"
              _hover={{ color: "black", backgroundColor: "white" }}
            >
              Github
            </Link>
          </Box>
        </Box>
      </Box>
      </div>
    </div>
  );
};

export default Projects;
