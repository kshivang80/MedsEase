import { Box, Heading,Checkbox,Text, Spacer } from "@chakra-ui/react";


export default function Filter(){



    return <Box border='1px solid red'  >filter
    <Heading>Filter</Heading>

    <Box>
        <Text>Catagorie</Text>
        <Box display={'flex'} gap={3} >
            <Text>Personal Care</Text>
            <Checkbox size='md' colorScheme='green' defaultChecked border={'blue'} />
        </Box>
       <Box border={'1px solid grey'} mt='20px' ></Box>

       <Box  >
        <Text>Sub catagorie</Text>
        <Box display={'flex'} flexDirection='column' gap={20} >
            <Box display={'flex'} justifyContent='space-between'   ><Text>revital</Text><Checkbox size='md' colorScheme='green' defaultChecked border={'blue'} /> </Box>
            <Box display={'flex'} justifyContent='space-between'   ><Text>revital</Text><Checkbox size='md' colorScheme='green' defaultChecked border={'blue'} /> </Box>
            <Box display={'flex'} justifyContent='space-between'   ><Text>revital</Text><Checkbox size='md' colorScheme='green' defaultChecked border={'blue'} /> </Box>
            <Box display={'flex'} justifyContent='space-between'   ><Text>revital</Text><Checkbox size='md' colorScheme='green' defaultChecked border={'blue'} /> </Box>

        </Box>
       </Box>
        

    </Box>


    
    
    </Box>
}