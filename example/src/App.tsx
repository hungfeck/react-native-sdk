import React, { useEffect } from 'react'
import { View } from 'react-native'
import RNModuleTemplateModule, { Counter, SectionTest, TexTer } from 'react-native-module-template'

const App = () => {
  useEffect(() => {
    console.log(RNModuleTemplateModule)
  })
  return <View style={{ flex: 1 }}>
    <Counter />
    <SectionTest title="Step One111">
      Edit  to change this
      screen and then come back to see your edits.
    </SectionTest>
    <TexTer />

  </View>

}

export default App
