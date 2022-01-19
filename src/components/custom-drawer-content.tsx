import { Button, Center } from 'native-base'
import React from 'react'
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import ThemeToggle from './theme-toggle'
import { useColorModeValue } from 'native-base'

export default function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView>
      <DrawerItemList
        {...props}
        options={{
          headerStyle: {
            backgroundColor: useColorModeValue('#22c55e', '#111822'),
          },
          headerTintColor: '#fff',
          headerShadowVisible: false,
        }}
      />
      <Center>
        <ThemeToggle />
      </Center>
    </DrawerContentScrollView>
  )
}
