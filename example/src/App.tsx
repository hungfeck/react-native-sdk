import React, { useEffect } from 'react'
import RNModuleTemplateModule, { Counter, SectionTest } from 'react-native-module-template'

const App = () => {
  useEffect(() => {
    console.log(RNModuleTemplateModule)
  })

  // return <Counter />
  return <SectionTest title="Step One">
    Edit  to change this
    screen and then come back to see your edits.
  </SectionTest>
}

export default App
