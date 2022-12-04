import { Icon } from "@chakra-ui/icons";

import {
  Box,
  Flex,
  Input,
  Image,
  Button,
  Container,
  VStack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  Text,
  HStack,
} from "@chakra-ui/react";
import React from "react";

function Contact() {
  return (
    <Box h="auto">
      <div className="slider">
        <RangeSlider aria-label={["min", "max"]} defaultValue={[0, 100]}>
          <RangeSliderTrack bg="skyblue">
            <RangeSliderFilledTrack bg="black" />
          </RangeSliderTrack>
        </RangeSlider>
      </div>
      <Text fontSize={"30px"} color="#FFEF03" fontWeight="semibold">
        Contacts
      </Text>
      <Flex
        id="Contact"
        display={{
          base: "inherit",
          sm: "inherit",
          md: "flex",
          lg: "flex",
          xl: "flex",
          "2xl": "flex",
        }}
        w="90%"
        my="50px"
        margin={"auto"}
      >
        <Box
          color="black"
          lineHeight={"40px"}
          mx="auto"
          w={{ sm: "90%", md: "90%", lg: "60%", xl: "60%", "2xl": "60%" }}
          margin="auto"
        >
          <VStack
            backgroundColor={"#2C7598"}
            w={{ xsm: "90%", sm: "90%", md: "90%", lg: "60%", "2xl": "60%" }}
            rowGap={"20px"}
            borderRadius={"10px"}
            boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
            margin={"auto"}
            my="30px"
            p="20px"
          >
            <Box w="100%">
              <Input
                w="90%"
                backgroundColor="#FFEF03"
                _placeholder={{ color: "#2C7598" }}
                placeholder={"Enter Name..."}
              />
            </Box>
            <Box w="100%">
              <Input
                w="90%"
                _placeholder={{ color: "#2C7598" }}
                backgroundColor="#FFEF03"
                placeholder={"Enter Email..."}
              />
            </Box>
            <Box w="100%">
              <Input
                w="90% "
                h="60px"
                _placeholder={{ opacity: 1, color: "#2C7598" }}
                backgroundColor="#FFEF03"
                placeholder={"Enter Your Message..."}
              />
            </Box>
            <Button color={"#2C7598"} mt="20px">
              SUBMIT
            </Button>
          </VStack>
        </Box>
        <Box
          w={{ sm: "90%", md: "90%", lg: "40%", xl: "40%", "2xl": "40%" }}
          margin="auto"
          my="30px"
          boxShadow="gba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        >
          <Image
            borderRadius={"10px"}
            w="90%"
            margin={"auto"}
            h="300px"
            src="https://camo.githubusercontent.com/591bf3579e2484f58aee03bd9ed1bb9a12aab4a271770dfcd5fd3eddca3f0b86/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f3837352f302a4647443642557a7a5a7331564a4c75592e676966"
          />
        </Box>
      </Flex>
      <HStack  h="100px"  w="20%" m="auto" mb={"60px"} justifyContent={"center"}>
        {/* all social icons */}
        <Image className="icons" boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" m="auto" p="10px" backgroundColor={"white"}  borderRadius="10px" w="60px" h="60px"  src="https://www.iconpacks.net/icons/1/free-icon-linkedin-94.png"/>
        <Image className="icons" boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" m="auto" p="10px" backgroundColor={"white"}  borderRadius="10px" w="60px" h="60px"  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"/>\
        <Image className="icons" boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" m="auto" p="10px" backgroundColor={"white"}  borderRadius="10px" w="60px" h="60px"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gaFBPz1yn-ic4TgN86J1sg_STn-o7svkOkKFwXur&s"/>
        <Image className="icons"      boxShadow="rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"m="auto" p="10px" backgroundColor={"white"}  borderRadius="10px" w="60px" h="60px"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDtKm0I-RX-tN2Aw8zJ76ZvA4eDqDvxVqICg&usqp=CAU"/>
      </HStack>
    </Box>
  );
}

export default Contact;
