'use client'
import { ArrowUpIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";


export default function SalesSubWidget({amount, color, type, iconBg, bgGradient}){
    return (
    <Box border='1px' borderRadius={15}  borderColor='gray.200' p={4} w={189} h={73} mr={3}>
       <Box>
         {bgGradient? <Text fontSize={20} fontWeight={600} bgClip='text' bgGradient='linear(to-l, #CBCBCB, black)'>&#8358; {amount}</Text>:<Text fontSize={20} fontWeight={600} color={color} >&#8358; {amount}</Text>}
       </Box>
        
       <Box >
        <Flex gap={2} alignItems={'center'}>
            <Text fontSize={10}>{type}</Text>
            <Box bg={iconBg} color={'white'} borderRadius={50} w={3} h={3} textAlign={'center'}>
            <ArrowUpIcon boxSize={2} mt={-4} />
            </Box>
            <Text fontSize={10} color={iconBg}>0%</Text>
        </Flex>
       </Box>
    </Box>
    )
}
