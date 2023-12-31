
import { Box, Flex, Text } from "@chakra-ui/react";


export default function AnalyticsSubWidget({amount, type,width, height}){
    return (
    <Box textAlign={'center'} border='1px' borderRadius={15} h={height} borderColor='gray.200' p={4} w={width} mr={3}>
        <Text fontSize={20} fontWeight={600}>{amount}</Text>
        <Text fontSize={14} >{type}</Text>   
    </Box>
    )
}
