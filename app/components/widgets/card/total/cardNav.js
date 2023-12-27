import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import ArrowRight from '../../../../../public/arrowright.svg'
import ArrowLeft from '../../../../../public/arrowleft.svg'


export default function CardNavigation(){
    return(
            <Box float={'right'}>
                <Flex alignItems={'center'} gap={3}>
                    <Box>
                        <Text fontSize={14} fontWeight={400}>1/5</Text>
                    </Box>
                    <Box>
                    <Flex gap={2}>
                        <Flex justifyContent={'center'} alignItems={'center'} borderRadius={50} w={8} h={8} bg={'#E4E4E4'}>
                        <Box> <Image src={ArrowLeft} alt="ArrowLeft" /></Box>
                        </Flex>
                        <Flex justifyContent={'center'} alignItems={'center'} borderRadius={50} w={8} h={8} bg={'#E4E4E4'}>
                        <Box> <Image src={ArrowRight} alt="ArrowRight" /></Box>
                        </Flex>
                    </Flex>
                    </Box>
                </Flex>
            </Box>
            )
}
