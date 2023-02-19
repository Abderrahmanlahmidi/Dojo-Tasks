import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

// components
import Navbar from "../components/Navbar"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      {/* sidebar */}
      <GridItem
        as="aside"
        colSpan={{base:6, lg:2, xl:1}}
        bg="purple.400"
        minHeight={{lg:"100vh"}}
        p="30px"
      >
        <Sidebar/>
      </GridItem>

      {/* main content & navbar */}
      <GridItem
        as="main"
        p="40px"
        colSpan={{base:6, lg:4, xl:5}}
      >
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
