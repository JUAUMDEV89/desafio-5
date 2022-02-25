import { Flex, Text, Box, Image } from '@chakra-ui/react';

import { CardList } from '../components/cardList'

export default function Home() {
  return (
    <>
      <Box
      w={'100%'}
      h={'250'}
      backgroundImage="url('/assets/background.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      display={'flex'}
      justifyContent={'space-between'}
    >
      <Flex
        flexDirection={'column'}
        h={'100%'}
        justifyContent={'center'}
        paddingLeft={'8rem'}
      >
        <Text
         color={'gray.100'}
         as={'h1'}
         fontSize={'4xl'}
        >5 Continentes,<br/> infinitas possibilidades.</Text>
        <Text
          color={'gray.100'}
          marginTop={'0.5rem'}
        >Chegou a hora de tirar do papel a viagem que você<br/> sempre sonhou.</Text>
      </Flex>

      <Image
       marginRight={'8rem'}
       height={'300px'}
       src="./assets/Airplane.svg" alt="airplane" />
      </Box>
      <CardList />
    </>  
  )
}
