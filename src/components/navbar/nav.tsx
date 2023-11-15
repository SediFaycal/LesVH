import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavLink = (props: Props) => {
  const { href, children } = props;
  return (
    <Box
      as="a"
      color={'white'} // Couleur du texte
      _hover={{
        color: '#B7B8B7',
      }}
      fontFamily={'Courier New'}
      href={href}
    >
      {children}
    </Box>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'black'} px={7} h={9}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'} mb={6}>
            <Box flex={1} display="flex"> 
            </Box>
            <HStack as={'nav'} spacing={10} display={{ base: 'none', md: 'flex' }}>
              <NavLink href={'/'}>HOME</NavLink>
              <NavLink href={'products'}>SHOP</NavLink>
              <NavLink href={'#dashboard'}>COLLECTIONS</NavLink>
              <NavLink href={'#dashboard'}>CART</NavLink>
            </HStack>
            <HStack as={'nav'} spacing={10} ml={990} display={{base: 'none', md: 'flex'}}>
            <NavLink href={'/'}>LES VH</NavLink>
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}
