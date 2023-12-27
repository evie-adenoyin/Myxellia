'use client'

import { SearchIcon } from "@chakra-ui/icons"
import { Box, Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import Link from "next/link"



export default function Navbar(){
    const navbarLinks =[ {
    link : 'Dashboard',
    icon : 'icon',
    href:'/dashboard'
},{
    link : 'Listings',
    icon : 'icon',
    href:'/listing'
},{
    link : 'Users',
    icon : 'icon',
    href:'/users'
},{
    link : 'Account',
    icon : 'icon',
    href:'/account'
},{
    link : 'Request',
    icon : 'icon',
    href:'/request'
},{
    link : 'Settings',
    icon : 'icon',
    href:'/settings'
},]
    return(
       <Box pl={50} pr={50} pt={5} pb={5} h={20}>
        <Box >
            <Flex justifyContent={'space-between'} alignItems={'center'} gap={20}>
                
                <Box flex={1}>
                    <Flex justifyContent={'space-between'} alignItems={'center'} >
                    {navbarLinks.map((link,key)=> <Box  key={key}><Link href={link?.href}>{link?.link}</Link></Box>)}
                    </Flex>
                </Box>
             
                <Box>
                    <InputGroup>
                    <Input 
                    pr='4.5rem'
                    type='text'
                    placeholder='Search...properties, customers here' 
                    fontSize={13}
                    width={'370px'}
                    bg={'gray.200'}
                    />
                    <InputRightElement width='4.5rem'>
                    <SearchIcon color={'gray'}/>
                    </InputRightElement>
                    </InputGroup>
                </Box>
             
            </Flex>
        </Box>
       
       </Box>
    )
}
