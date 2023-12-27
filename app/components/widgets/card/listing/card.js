import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Thumbnail from "../../thumbnail/thumbnail";
export default function ListingCard({title, borderColor, width}){
    return (
        <Box mt={4} width={width}>
           <Box> <Text fontWeight={400} fontSize={10}>{title}</Text></Box>
            <hr style={{ border:'1px solid #F5F5F5'}}/>
            <Box mt={2} w={122}>
                <Flex gap={5}>
                    <Box  borderRadius={10}  border={'1px'} borderColor={borderColor} >
                        <Thumbnail width={30}/>
                    </Box>
                    <Box>
                        <Text fontWeight={600} fontSize={16}>None</Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}
