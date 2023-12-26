import { Box, Center, Flex, HStack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Hand from '../../../public/hand.svg'

export default function Greetings(){
    return(
        <Box bg={'rgb(247, 247, 247)'} pl={10} pr={50} pt={5} pb={5} >
            <Flex >
               <Center gap={2}> 
                <Box>
                    <Image src={Hand} alt="greetings"/>
                </Box>
                <Box>
                    <Text fontWeight={'600'} fontSize={20}>Hi Ahmed</Text>
                </Box>
                </Center>
            </Flex>
            <Box mt={3}>
                <Text>Welcome to your dashboard</Text>
            </Box>

        </Box>
    )
}
