

import { Box, Flex, Heading, Image } from "@chakra-ui/react"

export const Loading = () => {
    return <Flex width='100%' h='70vh' bg='white' justify='center' align='center'  boxShadow={'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;'} >
        
        <Flex w='50%'   borderRadius='25px'  justify='center' align='center' direction='column'>
          
            <Image src='https://cdn.dribbble.com/users/2046015/screenshots/5973727/06-loader_telega.gif'  />

        </Flex>
    </Flex>
}
