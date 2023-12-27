import { Box } from "@chakra-ui/react";
import Image from "next/image";
import ThumbnailImg from '../../../../public/Vector.svg'

export default function Thumbnail({width, height}){
    return(
        <Box>
            <Box bg={'#F5F5F5'} borderRadius={10} p={4} >
                <Image src={ThumbnailImg} width={width} height={height} alt="thumbnail"/>
            </Box>
        </Box>
    )
}
