import React, { useEffect } from 'react'
import { View } from 'react-native'
import RNModuleTemplateModule, { Counter, TexTer } from 'react-native-sdk'

const App = () => {
  useEffect(() => {
    console.log(RNModuleTemplateModule)
  })

  return <View style={{ flex: 1 }}>
    <Counter />
    <TexTer />
  </View>
}

export default App
