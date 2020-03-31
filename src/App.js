import React, { Component } from 'react'
import './App.css'
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import StyleSheet from './components/StyleSheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import LifecycleA from './components/LifecycleA'
import FragmentDemo from './components/FragmentDemo'


export class App extends Component {
  render() {
    return (
      <div className='App'>
        <FragmentDemo />
        {/* 
            <LifecycleA />
           <h1 className='error'> Error</h1>
        <h1 className={styles.success}>Success</h1>
           <Inline />
          <StyleSheet primary={true} />
                <NameList />
          <UserGreeting />
           <ParentComponent />
           <EventBind />
          <FunctionClick />
        <ClassClick />
          <Counter />
        <Message />
        <Greet name='tumza' lastName='lehipi' />
        <Welcome name='tumza' lastName='lehipi' />
      <Welcome name='tshepo' lastName='lehipi' /> */}
      </div>
    )
  }
}

export default App
