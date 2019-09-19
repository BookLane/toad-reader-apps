import React from 'react'
import { useKeepAwake } from 'expo-keep-awake'

const CustomKeepAwake = () => {
  useKeepAwake()
  return null
}

export default CustomKeepAwake