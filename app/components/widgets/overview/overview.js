'use client'
import { Box, Flex, Text } from "@chakra-ui/react";
import OverViewSubWidget from "../subwidgets/overview/overviewSubWidget";
import { ChevronRightIcon } from "@chakra-ui/icons";


export default function Overview({header, icon, overviewData, width}){
   
    return (
        <Box bg={'white'} borderRadius={10} p={5} mb={5}>
            <Box>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <Box>
                        <Text fontSize={14} fontWeight={600}>{icon} {header}</Text>
                    </Box>
                    <Box>
                        <Text fontSize={12} color={'gray.300'}>View all <ChevronRightIcon boxSize={5}/></Text>
                    </Box>
                </Flex>
            </Box>
            <Box mt={4}>
               <Flex justifyContent={'space-between'}>
                 {overviewData.map((data, key)=>{
                return <OverViewSubWidget key={key} type={data?.type} amount={data?.amount} width={width} />
                })}
               </Flex>
              
            </Box>
           
        </Box>
    )
}
