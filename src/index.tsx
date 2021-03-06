import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainScreen from './screens/main-screen'
import AboutScreen from './screens/about-screen'
import { useColorModeValue } from 'native-base'
import CustomDrawerContent from './components/custom-drawer-content'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} screenOptions={{
      headerStyle: {
        backgroundColor: '#006ad8',
      },
      headerTintColor: '#fff',
      headerShadowVisible: false,
    }}>
      <Drawer.Screen name="Home" component={MainScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  )
}
