import { useState } from 'react';
import { useEffect } from 'react';
import {  useRouter } from 'next/router';
import { Flex, Box, Image, Text, Grid } from '@chakra-ui/react';
import { api } from '../../services/api';

import { CityCard } from '../../components/cityCard';

interface countryProps{
  name:string;
  capital:string;
  flag:string;
}

export default () => {

  const [countries, setCountries] = useState<countryProps []>([]);

  useEffect(()=>{

    //const { query } = useRouter();

    async function loadCountry (){
      const response = await api.get(`eu`);

      console.log(response.data[0])

      setCountries(response.data);
    }
    
    loadCountry();
  }, []);

  return (
    <Box
      w="100%"
      backgroundColor={'gray.100'}
      display={'flex'}
      flexDirection={'column'}
    >
      <Box position={'relative'} w={'100%'} h={'500px'} as="main">
        <Image
          w={'100%'}
          h={'100%'}
          src='../assets/europa.jpg'

        />
        <Text
          as={'strong'}
          position={'absolute'}
          zIndex={3}
          bottom={30}
          left={'6rem'}
          color={'white'}
          fontSize={'5rem'}
        >Europa</Text>
      </Box>

      <Flex
        w={'100%'}
        h={'10rem'}
        maxWidth={'1200px'}
        margin={'auto'}
        justifyContent={'space-between'}
        paddingLeft={'2rem'}
        paddingRight={'2rem'}
        marginTop={'2rem'}
      >
        <Text w={'500px'}>
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <Flex>
          <Flex marginRight={'4rem'} flexDirection={'column'} alignItems={'center'}>
            <Text as={'strong'} fontSize={'3rem'} color={'#FFBA08'}>{countries.length}</Text>
            <Text as={'strong'}>Países</Text>
          </Flex>

          <Flex marginRight={'4rem'} flexDirection={'column'} alignItems={'center'}>
            <Text as={'strong'} fontSize={'3rem'} color={'#FFBA08'}>60</Text>
            <Text as={'strong'}>Linguas</Text>
          </Flex>

          <Flex marginRight={'4rem'} flexDirection={'column'} alignItems={'center'}>
            <Text as={'strong'} fontSize={'3rem'} color={'#FFBA08'}>27</Text>
            <Text as={'strong'}>cidades +100</Text>
          </Flex>
        </Flex>
      </Flex>

      <Box display="flex" marginBottom={'2rem'} w='100%' justifyContent={'flex-start'} paddingLeft={'7rem'}><Text fontSize={'1.7rem'} as={'strong'}>Países</Text></Box>

     <Flex w={'100%'} maxWidth={'1200px'} margin={'auto'}>
     <Grid
        marginTop={'5rem'}
        w={'100%'}
        flexWrap={'wrap'}
        margin={'auto'}
        templateColumns='1fr 1fr 1fr 1fr'
        gap={5}
        paddingLeft={'2rem'}
      >
       { countries.map(country=>(
         <CityCard
          key={country.name}
          name={country.name}
          urlImg={country.flag}
          capital={country.capital}
         />
       )) }
      </Grid>
     </Flex>
    </Box>
  )
}