import { ChatIcon, CheckCircleIcon, EmailIcon, LinkIcon, StarIcon, WarningIcon } from "@chakra-ui/icons";
import { TabList, Tabs, Tab, TabPanel, TabPanels, List, ListItem, ListIcon } from "@chakra-ui/react";


export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
       <TabList>
        <Tab _selected={{color:'white', bg: 'purple.400'}} >Account Info</Tab>
        <Tab _selected={{color:'white', bg: 'purple.400'}} >Task History</Tab>
       </TabList>
       
       <TabPanels>
         <TabPanel>
           <List>
             <ListItem>
               <ListIcon as={EmailIcon} />
               Abderrahmane@gmail.com
             </ListItem>
             <ListItem>
             <ListIcon as={ChatIcon} />
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </ListItem>
              <ListItem>
              <ListIcon as={StarIcon} />
                Lorem ipsum dolor sit amet consectetur.
              </ListItem>
           </List>
         </TabPanel>

         <TabPanel spacing={4} >
           <List>
              <ListItem>
                 <ListIcon as={CheckCircleIcon} color="teal.400" />
                   Lorem ipsum dolor sit amet consectetur.
                 </ListItem>
               <ListItem>
                 <ListIcon as={CheckCircleIcon} color="teal.400" />
                    Lorem ipsum dolor sit amet consectetur.
                 </ListItem>
               <ListItem>
                 <ListIcon as={WarningIcon} color="red.400" />
                    Lorem ipsum dolor sit amet consectetur.
                 </ListItem>
               <ListItem>
                  <ListIcon as={CheckCircleIcon} color="teal.400" />
                     Lorem ipsum dolor sit amet consectetur.
                  </ListItem>
               <ListItem>
                 <ListIcon as={WarningIcon} color="red.400" />
                    Lorem ipsum dolor sit amet consectetur.
                 </ListItem>
           </List>
         </TabPanel>
       </TabPanels>
    </Tabs>
  )
}
