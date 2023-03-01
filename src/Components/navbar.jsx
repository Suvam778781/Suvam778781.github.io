
import { HamburgerIcon } from "@chakra-ui/icons";

import {
  Box,
  Flex,
  Link,
  useDisclosure,
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
  useToast,
  
} from "@chakra-ui/react";
import { Switch } from "@chakra-ui/switch";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Resume from "../Resume/Resume";
import '../App.css';
import { useEffect } from "react";
export default function Navbar({resume,image,setbackground,background}) {
const [value,setvalue]=useState(false)
const handleRedirect=()=>{

  window.open("https://1drv.ms/b/s!Agy8Y5ocUlKbjTxTJ_rJY8TvltFn?e=OpiAEk")
  
    }

const toast=useToast()
const handlecheck=(e)=>{
setvalue(e.target.checked)
}
useEffect(()=>{

  if(value){

    setbackground("black")
    toast({
      title: 'Theme.',
      description:"Dark Theme Activated",
      status: 'warning',
      duration: 1000,
      isClosable: true,
      // colorScheme:"red",
  
    })
  }  
  else if(!value){
    setbackground("#2C7598")   
    toast({
      title: 'Theme.',
      description:"Light Theme Activated",
      status: 'success',
      duration: 1000,
      isClosable: true,
    })
   
  }  

},[value])

  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Flex
        style={{
          width: "100%",
          zIndex: "26",
          color: "white",
          fontFamily: "sans-serif",
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
            <Link fontFamily={"cursive"} fontSize="25px" _hover={{textDecoration:"none",color:"white"}} fontWeight={"bold"} color="#FFEF03" font  display={{
              base: "none",
              md: "inherit",
              lg: "inherit",
              xl: "inherit",
              "2xl": "inherit",
            }}>@Suvam</Link>
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
            {/* <Switch  colorScheme={"#FFEF03"} isChecked={value} onChange={handlecheck}/> */}
            <Link className="Nav_link"  href="#Abouts">About</Link>
            <Link className="Nav_link" href="#Projects">Projects</Link>
            <Link className="Nav_link" href="#Skills">Skills</Link>
            <Link className="Nav_link" href="#Contacts">Contact</Link>
            <Link  onClick={handleRedirect} className="Nav_link" href={resume} download="fw20_0118-Suvam-Panda-Resume.pdf">Resume</Link>
          </HStack>
        </HStack>
        <Humburger  resume={resume} handlecheck={handlecheck} value={value} />
      </Flex>
      <Flex display={{sm:"block",md:"flex",lg:"flex"}} backgroundImage={image} backgroundRepeat="no-repeat" h={{base:"700px",md:"550px",lg:"650px",xl:"650px","2xl":"650px"}} w="100%" margin={"auto"} mb="-20px" mt="30px" p={{md:"20px"}}>
        <Box  style={{height: "290px" ,marginTop:"40px" }} pt={"30px"} w={{sm:"100%",md:"40%",lg:"40%"}} m="auto" justifyContent={"center"} alignItems="center">
          <Image 
          style={{
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px",
            // position: "relative",
            margin:"auto",
            width: "360px",
            height:"360px",
            borderRadius:"14px"  
          }}
            src="https://i.ibb.co/wMgRJ9F/IMG-20221204-200300-removebg-preview-1.jpg"
            alt="suvam_image"
        />
        </Box> 
        <Box style={{ height: "500px" }} w={{sm:"100%",md:"60%",lg:"60%"}}>
          <Resume resume={resume} />
        </Box>
      </Flex>
    </div>
  );
}

export function Humburger({resume,value,handlecheck}) {
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
        
          <Link >
            <Image w="140px" src="" />
          </Link>
          <DrawerBody>
          <br/>
            <Link href="#Abouts" onClick={onClose} _hover={{ textDecoration: "none", color: "grey" }}>
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
            <Link href="#Contacts" onClick={onClose}_hover={{ textDecoration: "none", color: "grey" }}>
              Contact
            </Link>
            <Divider py={4} />
            <Link  href={resume}  onClick={onClose}  download="fw20_0118-Suvam-Panda-Resume.pdf" _hover={{ textDecoration: "none", color: "grey" }}>
          
              Resume
            </Link>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </VStack>
  );
}
