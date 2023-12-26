'use client'
import { AddIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/react";


export default function HeaderActionButton (){
    return(
        <Flex>
            <Box bg={'white'} borderRadius={4} p={2}><AddIcon/></Box>
            <Box>icon 1</Box>
            <Box>icon 1</Box>
            <Box>icon 1</Box>
        </Flex>
    )
}
