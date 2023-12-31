
import { Box } from "@chakra-ui/react"
import Header from "../components/header/header"
import Navbar from "../components/navbar/navbar"
import Layout from "./layout"
import Greetings from "../components/greetings/greetings"
import DashboardLayout from "../components/dashboardLayout/dashboardLayout"

export default function Home() {
  return (
  <Layout>
     <Header/>
     <Navbar/>
    <Greetings />
    <DashboardLayout/>
  </Layout>
  )
}
