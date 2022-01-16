import * as React from 'react'
import {
  Text,
  Box,
  Center,
  VStack,
  themeTools,
  useTheme,
  useColorMode,
  useColorModeValue,
} from 'native-base'
import ThemeToggle from '../components/theme-toggle'
export default function MainScreen() {
  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'darkBlue.50' }}
      height={'100%'}
      px={4}
      flex={1}
      safeArea
    >
      <VStack space={5} alignItems={'center'}>
        <Box>
          <ThemeToggle />
        </Box>
      </VStack>
    </Center>
  )
}
