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
            bg={'#F7FAFC'} // Light background color
            w={'full'}
            maxW={'xl'}
            rounded={'md'}
            shadow={'lg'}
            overflow={'hidden'}
            border="1px solid #CBD5E0" // Light border color
            borderRadius="10px"
            color="#4A5568" // Text color
        >
            <Tabs isFitted variant='enclosed'>
                <TabList bg="#EDF2F7" p={2} borderRadius="md"> {/* Light tab list background color */}
                    <Tab _selected={{ bg: '#E2E8F0', color: '#2D3748', fontWeight: 'bold' }}>About</Tab> {/* Selected tab background color */}
                    <Tab _selected={{ bg: '#E2E8F0', color: '#2D3748', fontWeight: 'bold' }}>Education</Tab>
                    <Tab _selected={{ bg: '#E2E8F0', color: '#2D3748', fontWeight: 'bold' }}>Skills</Tab>
                    <Tab _selected={{ bg: '#E2E8F0', color: '#2D3748', fontWeight: 'bold' }}>Work</Tab>
                    <Tab _selected={{ bg: '#E2E8F0', color: '#2D3748', fontWeight: 'bold' }}>Projects</Tab>
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
