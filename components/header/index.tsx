import {Flex} from '@chakra-ui/react';

export function Header(){
    return(
        <Flex
         w={'100%'}
         h={'20'}
         justifyContent={'center'}
         alignItems={'center'}
         backgroundColor={'gray.100'}
        >
            <img src="../assets/Logo.svg" alt="logo" />
        </Flex>
    )
}