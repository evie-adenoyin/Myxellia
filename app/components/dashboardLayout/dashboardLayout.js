import { Box, Flex, Text } from "@chakra-ui/react";
import WidgetContainer from "../widgets/container/container";
import Sales from "../widgets/sales/sales";
import Analytics from "../widgets/analytics/analytics";
import Listing from "../widgets/listing/listing";
import TotalCard from "../widgets/card/total/total";


export default function DashboardLayout(){
     const analyticsTopData = [
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
     const analyticsBottomData = [
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
    const analyticsData=[
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
        return <Analytics header={data?.header} icon={data?.icon} height={79} width={data?.id===1?'117px':'88px'} overviewData={data?.id===1?analyticsTopData:analyticsBottomData} key={key} boxHeigth={data?.id===1?'157px':'151px'}/>
    })

  
    return (
        <Box mt={-5} bg={'rgb(247, 247, 247)'} pl={42} pr={42} pt={5} pb={5}>
          <Box>
            <Flex gap={4}>
                <Box flex={1} boxShadow={'sm'} borderRadius={12} h={325}>
                     <Sales />
                </Box>
                <Box>
                   {analyticsData}
                </Box>      
            </Flex>
          </Box>
          <Box>
             <Flex gap={4}>
                <Box flex={2} boxShadow={'sm'} borderRadius={12}>
                    <Listing/>
                </Box>
                <Box boxShadow={'sm'} borderRadius={12} w={418}>
                   <TotalCard 
                        thumbnail={{width:154,heigth:155}}  
                        headerDetails={{amount:'0.00', subheader:'Total Outstanding Balance'}} 
                        cardHeadetails={{amount:'0.00', subheader:'Outstanding Balance'}}
                    />
                </Box>      
                <Box boxShadow={'sm'} borderRadius={12} w={350}>
                    <TotalCard 
                        thumbnail={{width:161,heigth:155}} 
                        headerDetails={{header:'Top Selling',amount:'0.00', subheader:'Total Sold'}} 
                        cardHeadetails={{sold:'0', subheader:'Whole units sold'}}
                    />
                </Box>      
            </Flex>
          </Box>
        </Box>
    )
}
