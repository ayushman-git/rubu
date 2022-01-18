import React, { useCallback } from 'react'
import {
  NativeSyntheticEvent,
  Pressable,
  TextInputChangeEventData,
} from 'react-native'
import {
  Box,
  themeTools,
  useColorModeValue,
  useTheme,
  Icon,
  Text,
  HStack,
  Input,
} from 'native-base'
import SwipeView from './swipable-view'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { Feather } from '@expo/vector-icons'
import { PanGestureHandlerProps } from 'react-native-gesture-handler'
interface Props extends Pick<PanGestureHandlerProps, 'simultaneousHandlers'> {
  isDone: boolean
  isEditing: boolean
  onChangeSubject?: (subject: string) => void
  onFinishEditing?: () => void
  onToggleCheckbox?: () => void
  onPressLabel?: () => void
  onRemove?: () => void
  subject: string
}

export default function TaskItem(props: Props) {
  const {
    isEditing,
    isDone,
    onToggleCheckbox,
    onChangeSubject,
    onFinishEditing,
    onRemove,
    subject,
    simultaneousHandlers,
  } = props
  const theme = useTheme()
  const activeTextColor = themeTools.getColor(
    theme,
    useColorModeValue('darkText', 'lightText'),
  )
  const doneTextColor = themeTools.getColor(
    theme,
    useColorModeValue('muted.400', 'muted.500'),
  )

  const handleChangeSubject = useCallback(
    (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
      onChangeSubject && onChangeSubject(e.nativeEvent.text)
    },
    [onChangeSubject],
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
        bg={useColorModeValue('#EEF2F6', '#223044')}
      >
        {isEditing ? (
          <Input
            placeholder={subject}
            variant="unstyled"
            fontSize={19}
            px={1}
            py={0}
            autoFocus
            blurOnSubmit
            onChange={handleChangeSubject}
            onBlur={onFinishEditing}
          />
        ) : (
          <BouncyCheckbox
            size={25}
            fillColor={doneTextColor}
            unfillColor="#FFFFFF"
            text={subject}
            iconStyle={{ borderColor: activeTextColor }}
            isChecked={isDone}
            onPress={onToggleCheckbox}
          />
        )}
      </HStack>
    </SwipeView>
  )
}
