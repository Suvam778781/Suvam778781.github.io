import React from 'react'
import { EmailIcon } from '@chakra-ui/icons';
import {Text} from "@chakra-ui/react"
// import {MdGraphicEq } from 'react-icons/md'

import { Box, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb, Link,}
 from '@chakra-ui/react'
// import "../CssPages/About.css"
const About = () => {
  return (
    <>
    <div  className="slider">
     <RangeSlider aria-label={['min', 'max']} defaultValue={[0, 100]}>
  <RangeSliderTrack bg='skyblue'>
    <RangeSliderFilledTrack bg='black' />
  </RangeSliderTrack>
</RangeSlider>
</div>  


{/* section for about */}
 <Box  w="70%" margin={"auto"} color="black" alignItems={"center"} justifyContent="center" className='About' >
    <Text fontSize={"30px"} color="#FFEF03"  mt="20px"fontWeight="bold" >About</Text>

    {/* Heading */}

    <Box color={"white"}>
    <h2>I'm Suvam Swagatam Panda</h2>
    {/* Description */}
    <p>Observant & detail-oriented aspiring full-stack web developer with a specialization in MERN stack. Judicious & creative when crafting web applications & platforms to propel competitive advantage & revenue growth. Looking forward to honing his skills in a challenging work environment.</p>
<Text fontSize={"15px"}>Drop a mail @<Link href="mailto:suvamswagatamp@gmail.com"><  Text  style={{textDecoration:"none",color:'#FFEF03',cursor:"pointer"}} >
    suvamswagatamp@gmail.com </Text ></Link> <EmailIcon/> </Text>
    </Box>
 </Box>
 </>
    
  )
}


export default About