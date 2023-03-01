import {Box, Card, Button, CardBody, CardFooter, CardHeader, Flex, Heading, HStack, SimpleGrid, Text, Divider, Avatar} from "@chakra-ui/react";
import {EditIcon, ViewIcon} from "@chakra-ui/icons"
import {useLoaderData} from "react-router-dom";

export default function Dashboard() {
  const tasks = useLoaderData()
  
  return (
    <SimpleGrid  spacing={10} minChildWidth="300px">
      {tasks && tasks.map(task => (
        <Card key={task.id} borderTop="8px"  borderColor="purple.400" bg="white">
          <CardHeader>
            <Flex>
              <Avatar src={task.img} sx={{mr:"15px"}} />
              <Box>
                <Heading size="sm" as="h3" >{task.title}</Heading>
                <Text>by {task.author}</Text>
              </Box>
            </Flex>
          </CardHeader>  

          <CardBody color="gray.500">
            <Text>{task.description}</Text>
          </CardBody>

          <Divider borderColor="gray.300" />
          
          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon/>} >Watch</Button>
              <Button variant="ghost" leftIcon={<EditIcon/>} >Comment</Button>
            </HStack>                      
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  )
}


export const taskLoader = async () => {
  const res = await fetch("http://localhost:5000/tasks");
  return res.json();
}