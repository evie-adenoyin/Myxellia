'use client'
import { Box, Flex, Text } from "@chakra-ui/react";
import AnalyticsSubWidget from "../subwidgets/analytics/analyticsSubWidget";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";


export default function Analytics({header, icon, overviewData, width, height, boxHeigth}){
   
    return (
        <Box bg={'white'}  p={5} mb={4} h={boxHeigth} boxShadow={'sm'} borderRadius={12} >
            <Box width={407}>
                <Flex justifyContent={'space-between'} alignItems={'center'}>
                    <Box>
                      <Flex gap={2} alignItems={'center'}>
                        <Image src={icon} alt='icon'/>
                        <Text fontSize={14} fontWeight={600}> {header}</Text>
                      </Flex>
                    </Box>
                    <Box>
                        <Text fontSize={12} color={'gray.300'}>View all <ChevronRightIcon boxSize={5}/></Text>
                    </Box>
                </Flex>
            </Box>
            <Box mt={4}>
               <Flex justifyContent={'space-between'}>
                 {overviewData.map((data, key)=>{
                return <AnalyticsSubWidget key={key} type={data?.type} amount={data?.amount} width={width} height={height}/>
                })}
               </Flex>
              
            </Box>
           
        </Box>
    )
}
