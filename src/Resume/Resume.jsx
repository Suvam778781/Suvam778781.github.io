import { Box, Text } from "@chakra-ui/react";
import React from "react";
import Typical from "react-typical";

function Resume(props) {
  return (
    <Box
      style={{
        marginTop: "100px",
        fontFamily: "sans-serif",
        color: "black",
        padding: "30px",
        height: "30px",
        fontStretch: "extra-condensed",
        fontWeight: "bolder",
      }}
      color="black"
      bgClip="text"
      fontSize={{sm:"16px",md:"18px",lg:"20px",xl:"23px","2xl":"23"}}
    >
      <Typical
        steps={[
          "HI I AM SUVAM PANDA ",
          1000,
          "A PASSIONATE FULL STACK WEB DEVELOPER",
          1000,
        ]}
        loop={Infinity}
        wrapper="p"

      />

      <Text color="white" fontSize={{sm:"13px",md:"14px",lg:"16px",xl:"16px","2xl":"17px"}}>I am a web developer with a vast array of knowledge in many different frontend and backend languages, responsive frameworks, database, and best code practices.</Text>
    </Box>
  );
}
export default Resume;
