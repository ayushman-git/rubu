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
  Fab,
  Icon,
} from 'native-base'
import ThemeToggle from '../components/theme-toggle'
import AnimatedColorBox from '../components/animated-color-box'
import { AntDesign } from '@expo/vector-icons'
import shortid from 'shortid'
import TaskList from '../components/task-list'

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Watch Attack on Titan',
    done: false,
  },
  {
    id: shortid.generate(),
    subject: 'Read book',
    done: false,
  },
]

export default function MainScreen() {
  const [data, setData] = useState(initialData)
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

  const handleFinishEditingTaskItem = useCallback(() => {
    setEditingItemId(null)
  }, [])

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
    <Box
      _dark={{ bg: '#223044' }}
      _light={{ bg: '#EEF2F6' }}
      height={'100%'}
      flex={1}
    >
      <VStack space={5} alignItems={'center'} w="full" py={2}>
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
      <Fab
        position="absolute"
        renderInPortal={false}
        size="sm"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
        colorScheme={useColorModeValue('blue', 'darkBlue')}
        bg='#22c55e'
        onPress={() => {
          const id = shortid.generate()
          setData(() => [
            {
              id,
              subject: '',
              done: false,
            },
            ...data,
          ])
          setEditingItemId(id)
        }}
      ></Fab>
    </Box>
  )
}
