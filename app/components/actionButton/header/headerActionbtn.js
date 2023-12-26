'use client'
import { AddIcon, BellIcon, CalendarIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { Box, Center, Flex, Spacer } from "@chakra-ui/react";
import UserIcon from '../../../../public/user.svg'
import Image from "next/image";

export default function HeaderActionButton (){
    return(
        <Box color={'white'} >
          <Flex  justifyContent={'space-between'} alignItems={'center'}>
          
           <Box ml={-5}>
             <Flex gap={38}>
               <Box bg={'white'} borderRadius={4} pb={1} pt={0.5} pr={2.5} pl={2.5} ><AddIcon color={'black'} boxSize={2}/></Box>
            
            <Box ><CalendarIcon boxSize={7}/></Box>
            
            <Box><BellIcon boxSize={8}/></Box>
             </Flex>
           </Box>
            
            <Box ml={10} >
                <Flex alignItems={'center'} gap={3}>
                   <Box><Image src={UserIcon} alt="user icon"/></Box>
                   
                    <Box>Ahmed Ali</Box>
                      
                    <Box mt={-2} ><TriangleUpIcon /></Box>
                </Flex>
            </Box>
         
            </Flex>
        </Box>
     
    )
}
