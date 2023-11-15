import { Box, Container, Stack} from '@chakra-ui/react';

export default function SmallWithNavigation() {
  return (
    <Box bg={'white'} color={'black'}>
      <Container
        fontFamily={'Courier New'}
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 4, md: 6 }}
          align={{ base: 'center', md: 'center' }}
        >
          <Box
            as="a"
            href={'https://www.instagram.com/lesvh_/'}
            target="_blank"
            _hover={{ color: '#A3ABB8' }}
          >
            Instagram
          </Box>
          <Box as="a" href={'#'} _hover={{ color: '#A3ABB8' }}>
            About
          </Box>
          <Box as="a" href={'#'} _hover={{ color: '#A3ABB8' }}>
            Contact
          </Box>
        </Stack>
        <Box as="a" href={'/'} _hover={{ color: '#A3ABB8' }}>
          Les VH
        </Box>
      </Container>
    </Box>
  );
}
