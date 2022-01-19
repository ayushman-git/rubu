import React from 'react'
import { Button, Icon, useColorModeValue, IButtonProps } from 'native-base'
import { Feather } from '@expo/vector-icons'

interface Props extends IButtonProps {
  active: Boolean
  icon: string
  children: React.ReactNode
}

export default function MenuButton({
  active,
  icon,
  children,
  ...props
}: Props) {
  const colorScheme = useColorModeValue('blue', 'darkBlue')
  const inactiveTextColor = useColorModeValue('blue.500', 'blue.500')
  const pressBgColor = useColorModeValue('primary.100', 'primary.600')
  return (
    <Button
      size="lg"
      colorScheme={colorScheme}
      bg={active ? undefined : 'transparent'}
      _pressed={{
        bg: pressBgColor,
      }}
      _text={{
        color: active ? 'white' : inactiveTextColor,
      }}
      leftIcon={<Icon as={Feather} name={icon} size="sm" opacity={0.5} />}
      {...props}
    >{children}</Button>
  )
}
