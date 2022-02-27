import { Flex, Text } from '@chakra-ui/react';

export function Footer(){
    return(
        <Flex
         w={'100%'}
         h={'6rem'}
         justifyContent={'center'}
         alignItems={'center'}
         backgroundColor={'gray.100'}
        >
            <Text>Desenvolvido por João Luis</Text>
        </Flex>
    )
}