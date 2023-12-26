'use client'
import { AddIcon, BellIcon, CalendarIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Spacer } from "@chakra-ui/react";
import UserIcon from '../../../../public/user.svg'
import Image from "next/image";

export default function HeaderActionButton (){
    return(
        <Box color={'white'}>
           <Center gap={6}> 
             <Box bg={'white'} borderRadius={4} pb={1} pt={0.5} pr={2.5} pl={2.5} ><AddIcon color={'black'} boxSize={2}/></Box>
            
            <Box ><CalendarIcon boxSize={7}/></Box>
            
            <Box><BellIcon boxSize={8}/></Box>
            
            <Box ml={10}>
                <Flex>
                    <Center gap={1}><Box><Image src={UserIcon} alt="user icon"/></Box>
                      <Spacer/>
                    <Box>Ahmed Ali</Box>
                      <Spacer/>
                    <Box mt={-2}><TriangleUpIcon /></Box></Center>
                </Flex>
            </Box>
            </Center>
        </Box>
     
    )
}
