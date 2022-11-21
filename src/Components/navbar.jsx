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

export default function Navbar() {
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
        }}
        backgroundColor="black"
      >
        <HStack justifyContent={"space-between"} w="90%" m="auto">
          <VStack>
            <Link>Suvam Panda</Link>
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
              base: "90px",
              md: "100px",
              lg: "120px",
              xl: "130px",
              "2xl": "140px",
            }}
          >
            <Link href="#flex1">About</Link>
            <Link>Skills</Link>
            <Link>Contact</Link>
            <Link>Resume</Link>
          </HStack>
        </HStack>
        <Humburger />
      </Flex>
      <Flex>
        <Box style={{ width: "40%", height: "600px" }}>
          <Image
            h="100%"
            src="https://wallpapers.com/images/hd/black-background-with-leaf-silhouette-h75rqrhfknqauvbo.webp"
          />
        </Box>
        <img
          style={{
            position: "relative",
            left: "-100px",
            margin: "auto",
            width: "210px",
            height: "180px",
            borderRadius: "50%",
          }}
          src=""
        />

        <div style={{ width: "60%", background: "white", height: "600px" }}>
          <Resume />
        </div>
      </Flex>
    </div>
  );
}
export function Humburger() {
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
      <IconButton ref={btnRef} backgroundColor="ActiveBorder" background="black"  _hover={{background:"black"}} onClick={onOpen}>
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
          backgroundColor={"black"}
          color="white"
        >
          <DrawerCloseButton />
          <Link>
            <Image w="140px" src="" />
          </Link>
          <DrawerBody>
            <Link _hover={{ textDecoration: "none", color: "grey" }}>
              About
            </Link>
            <Divider py={3} />
            <Link _hover={{ textDecoration: "none", color: "grey" }}>
              Skills
            </Link>
            <Divider py={4} />
            <Link _hover={{ textDecoration: "none", color: "grey" }}>
              Contact
            </Link>
            <Divider py={4} />
            <Link _hover={{ textDecoration: "none", color: "grey" }}>
              Resume
            </Link>
          </DrawerBody>
          <DrawerFooter>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </VStack>
  );
}
