import { IconButton } from '@chakra-ui/button';
import {
    Stack,
    Flex,
    Heading,
    Spacer,
    HStack,
    Text,
    Button,
} from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <Stack
            p={5}
            bg={'black'}  // Set background color to black
            as='header'
            color='white'  // Set text color to white for contrast
        >
            <Flex
                w='full'
                alignItems={'center'}
            >
                <Heading as='h3' ml={{ base: 0, sm: 8 }} size='lg' fontWeight={'thin'} color='red.500' style={{ fontFamily: "Pacifico" }}>ResumifyIQ</Heading>
                <Spacer></Spacer>
                <HStack spacing={10} mr={{ base: 0, sm: 8 }} as='nav' style={{ fontFamily: 'Poppins' }}>
                    <Text as='a' href='#' fontSize='lg'>Home</Text>
                    <Text as='a' href='#' fontSize='lg'>Templates</Text>
                    <Text as='a' href='#' fontSize='lg'>About</Text>
                    <Button colorScheme={'red'} fontWeight={'medium'}>Contact</Button>
                </HStack>
            </Flex>
        </Stack>
    )
}

export default Navbar;
