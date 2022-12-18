

import { Box, Flex, Heading, Image } from "@chakra-ui/react"

export const Loading = () => {
    return <Flex width='100%' h='70vh' bg='white' justify='center' align='center'   >
        
        <Flex w='50%'   borderRadius='25px'  justify='center' align='center' direction='column'>
          
            <Image src='https://cdn.dribbble.com/users/2046015/screenshots/5973727/06-loader_telega.gif'  />

        </Flex>
    </Flex>
}
