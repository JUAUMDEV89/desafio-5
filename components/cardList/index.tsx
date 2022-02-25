import { Flex, Image, Text } from '@chakra-ui/react';

import { Card } from '../card';

export function CardList(){
    return(
        <Flex
          w={'100%'}
          maxWidth={'1310px'}
          margin={'auto'}
          justifyContent={'space-around'}
          alignItems={'center'}
          marginTop={'5rem'}
        >
          <Card
           src='./assets/Vector.svg'
           span='vida Noturna'
          />

          <Card
           src='./assets/surf 1.svg'
           span='praia'
          />

          <Card
           src='./assets/museum 1.svg'
           span='moderno'
          />

          <Card
           src='./assets/Vector.svg'
           span='classico'
          />

          <Card
           src='./assets/earth 1.svg'
           span='e mais...'
          />
        </Flex>
    )
}