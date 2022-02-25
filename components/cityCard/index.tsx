import { Flex, Text, Box, Image } from '@chakra-ui/react';

export function CityCard(){
    return(
       <Flex
        w={'256px'}
        h={'279px'}
        flexDirection={'column'}
        alignItems={'center'}
        backgroundColor={'white'}
        borderRadius={'0.4rem'}
        border={'0.1px solid orange'}
       >
           <Image borderTopRadius={'0.4rem'} h={'173px'} src='../assets/africa.jpg' />

           <Flex  padding={'1rem'} alignItems={'center'} justifyContent={'space-between'}>
              <Flex
                flexDirection={'column'}
                marginRight={'3rem'}
              >
                <Text as={'strong'}>Aldeia</Text>
                <Text color={'gray.400'} as={'span'}>África do sul</Text>
              </Flex>
              <Image w={'30px'} h={'30px'} borderRadius={'50%'} src='../assets/SouthAfrica.jpg' />
           </Flex>

       </Flex>
    )
}