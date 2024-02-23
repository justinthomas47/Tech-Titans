import { TabList, Tabs, Tab, TabPanels, TabPanel, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { useResume } from '../Context'
import About from './BuildSteps/About'
import Education from './BuildSteps/Education'
import Projects from './BuildSteps/Projects'
import Skills from './BuildSteps/Skills'
import Work from './BuildSteps/Work'

const Builder = () => {
    return (
        <Box
            bg={'white'}
            w={'full'}
            maxW={'xl'}
            rounded={'md'}
            shadow={'md'}
            overflow={'hidden'}
            border="2px solid blue"
            borderRadius="10px"
        >
            <Tabs isFitted variant='enclosed'>
                <TabList bg="gray.100" p={2} borderRadius="md">
                    <Tab _selected={{ bg: 'blue.400', color: 'white', fontWeight: 'bold' }}>About</Tab>
                    <Tab _selected={{ bg: 'blue.400', color: 'white', fontWeight: 'bold' }}>Education</Tab>
                    <Tab _selected={{ bg: 'blue.400', color: 'white', fontWeight: 'bold' }}>Skills</Tab>
                    <Tab _selected={{ bg: 'blue.400', color: 'white', fontWeight: 'bold' }}>Work</Tab>
                    <Tab _selected={{ bg: 'blue.400', color: 'white', fontWeight: 'bold' }}>Projects</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <About />
                    </TabPanel>
                    <TabPanel>
                        <Education />
                    </TabPanel>
                    <TabPanel>
                        <Skills />
                    </TabPanel>
                    <TabPanel>
                        <Work />
                    </TabPanel>
                    <TabPanel>
                        <Projects />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default Builder
