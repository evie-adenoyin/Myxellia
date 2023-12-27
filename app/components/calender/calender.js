import { useState } from "react"
import { Box, Drawer, DrawerBody, DrawerContent, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import CalenderIcon from '../../../public/Calender.svg'
import Image from "next/image"
 export default function Calender({icon}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
 

  return (
    <>
      <Box colorScheme='blue' onClick={onOpen}>
        {icon}
      </Box>
      <Drawer placement={'right'} onClose={onClose} isOpen={isOpen} size={'md'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody>
            <Image width={400} src={CalenderIcon} alt="calender"/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
