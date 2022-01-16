import React, { useCallback } from 'react'
import { Pressable } from 'react-native'
import {
  Box,
  themeTools,
  useColorModeValue,
  useTheme,
  Icon,
  Text,
  HStack,
} from 'native-base'
import SwipeView from './swipable-view'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { Feather } from '@expo/vector-icons'
import { PanGestureHandlerProps } from 'react-native-gesture-handler'
interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  isDone: boolean
  onToggleCheckbox?: () => void
  onRemove?: () => void
  subject: string
}

export default function TaskItem(props: Props) {
  const { isDone, onToggleCheckbox, onRemove, subject, simultaneousHandlers } =
    props
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
    <SwipeView
      simultaneousHandlers={simultaneousHandlers}
      onSwipeLeft={onRemove}
      backView={
        <Box
          w="full"
          h="full"
          bg="red.500"
          alignItems="flex-end"
          justifyContent="center"
          pr={4}
        >
          <Icon color="white" as={<Feather name="trash-2" />} size="sm" />
        </Box>
      }
    >
      <HStack
        alignItems="center"
        w="full"
        px={4}
        py={2}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
      >
        <BouncyCheckbox
          size={25}
          fillColor={doneTextColor}
          unfillColor="#FFFFFF"
          text={subject}
          iconStyle={{ borderColor: activeTextColor }}
          isChecked={isDone}
        />
      </HStack>
    </SwipeView>
  )
}
