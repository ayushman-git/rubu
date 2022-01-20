import React from 'react'
import { Text, HStack, Switch, useColorMode } from 'native-base'

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <HStack space={2} alignItems={'center'}>
      <Text>{colorMode === 'light' ? 'Dark' : 'Light' }</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        offTrackColor="gray.800" onTrackColor="primary.200" onThumbColor="blue.50" offThumbColor="blue.500"
      ></Switch>
    </HStack>
  )
}
