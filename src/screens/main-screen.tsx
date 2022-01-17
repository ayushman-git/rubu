import React, { useState, useCallback } from 'react'
import {
  Text,
  Box,
  Center,
  VStack,
  themeTools,
  useTheme,
  useColorMode,
  useColorModeValue,
} from 'native-base'
import ThemeToggle from '../components/theme-toggle'
import { AntDesign } from '@expo/vector-icons'
import shortid from 'shortid'
import TaskList from '../components/task-list'

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Buy movie tickets for Friday',
    done: false,
  },
  {
    id: shortid.generate(),
    subject: 'Make a React Native tutorial',
    done: false,
  },
]

export default function MainScreen() {
  const [data, setData] = React.useState(initialData)
  const [editingItemId, setEditingItemId] = useState<string | null>(null)

  const handleToggleTaskItem = useCallback((item: any) => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = { ...item, done: !item.done }
      return newData
    })
  }, [])

  const handleChangeTaskItemSubject = useCallback(
    (item: any, newSubject: string) => {
      setData(prevData => {
        const newData = [...prevData]
        const index = prevData.indexOf(item)
        newData[index] = {
          ...item,
          subject: newSubject,
        }
        return newData
      })
    },
    [],
  )

  const handleFinishEditingTaskItem = useCallback(
    (item: any, newSubject: string) => {
      setEditingItemId(null)
    },
    [],
  )

  const handlePressTaskItemLabel = useCallback((item: any) => {
    setEditingItemId(item.id)
  }, [])

  const handleRemoveItem = useCallback((item: any) => {
    setData(prevData => {
      const newData = prevData.filter(i => i !== item)
      return newData
    })
  }, [])

  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'darkBlue.50' }}
      height={'100%'}
      px={4}
      flex={1}
      safeArea
    >
      <VStack space={5} alignItems={'center'} w="full">
        <Box w={'full'}>
          <TaskList
            data={data}
            onToggleItem={handleToggleTaskItem}
            onChangeSubject={handleChangeTaskItemSubject}
            onFinishEditing={handleFinishEditingTaskItem}
            onPressLabel={handlePressTaskItemLabel}
            onRemoveItem={handleRemoveItem}
            editingItemId={editingItemId}
          />
        </Box>
        <Box>
          <ThemeToggle />
        </Box>
      </VStack>
    </Center>
  )
}
