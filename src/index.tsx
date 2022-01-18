import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/main-screen'
import AboutScreen from './screens/about-screen'
import { useColorModeValue } from 'native-base'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainScreen} options={{
        headerStyle: {
          backgroundColor: useColorModeValue('#22c55e', '#111822'),
        },
        headerTintColor: '#fff',
        headerShadowVisible: false,
      }} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  )
}
