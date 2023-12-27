'use client'

import { SearchIcon } from "@chakra-ui/icons"
import { Box, Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import Link from "next/link"
import { Icon } from "@chakra-ui/react"
import { FaCalendar, FaHome, FaMapMarkerAlt, FaUserAlt, FaWallet } from 'react-icons/fa'
import { FaGear } from 'react-icons/fa6'
import { usePathname } from "next/navigation"


export default function Navbar(){
    const navbarLinks =[ {
    link : 'Dashboard',
    icon : <Icon as={FaHome}/>,
    href:'/dashboard'
},{
    link : 'Listings',
    icon : <Icon as={FaMapMarkerAlt}/>,
    href:'/listing'
},{
    link : 'Users',
    icon : <Icon as={FaUserAlt}/>,
    href:'/users'
},{
    link : 'Account',
    icon : <Icon as={FaWallet}/>,
    href:'/account'
},{
    link : 'Request',
    icon : <Icon as={FaCalendar}/>,
    href:'/request'
},{
    link : 'Settings',
    icon : <Icon as={FaGear}/>,
    href:'/settings'
},]
const page = usePathname()
console.log(page);
    return(
       <Box pl={50} pr={50} pt={5} pb={5} h={20}>
        <Box >
            <Flex justifyContent={'space-between'} alignItems={'center'} gap={20}>
                
                <Box flex={1}>
                    <Flex justifyContent={'space-between'} alignItems={'center'} >
                    {navbarLinks.map((link,key)=> <Box borderRadius={12} boxShadow={link?.href===page?'sm':''} p={2} pl={3} pr={3} fontWeight={link?.href===page?600:''} bg={link?.href===page?'#e5e5e5':''} key={key}><Link  href={link?.href}><Flex alignItems={'center'} gap={1}>{link?.icon} {link?.link}</Flex></Link></Box>)}
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
                    bg={'#e5e5e5'}
                    border={'none'}
                    disabled
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
