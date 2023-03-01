import { Flex, Heading, Box, Text, Button, Spacer, HStack, useToast, Avatar, AvatarBadge } from "@chakra-ui/react";
import {UnlockIcon} from "@chakra-ui/icons";


export default function Navbar() {
 const toast  = useToast();
 const showToast  = () => {
  toast({
    title: 'Logged out',
    description: 'Successfully logged out',
    duration:5000,
    isClosable:true,
    status: 'success',
    position: 'top',
    icon: <UnlockIcon/>
  })
 }
  return (
    <Flex as="nav" p="10px" mb="60px" alignItems="center">
      <Heading as="h1" fontSize="1.5em">Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing="20px"> 
       <Avatar img='/img/mario.png'>
         <AvatarBadge width="1.3em" bg="teal.500">
               <Text fontSize="xs" >3</Text>
         </AvatarBadge>
       </Avatar>
        <Text>mario@netninja.dev</Text>
        <Button onClick={showToast} colorScheme="purple">Logout</Button>
      </HStack>
    </Flex>
  )
}
