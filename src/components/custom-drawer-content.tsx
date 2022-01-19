import {
  Box,
  Avatar,
  useColorModeValue,
  HStack,
  VStack,
  IconButton,
  Heading,
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
    navigation.navigate('Main')
  }, [navigation])
  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate('About')
  }, [navigation])
  return (
    <Box
      safeArea
      flex={1}
      bg={useColorModeValue('blue.50', 'primary.900')}
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
      </VStack>
    </Box>
  )
}
