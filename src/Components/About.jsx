import React from "react";
import { EmailIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";
// import {MdGraphicEq } from 'react-icons/md'

import {
  Box,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Link,
} from "@chakra-ui/react";
// import "../CssPages/About.css"
const About = () => {
  return (
    <div id="Abouts">
      <div >
        <RangeSlider aria-label={["min", "max"]} defaultValue={[0, 100]}>
          <RangeSliderTrack bg="skyblue">
            <RangeSliderFilledTrack bg="black" />
          </RangeSliderTrack>
        </RangeSlider>
      </div>

      {/* section for about */}
      <Box
        w="60%"
        margin={"auto"}
        color="black"
        // alignItems={"center"}
        // justifyContent="center"
        className="About"
        textDecorationLine={"unset"}
      >
        <Text fontSize={"30px"} color="#FFEF03" mt="20px" fontWeight="bold">
          About
        </Text>
        {/* Heading */}
        <Box fontFamily={"sans-serif"}  color={"white"} fontSize={{base:"12px",md:"14px",lg:"16px",xl:"18px","2xl":"18px"}}>
          <Text color={"yellow"}>I'm Suvam Swagatam Panda</Text>
          {/* Description */}
          <Box m="auto" >
          <p >
            Observant & detail-oriented aspiring full-stack web developer with a
            specialization in MERN stack. Judicious & creative when crafting web
            applications & platforms to propel competitive advantage & revenue
            growth. Looking forward to honing his skills in a challenging work
            environment.
          </p>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
export default About;
