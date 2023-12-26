import { Box, Flex, Spacer } from "@chakra-ui/react"
import Logo from '../../../public/Logo.svg'
import Image from "next/image"
import HeaderActionButton from "../actionButton/header/headerActionbtn"


export default function Header(){
    return(
    <Box bg={'black'} pl={50} pr={50} pt={5} pb={5}>
       <Flex>
         <Box>
            <Image src={Logo} alt="Company logo" />
        </Box>
        <Spacer/>
        <Box w='400px' >
            <HeaderActionButton />
        </Box>
       </Flex>
    </Box>)
}
