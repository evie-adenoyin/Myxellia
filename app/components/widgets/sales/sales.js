import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import WidgetContainer from "../container/container";
import SalesSubWidget from "../subwidgets/sales/salesSubwidget";


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
        <Box  bg={'white'} borderRadius={12} h={325} >
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
                                <Flex justifyContent={'space-between'} alignItems={'center'} gap={14} >
                                    {timeFilter.map((time,key)=> 
                                        <Box key={key}>
                                            <Link fontSize={14} href={time?.time}>{time?.value} {time?.time}</Link>
                                        </Box>  
                                    )}   
                                </Flex>
                            </Box>

                        </Box>
                    </Box>
                </Flex>
            </Box> 
            <hr />
            <Box p={5} mt={-1}>
                <Flex>
                    <SalesSubWidget amount={'0.00'} type={'Balance'} color={'blue'} iconBg={'#12D8A0'}/>
                    <SalesSubWidget amount={'0.00'} type={'Deposit'} color={'#12D8A0'} iconBg={'#12D8A0'}/>
                </Flex>
                <Flex mt={3}>
                    <SalesSubWidget amount={'0.00'} type={'Purchase'} color={'black'} iconBg={'#12D8A0'}/>
                    <SalesSubWidget amount={'0.00'} type={'Withdrawal'} color={'#FF6A6A'} iconBg={'#FF6A6A'}/>
                </Flex>
            </Box>   
        </Box>
    )
}
