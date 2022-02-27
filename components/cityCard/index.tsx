import { Flex, Text, Box, Image } from '@chakra-ui/react';

interface CityCardProps{
  name: string,
  capital: string,
  urlImg: string
}

export function CityCard({ name, capital, urlImg }: CityCardProps){
    return(
       <Flex
        w={'256px'}
        h={'279px'}
        flexDirection={'column'}
        alignItems={'center'}
        backgroundColor={'white'}
        borderRadius={'0.4rem'}
        border={'0.1px solid orange'}
        cursor="pointer"
       >
           <Image borderTopRadius={'0.4rem'} h={'173px'} src={urlImg} />

           <Flex  padding={'1rem'} alignItems={'center'} justifyContent={'space-between'}>
              <Flex
                flexDirection={'column'}
                marginRight={'3rem'}
              >
                <Text as={'strong'}>{name}</Text>
                <Text color={'gray.400'} as={'span'}>{capital}</Text>
              </Flex>
              <Image w={'30px'} h={'30px'} borderRadius={'50%'} src={urlImg} />
           </Flex>

       </Flex>
    )
}