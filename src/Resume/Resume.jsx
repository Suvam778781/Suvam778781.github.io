import { Box, Button, HStack, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import {Typewriter} from "react-simple-typewriter";

function Resume(props) {
  return (
    <Box
      style={{
        // transform: "scale(1.05)",
        transition: "0.s",
        marginTop: "100px",
        fontFamily: "sans-serif",
        color: "black",
        padding: "30px",
        height: "30px",
        fontWeight: "bolder",

      }}
      color="black"
      bgClip="text"
      fontSize={{sm:"16px",md:"18px",lg:"25px",xl:"27px","2xl":"27px"}}
    >
      <Typewriter
                  words={['I Am ','  Full Stack Web Developer.', ' Critical Thinker.', '  Problem Solver.']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  cursorBlinking={false}
                  typeSpeed={50}
                  deleteSpeed={10}
                  delaySpeed={100}
                />
      <Text w="80%" margin={"auto"} color="white" fontSize={{base:"10px",sm:"10px",md:"12px",lg:"14px",xl:"14px","2xl":"15px"}}>I am a web developer with a vast array of knowledge in many different frontend and backend languages, responsive frameworks, database, and best code practices.</Text>

      <HStack h="100px" w={{md:"50%",sm:"50%"}} m="auto" mb={"30px"} justifyContent={"center"}>
        {/* all social icons */}
        <Link href="https://www.linkedin.com/in/suvam-swagatam-panda-9ab359236/" target={"_blank"}>
          <Image
            className="icons"
            src="https://www.iconpacks.net/icons/1/free-icon-linkedin-94.png"
          />
        </Link>
        <Link href="https://github.com/suvam778781" target={"_blank"}>
        <Image
          className="icons"
          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
        />
        </Link>

        <Link href="mailto:suvamswagatamp@gmail.com" target={"_blank"}>
        <Image
          className="icons"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gaFBPz1yn-ic4TgN86J1sg_STn-o7svkOkKFwXur&s"
        />
</Link>
<Link href="tel:+917008369373" target={"_blank"}>
        <Image 
          className="icons"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDtKm0I-RX-tN2Aw8zJ76ZvA4eDqDvxVqICg&usqp=CAU"
        />
        </Link>
      </HStack>

      <Link fontSize={"16px"} p="9px" w="100px" h="40px" bgColor="white" _hover={{textDecoration:"none"}} borderRadius={"3px"} color="#2C7598" href={props.resume} download="fw20_0118-Suvam-Panda-Resume.pdf">Resume</Link>
    </Box>
  );
}
export default Resume;
