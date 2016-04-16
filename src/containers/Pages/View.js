import React, { Component } from 'react';
import Page from './Page'
import styles from './styles'
import { EditorPlayer } from '../../components'

// const defaultValue = `
// import React, { AppRegistry, Image, StyleSheet, Text, View } from 'react-native'
//
// // Styles
// const styles = StyleSheet.create({
//   card: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     backgroundColor: 'teal',
//   },
//   title: {
//     fontSize: '1.25rem',
//     fontWeight: 'bold',
//   },
//   image: {
//     height: 300,
//     marginVertical: 10,
//     width: 300,
//   }
// })
//
// // Components
// const Card = ({ children }) => <View style={styles.card}>{children}</View>
// const Title = ({ children }) => <Text style={styles.title}>{children}</Text>
// const Photo = ({ uri }) => <Image source={{ uri }} style={styles.image} />
// const App = () => (
//   <Card>
//     <Title>App Card</Title>
//     <Photo uri="logo.jpg" />
//   </Card>
// )
//
// // App registration and rendering
// AppRegistry.registerComponent('MyApp', () => App)
// `

const defaultValue = `
import React, { AppRegistry, View } from 'react-native'

const App = () => {
  const style = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

  const boxStyle = {
    width: 200,
    height: 200,
    backgroundColor: 'rgb(0,127,244)'
  }

  return (
    <View style={style}>
      <View style={boxStyle} />
    </View>
  )
}

// App registration and rendering
AppRegistry.registerComponent('MyApp', () => App)
`

export default class View extends Component {
  render() {
    return (
      <Page
        title={'View'}>
        <div style={styles.well}>
          <div style={styles.h3}>View</div>
          <div style={styles.p}>
            <code>View</code>s are the building block of React Native apps, much like how <code>div</code>s are the building block of websites.
          </div>
          <EditorPlayer
            value={defaultValue}
            inputHeader={'Using Views'}
          />
        </div>
      </Page>
    )
  }
}