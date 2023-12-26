import { Box, Flex, Text } from "@chakra-ui/react";
import WidgetContainer from "../widgets/container/container";
import Sales from "../widgets/sales/sales";
import Overview from "../widgets/overview/overview";


export default function DashboardLayout(){
     const overviewTopData = [
        {
            amount:0,
            type:'Total'
        }, 
        {
            amount:0,
            type:'Available'
        }, 
        {
            amount:0,
            type:'Sold Out'
        }, 
    ]
     const overviewBottomData = [
        {
            amount:0,
            type:'Total'
        }, 
        {
            amount:0,
            type:'New'
        }, 
        {
            amount:0,
            type:'Active'
        }, 
        {
            amount:0,
            type:'Inactive'
        }, 
    ]
    const overview=[
        {
            header:"Property Overview",
            icon:'icon',
            id:1
        },
        {
            header:"Customers Overview",
            icon:'icon',
            id:2
        },
    ].map((data, key)=>{
        return <Overview header={data?.header} icon={data?.icon} width={data?.id===1?'140px':'100px'} overviewData={data?.id===1?overviewTopData:overviewBottomData} key={key}/>
    })
    return (
        <Box mt={-5} bg={'rgb(247, 247, 247)'} pl={42} pr={42} pt={5} pb={5}>
          <Box>
            <Flex gap={5}>
                <Box flex={1}>
                     <Sales />
                </Box>
                <Box >
                   {overview}
                </Box>
                
            </Flex>
          </Box>
        </Box>
    )
}
