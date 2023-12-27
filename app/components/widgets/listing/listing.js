import { Box, Flex, Text } from "@chakra-ui/react";
import ListingCard from "../card/listing/card";
import Image from "next/image";
import Bookmark from '../../../../public/Bookmark 2.svg'



export default function Listing(){
    const listingData = [{
        title :"Most Viewed",
        color : '#12D8A0'
    },
    {
        title :"Most Shared",
        color : '#4545FE'
    },
  
].map((data, key)=>{
    return <ListingCard title={data?.title} borderColor = {data?.color} key={key} width={'200px'}/>
})
    return(
        <Box bg={'white'} borderRadius={10} p={5} h={287} pt={3}>
          <Box> <Text fontWeight={600} fontSize={20}>Listing Overview</Text></Box>
            <Box>
                <Flex justifyContent={'space-between'} gap={3}>
                {listingData}
                </Flex>
            </Box>
           <Box bg={'#F5F5F5'} borderRadius={10} pl={3} pr={3} pb={2} mt={3} pt={0.2}>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Box  >
                    <ListingCard title={"Most watchlisted"} borderColor = {"#FF9103"} width={'206px'}/>
                </Box> 
                <Box border={'1px solid #E4E4E4'}  bg={'white'} borderRadius={12} w={189} p={2} mb={-9}>
                    <Box  border={1} >
                       <Box>
                         <Flex justifyContent={'space-between'}>
                            <Text color={'#191919'} fontWeight={400} fontSize={24}>0</Text>
                            <Image src={Bookmark} alt="Bookmark" />
                        </Flex>
                       </Box>
                        <Box>
                            <Text fontWeight={500} fontSize={10}>Number of watchlist</Text>
                        </Box>
                    </Box>
                </Box>  
            </Flex>
           </Box>

        </Box>
    )
}
