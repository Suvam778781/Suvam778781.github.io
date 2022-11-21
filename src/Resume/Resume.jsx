import { Box } from "@chakra-ui/react";
import React from "react";
import Typical from "react-typical";

function Resume(props) {
  return (
    <Box
      style={{
        marginTop: "100px",
        fontFamily: "sans-serif",
        color: "#d5164e",
        padding: "30px",
        height: "30px",
        fontStretch: "extra-condensed",
        fontWeight: "bolder",
      }}
      color="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
      fontSize="3xl"
    >
      <Typical
        steps={[
          "HI I AM SUVAM PANDA ",
          2000,
          "A PASSIONATE FULL STACK WEB DEVELOPER",
          1000,
        ]}
        loop={Infinity}
        wrapper="p"
      />
    </Box>
  );
}
export default Resume;
