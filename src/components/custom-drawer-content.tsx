import {
  Box,
  Avatar,
  useColorModeValue,
  HStack,
  VStack,
  IconButton,
  Heading,
  Center,
} from 'native-base'
import React, { useCallback } from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import ThemeToggle from './theme-toggle'
import { Feather } from '@expo/vector-icons'
import MenuButton from './menu-button'

export default function CustomDrawerContent(
  props: DrawerContentComponentProps,
) {
  const { state, navigation } = props
  const currentRoute = state.routeNames[state.index]

  const handlePressMenuClose = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])
  const handlePressMenuMain = useCallback(() => {
    navigation.navigate('Home')
  }, [navigation])
  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate('About')
  }, [navigation])

  return (
    <Box
      safeArea
      flex={1}
      bg={useColorModeValue('blue.50', 'black')}
      p={7}
    >
      <VStack flex={1} space={2}>
        <HStack justifyContent="flex-end">
          <IconButton
            onPress={handlePressMenuClose}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue('blue.300', 'darkBlue.700')}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 6,
              color: useColorModeValue('blue.800', 'darkBlue.700'),
            }}
          />
        </HStack>
        <Avatar
          source={require('../../assets/profile.jpeg')}
          borderWidth={3}
          borderRadius={100}
          borderColor="blue.500"
          size="xl"
        />
        <Heading mb={4} size="xl">
          Ayushman Gupta
        </Heading>
        <MenuButton
          active={currentRoute === 'Home'}
          onPress={handlePressMenuMain}
          icon="inbox"
        >
          Tasks
        </MenuButton>
        <MenuButton
          active={currentRoute === 'About'}
          onPress={handlePressMenuAbout}
          icon="info"
        >
          About
        </MenuButton>
      </VStack>
      <Center>
        <ThemeToggle />
      </Center>
    </Box>
  )
}
