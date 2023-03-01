import {
  Box,
  Container,
  Divider,
  Grid,
  Image,
  Link,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
// import { Link } from "react-router-dom";
export const Github1 = () => {
  return (
    <div>
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
        Github Stats
      </Text>
      <Grid
        templateColumns={{
          base: "repeat(1,1fr)",

          lg: "repeat(2,1fr)",
          xl: "repeat(2,1fr)",
          "2xl": "repeat(2,1fr)",
        }}
        width="80%"
        pb="30px"
        alignItems="center"
        margin={"auto"}
        rowGap={"1"}
      >
        <Box m="auto">
          <Image
            w="500px"
            margin={"auto"}
            // align="left"
            src="https://github-readme-streak-stats.herokuapp.com?user=suvam778781&theme=radical"
          />
        </Box>
        <Box
          p={{ base: "0", md: "16px", lg: "16px", xl: "16px" }}
          alignItems={"center"}
          m="auto"
        >
          <Image
            margin={"auto"}
            w="500px"
            // align="left"
            src="https://github-readme-stats.vercel.app/api?username=suvam778781&theme=radical&count_private=true&show_icons=true" //stats
          />
        </Box>
      </Grid>
      {/* <Box w="100%" className="StatsChild2" mb="20px">
        <Image 
          margin={"auto"}
          h="170px"
          w={{
            md: "400px",
            sm: "400px",
            lg: "500px",
            xl: "500px",
            "2xl": "500px",
          }}
          // align="center"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=suvam778781&theme=radical" //launguages
        />
      </Box> */}
      <Divider />
      <Box w={{ lg: "70%", "2xl": "70%", base: "90%" }} margin={"auto"} my={10}>
        <Text color={"#FFEF03"} fontWeight="semibold">
          GitHub Calender:
        </Text>
        <GitHubCalendar
          username="suvam778781"
          blockSize={25}
          blockMargin={5}
          // theme={"yellow"}
          fontSize={18}
        />
      </Box>
      {/* <Image margin={"auto"} width="90%" h="250px" src="https://camo.githubusercontent.com/d9d6e1e293e6a1d2f307487eda63744dc07603b68d70af076a3b350b73e04fb5/68747470733a2f2f61637469766974792d67726170682e6865726f6b756170702e636f6d2f67726170683f757365726e616d653d737576616d3737383738312662675f636f6c6f723d30443131313726636f6c6f723d323139366633266c696e653d32313936663326706f696e743d464646464646266c61796f75743d636f6d70616374"/> */}
    </div>
  );
};
