"use client"
import { ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Flex, Link, Text } from "@chakra-ui/react";
import Header from "./header";
import Thumbnail from "../../thumbnail/thumbnail";
import CardNavigation from "./cardNav";


export default function TotalCard({width, headerDetails, cardHeadetails, thumbnail}){
    return (
        <Box w={width} bg={'white'} h={287} borderRadius={12} p={5} pt={3}>
          <Box>
             <Flex justifyContent={'space-between'}>
               <Header headerDetails={headerDetails} />
               {headerDetails?.header?'': <Box>
                    <Link fontSize={12} color={'gray.300'}>View all <ChevronRightIcon boxSize={5}/></Link>
                </Box>}
           </Flex>
          </Box>
          <Box mt={3.5}>
            <Flex gap={4} mt={headerDetails?.header?-2:10}>
                <Box  bg={'#F5F5F5'} borderRadius={10} p={3} height={thumbnail?.height} width={thumbnail?.width}>
                     <Thumbnail  width={thumbnail?.width}/>
                </Box>
                <Box >
                    <Text fontWeight={600} fontSize={20}>None</Text>
                    <Header headerDetails={cardHeadetails} fontSize={12} />
                    <Box mt={10}>
                        <CardNavigation />
                    </Box>
                </Box>
            </Flex>
          </Box>
        </Box>
    )
}
