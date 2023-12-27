import { Box, Text } from "@chakra-ui/react";



export default function Header({headerDetails, fontSize}){
  
    return (
        <Box>
            <Text fontWeight={600} fontSize={16} mt={-1} color={headerDetails?.header?'#12D8A0':'black'}>{headerDetails?.header}</Text>
            {headerDetails?.sold? <Text  fontWeight={600} fontSize={14} color={'#CBCBCB'} mt={6}>{headerDetails?.sold}</Text>:<Text mt={fontSize?6:''}  fontWeight={600}  fontSize={fontSize?fontSize:28} color={fontSize?'#FF6A6A':'black'}> &#8358; {headerDetails?.amount}</Text>}
            <Text fontWeight={400} mb={headerDetails?.header? 2:""} fontSize={fontSize?fontSize:14}>{headerDetails?.subheader}</Text>
        </Box>
    )
}

// Total Outstanding Balance Top Selling &#8358;
