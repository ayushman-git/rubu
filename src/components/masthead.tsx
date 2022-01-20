import React from 'react'
import { ImageSourcePropType } from 'react-native'
import { Box, VStack, Heading, Image } from 'native-base'

interface Props {
  title: string
  image: ImageSourcePropType
  // children: React.ReactNode
}

export default function MastHead({ title, image }: Props) {
  return (
    <VStack h="300px" pb={5}>
      <Image
        position="absolute"
        source={image}
        left={0}
        right={0}
        bottom={0}
        h={300}
        w="full"
        alt="masthead"
      />
      {/* {children} */}
      <Box flex={1} />
      <Heading color="white" p={6} size="xl">
        {title}
      </Heading>
    </VStack>
  )
}
