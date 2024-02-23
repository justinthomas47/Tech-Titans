import {
    Text,
    Stack,
    HStack,
    Box,
    Container,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <Box
            bg='#484848'  // Set background color to black
            color={useColorModeValue('black.700', 'black.200')}>

            <Container
                as={Stack}
                maxW={'7xl'}
                py={5}
                direction={{ base: 'column', md: 'row' }}
                spacing={4}
                justify={{ base: 'center', md: 'space-between' }}
                align={{ base: 'center', md: 'center' }}>
                <Stack direction={'row'} spacing={6}>
                    <IconButton isRound='true' as={'a'} href={'https://github.com/justinthomas47/Tech-Titans.git'} target='_blank' bg={'gray.300'}>
                        <FaGithub />
                    </IconButton>
                </Stack>
            </Container>
        </Box>
    )
}

export default Footer;
