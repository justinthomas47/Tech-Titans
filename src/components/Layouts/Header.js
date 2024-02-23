import {
    Text,
    Button,
    Image,
    Heading,
    Stack,
    Flex,
    Box,
    Container,
} from '@chakra-ui/react';
import hero from '../../images/hero.svg';

const Header = () => {
    return (
        <Box bg="black">
            <Container maxW='7xl' as='main'>

                <Stack
                    py={{ base: 8, md: 20 }}
                    spacing={{ base: 4, md: 10 }}
                    direction={{ base: 'column', md: 'row' }}
                    align='center'>

                    <Stack flex={1} direction={'column'} spacing={4}>
                        <Heading
                            fontSize={{ base: '3xl', md: '5xl' }}
                            bgGradient="linear(to-r, red.500, yellow.600)"
                            bgClip="text"
                            color="red" // Set text color to white for contrast
                        >
                           If You're Striving For Success, Secure It With A Standout Resume
                        </Heading>

                        <Text color={'gray.600'} lineHeight={1.7} style={{ fontFamily: 'Poppins', color: 'white' }}>
                            ResumifyIQ simplifies the resume-building process. Just follow our user-friendly template, input your details, and in minutes, you can create, print, and download your resume for free.
                        </Text>
                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={{ base: 'column', sm: 'row' }}
                        >
                            <Button
                                as={'a'}
                                href={'#builder'}
                                rounded={'md'}
                                size={'lg'}
                                px={6}
                                colorScheme={'red'}
                            >
                                 Build Resume
                            </Button>
                        </Stack>

                    </Stack>

                    <Flex
                        flex={1}
                    >
                        <Box
                            position={'relative'}
                            height={'400px'}
                            width={'full'}
                            overflow={'hidden'}
                        >
                            <Image
                                alt={'Hero Image'}
                                fit={'contain'}
                                align={'center'}
                                w={'100%'}
                                h={'100%'}
                                src={hero}
                                draggable='false'
                            />
                        </Box>
                    </Flex>
                </Stack>

            </Container>
        </Box>
    );
};

export default Header;

