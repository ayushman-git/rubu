import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/main-screen'
import AboutScreen from './screens/about-screen'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  )
}
