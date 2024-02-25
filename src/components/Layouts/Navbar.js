import React, { useState } from "react";
import {
    Stack,
    Flex,
    Heading,
    Spacer,
    HStack,
    Text,
    Button,
    Box
} from "@chakra-ui/react";

// Custom template components
const Template1 = () => (
    <Box p={4} color="white" bg="blue.800" borderRadius="md" boxShadow="md">
        <Heading fontSize="xl" fontWeight="bold">Template 1</Heading>
        {/* Add specific details for Template 1 */}
    </Box>
);

const Template2 = () => (
    <Box p={4} color="white" bg="green.800" borderRadius="md" boxShadow="md">
        <Heading fontSize="xl" fontWeight="bold">Template 2</Heading>
        {/* Add specific details for Template 2 */}
    </Box>
);

const Template3 = () => (
    <Box p={4} color="white" bg="purple.800" borderRadius="md" boxShadow="md">
        <Heading fontSize="xl" fontWeight="bold">Template 3</Heading>
        {/* Add specific details for Template 3 */}
    </Box>
);

const Navbar = () => {
    const [showContactDetails, setShowContactDetails] = useState(false);
    const [showAboutDetails, setShowAboutDetails] = useState(false);
    const [showTemplates, setShowTemplates] = useState(false);

    const handleContactClick = () => {
        setShowContactDetails(!showContactDetails);
        setShowAboutDetails(false);
        setShowTemplates(false);
    };

    const handleAboutClick = () => {
        setShowAboutDetails(!showAboutDetails);
        setShowContactDetails(false);
        setShowTemplates(false);
    };

    const handleTemplatesClick = () => {
        setShowTemplates(!showTemplates);
        setShowContactDetails(false);
        setShowAboutDetails(false);
    };

    const handleHomeClick = () => {
        // Reload the current page
        window.location.reload();
    };

    return (
        <Stack
            p={5}
            bg={'black'}
            as='header'
            color='white'
        >
            <Flex
                w='full'
                alignItems={'center'}
            >
                <Heading as='h3' ml={{ base: 0, sm: 8 }} size='lg' fontWeight={'thin'} color='red.500' style={{ fontFamily: "Pacifico" }} onClick={handleHomeClick}>ResumifyIQ</Heading>
                <Spacer></Spacer>
                <HStack spacing={10} mr={{ base: 0, sm: 8 }} as='nav' style={{ fontFamily: 'Poppins' }}>
                    <Text as='a' href='#' fontSize='lg' onClick={handleHomeClick}>Home</Text>
                    <Text as='a' href='#' fontSize='lg' onClick={handleTemplatesClick}>Templates</Text>
                    <Text as='a' href='#' fontSize='lg' onClick={handleAboutClick}>About</Text>
                    <Button colorScheme={'red'} fontWeight={'medium'} onClick={handleContactClick}>Contact</Button>
                </HStack>
            </Flex>
            
            {showContactDetails && (
                <Stack p={4} color='white' bg='gray.800'>
                    <Text fontSize='xl' fontWeight='bold'>Contact Details:</Text>
                    <Box>
                        <Text fontSize='lg' fontWeight='bold'>Justin Thomas</Text>
                        <Text>Email: justint.csb2125@saintgits.org</Text>
                        <Text>Phone: 6238745312</Text>
                    </Box>
                    <Box mt={4}>
                        <Text fontSize='lg' fontWeight='bold'>Robin Jo Varghese</Text>
                        <Text>Email: robinj.csb2125@saintgits.org</Text>
                        <Text>Phone: 7356498906</Text>
                    </Box>
                    <Box mt={4}>
                        <Text fontSize='lg' fontWeight='bold'>Vimal S Thomas</Text>
                        <Text>Email: vimal.csb2125@saintgits.org</Text>
                        <Text>Phone: 8848193648</Text>
                    </Box>
                </Stack>
            )}

{showAboutDetails && (
    <Stack p={4} color='white' bg='gray.800'>
        <Text fontSize='xl' fontWeight='bold'>About Us:</Text>
        <Text>
            ResumeIQ is a website that offers a free resume builder with a single template. The website is easy to use and allows users to create a professional-looking resume in minutes.
        </Text>
        <Text>
            Visit our website to explore our templates and services. ResumeIQ is a great tool for job seekers who want to create a professional-looking resume quickly and easily. The website is free to use, and users can download their resume as a PDF or Word document.
        </Text>
        <Text>
            Overall, ResumeIQ is a valuable resource for anyone who wants to create a professional-looking resume that will help them stand out to potential employers.
        </Text>
        <Text fontSize='lg' fontWeight='bold' mt={4}>Website: www.resumifyiq.com</Text>
    </Stack>
)}
            {showTemplates && (
                <Stack p={4} spacing={4} direction="row" justifyContent="center">
                    <Template1 />
                    <Template2 />
                    <Template3 />
                    {/* Add more templates as needed */}
                </Stack>
            )}
        </Stack>
    );
}

export default Navbar;
