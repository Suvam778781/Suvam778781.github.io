
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Container,
  position,
  Image,
  HStack,
  VStack,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Divider,
  IconButton,
  DrawerFooter,
  Drawer,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Resume from "../Resume/Resume";

export default function Navbar({resume,image}) {
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Flex
        style={{
          width: "100%",
          zIndex: "26",
          color: "white",
          fontFamily: "inherit",
          fontStyle: "-moz-initial",
          height: "50px",
          alignItems: "center",
          justifyContent: "space-around",
          margin: "auto",
          position: "fixed",
          left: "0px",
          right: "0px",
          top:"0px"
        }}
        backgroundColor="#2C7598"
      >
        <HStack justifyContent={"space-between"} w="90%" m="auto">
          <VStack>
            <Link   display={{
              base: "none",
              md: "inherit",
              lg: "inherit",
              xl: "inherit",
              "2xl": "inherit",
            }}>Home</Link>
          </VStack>
          <HStack
            display={{
              base: "none",
              md: "inherit",
              lg: "inherit",
              xl: "inherit",
              "2xl": "inherit",
            }}
            gap={{
              base: "70px",
              md: "60px",
              lg: "100px",
              xl: "100px",
              "2xl": "140px",
            }}
          >
            <Link  href="#flex1">About</Link>
            <Link href="#Projects">Projects</Link>
            <Link  href="#Skills">Skills</Link>
            <Link href="#Contact">Contact</Link>
            <Link href={resume} download="Suvam_Panda_Resume.pdf">Resume</Link>
          </HStack>
        </HStack>
        <Humburger resume={resume} />
      </Flex>
      <Flex display={{sm:"block",md:"flex",lg:"flex"}} backgroundImage={image} backgroundRepeat="no-repeat" h="650px" w="100%" margin={"auto"} mb="-20px" mt="50px">
        <Box  style={{height: "350px" ,marginTop:"50px" }} w={{sm:"100%",md:"40%",lg:"40%"}} m="auto" justifyContent={"center"} alignItems="center">
          <Image
          style={{
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            // position: "relative",
            margin: "auto",
            width: "320px",
            height:"400px",
            borderRadius:"14px"  
          }}
            src="https://i.ibb.co/kmqCjxG/IMG-20221204-134912-removebg-preview.png"
            alt="suvam_image"
        />
        </Box> 
        <Box style={{ height: "600px" }} w={{sm:"100%",md:"60%",lg:"60%"}}>
          <Resume />
        </Box>
      </Flex>
    </div>
  );
}

export function Humburger({resume}) {
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <VStack 
      zIndex={30}
      display={{
        base: "inherit",
        md: "none",
        lg: "none",
        xl: "none",
        "2xl": "none",
      }}
    >
      <IconButton ref={btnRef} backgroundColor="#2C7598"   _hover={{background:"#FFEF03"}} onClick={onOpen}>
        <HamburgerIcon />
      </IconButton>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          fontWeight={"semibold"}
          backgroundColor={"#2C7598"}
          color="white"
        >
          <DrawerCloseButton />
          <Link>
            <Image w="140px" src="" />
          </Link>
          <DrawerBody>
            <Link href="#About" onClick={onClose} _hover={{ textDecoration: "none", color: "grey" }}>
              About
            </Link>
            <Divider py={3}/>
            <Link href="#Projects" onClick={onClose} _hover={{ textDecoration: "none", color: "grey" }}>
            Projects
            </Link>
            <Divider py={3} />
            <Link href="#Skills" onClick={onClose} _hover={{ textDecoration: "none", color: "grey" }}>
              Skills
            </Link>
            <Divider py={4} />
            <Link href="#Contact" onClick={onClose}_hover={{ textDecoration: "none", color: "grey" }}>
              Contact
            </Link>
            <Divider py={4} />
            <Link  href={resume}  onClick={onClose}  download="Suvam_Panda_Resume.pdf" _hover={{ textDecoration: "none", color: "grey" }}>
              Resume
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </VStack>
  );
}
