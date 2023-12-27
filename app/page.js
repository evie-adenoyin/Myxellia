'use client'
import { Link } from '@chakra-ui/next-js'
import { Box, Text, Flex } from '@chakra-ui/react'


export default function Home() {
  return (
    <main>
     <Flex alignItems={'center'} justifyContent={'center'} p={30}>
       <Box>
        <Box>
            <Box >
             <Text fontSize={40}> Welcome to Myxellia...</Text>
            </Box>
           <Flex justifyContent={'center'}>
             <Link href='/dashboard' color='blue.400' _hover={{ color: 'blue.500' }}>
              View Dashboard
            </Link>
           </Flex>
        </Box>
      </Box>
     </Flex>
    </main>
  )
}
