import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import SalesSubWidget from "../subwidgets/sales/salesSubwidget";
import Image from "next/image";
import ArrowLeft from '../../../../public/arrowleft.svg'
import ArrowRight from '../../../../public/arrowright.svg'


export default function Sales(){
    const timeFilter = [
        {
            value : 1,
            time:'Week'
        },
        {
            value : 1,
            time:'Month'
        },{
            value : 1,
            time:'Year'
        }
    ]
    return (
        <Box  bg={'white'} borderRadius={12} h={325}>
            <Box p={5}>
                <Flex justifyContent={'space-between'}>
                    <Box> 
                        <Text fontWeight={600} fontSize={20}>Sales Overview</Text>
                        <Text fontSize={12}>Showing overview Jan 2022 - Sep 2022</Text> 
                    </Box>
                    <Box>
                        <Box>
                            <Box mb={5}>
                            <Flex justifyContent={'end'}>
                                <Button borderRadius={15} h={46} w={177} bg={'transparent'} border='1px' borderColor='gray.200' variant='outline' pr={8} pt={6} pb={6} pl={8} color={'gray.300'}>
                                    <Text fontSize={12} fontWeight={200}>View Transactions</Text>
                                </Button>
                            </Flex>
                            </Box>

                            <Box>
                                <Flex justifyContent={'space-between'} alignItems={'center'} gap={8} >
                                    {timeFilter.map((time,key)=> 
                                        <Box key={key}>
                                            <Link  fontWeight={time?.time==="Year"?600:''} borderRadius={12} boxShadow={time?.time==="Year"?'sm':''} p={2} pl={5} pr={5} bg={time?.time==="Year"?'#e5e5e5':''}  fontSize={14} href={time?.time}>{time?.value} {time?.time}</Link>
                                        </Box>  
                                    )}   
                                </Flex>
                            </Box>

                        </Box>
                    </Box>
                </Flex>
            </Box> 
            <hr />
            <Box p={5} mt={-1} pl={3} pr={2}>
               <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Box >
                    <Flex >
                        <Box >
                           <Flex gap={5} alignItems={'center'}>
                             <Flex justifyContent={'center'} alignItems={'center'} borderRadius={50} w={8} h={8} bg={'#E4E4E4'}>
                                <Box> <Image src={ArrowLeft} alt="ArrowLeft" /></Box>  
                            </Flex>
                           <Flex>
                             <Box flex={2} w={250} borderBottom={"1px solid #E4E4E4"} borderRight={"1px solid #E4E4E4"} h={120} >
                            </Box>
                           </Flex>
                            <Flex justifyContent={'center'} alignItems={'center'} borderRadius={50} w={8} h={8} bg={'#E4E4E4'}>
                                 <Box> <Image src={ArrowRight} alt="ArrowLeft" /></Box>
                            </Flex>
                           </Flex>
                        </Box>
                    </Flex>
                </Box>
                <Box >
                     <Flex>
                        <SalesSubWidget amount={'0.00'} type={'Balance'} color={'blue'} iconBg={'#12D8A0'}/>
                        <SalesSubWidget amount={'0.00'} type={'Deposit'} color={'#12D8A0'} iconBg={'#12D8A0'}/>
                    </Flex>
                    <Flex mt={3}>
                        <SalesSubWidget amount={'0.00'} type={'Purchase'} color={'black'} iconBg={'#12D8A0'}/>
                        <SalesSubWidget amount={'0.00'} type={'Withdrawal'} color={'#FF6A6A'} iconBg={'#FF6A6A'}/>
                    </Flex>
                </Box>
               </Flex>
            </Box>   
        </Box>
    )
}
