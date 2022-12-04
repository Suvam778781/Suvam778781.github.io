
import { Box, Container, Grid,Image,Link,Text } from "@chakra-ui/react";
import React from "react";
// import { Link } from "react-router-dom";
export const Github1 = () => {
  return (
    <div >
           <h1>Github Stats</h1>
        <Grid templateColumns={{base:"repeat(1,1fr)",lg:"repeat(2,1fr)",xl:"repeat(2,1fr)","2xl":"repeat(2,1fr)"}}   width="80%" justifyContent={"center"} alignItems="center"  margin={"auto"} >
      <Box className="StatsChild1">
        
          <Image w="500px" margin={"auto"}
            // align="left"
            src="https://github-readme-streak-stats.herokuapp.com?user=suvam778781&theme=radical"
          />
        </Box>
        <Box w="100%">
          <Image margin={"auto"} w="500px"
            // align="left"
            src="https://github-readme-stats.vercel.app/api?username=suvam778781&theme=radical&count_private=true&show_icons=true" //stats
          />
        
      </Box>
      </Grid>
<Box className="StatsChild2">
          <Image margin={"auto"} h="190px"  w={{md:"200px",sm:"180px"}}
            // align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=suvam778781&theme=radical"  //launguages
          />
        
      </Box>
      <Text>GitHub Calender:</Text>

      <Image margin={"auto"} width="90%" h="250px" src="https://camo.githubusercontent.com/d9d6e1e293e6a1d2f307487eda63744dc07603b68d70af076a3b350b73e04fb5/68747470733a2f2f61637469766974792d67726170682e6865726f6b756170702e636f6d2f67726170683f757365726e616d653d737576616d3737383738312662675f636f6c6f723d30443131313726636f6c6f723d323139366633266c696e653d32313936663326706f696e743d464646464646266c61796f75743d636f6d70616374"/>
    </div>
  );
};


