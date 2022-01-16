import React, { useCallback } from 'react'
import { Pressable } from 'react-native'
import { Box, themeTools, useColorModeValue, useTheme } from 'native-base'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

interface Props {
  isDone: boolean
  onToggleCheckbox?: () => void
}

export default function TaskItem(props: Props) {
  const { isDone, onToggleCheckbox } = props
  const theme = useTheme()
  const activeTextColor = themeTools.getColor(
    theme,
    useColorModeValue('darkText', 'lightText'),
  )
  const doneTextColor = themeTools.getColor(
    theme,
    useColorModeValue('muted.400', 'muted.500'),
  )
  return (
    <BouncyCheckbox
      size={25}
      fillColor="red"
      unfillColor="#FFFFFF"
      text="Custom Checkbox"
      iconStyle={{ borderColor: 'red' }}
      isChecked={isDone}
      onPress={() => onToggleCheckbox()}
    />
  )
}
