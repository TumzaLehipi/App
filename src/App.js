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
import Table from './components/Table'
import PureComp from './components/PureComp'
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput'
import FRParentInput from './components/FRParentInput'
import Hero from './components/Hero'
import ErrorBoundery from './components/ErrorBoundery'
import PortalDemo from './components/PortalDemo'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'
import User from './components/User'
import CounterTwo from './components/CounterTwo'
import ComponentC from './components/ComponentC'
import { UserProvider } from './components/UserContext'


export class App extends Component {
  render() {
    return (

      <div className='App'>
          <UserProvider  value = 'Tumza' >
            <ComponentC />
          </UserProvider>
       

        {/*  
          <CounterTwo 
            render = { (count, incrementCount) => (
              <ClickCounterTwo count = {count} incrementCount = {incrementCount} />
              )}
            />
            <CounterTwo 
              render = { (count, incrementCount) => (
              <HoverCounterTwo count = {count} incrementCount = {incrementCount} />
              )}
            />

          <ClickCounterTwo />
          <HoverCounterTwo />
          <User render= {(isLoggedIn) => isLoggedIn ? 'Tumelo' : 'Guest'}/>

          ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
          <ClickCounter name = 'TumZa'/>
          <HoverCounter />
          ++++++++++++++++++++++++++++++++++++++++++++++++++++++++
           <PortalDemo />
           +++++++++++++++++++++++++++++++++++++++++++++++++++++++
            <ErrorBoundery>
              <Hero heroName="Batman" />
            </ErrorBoundery>

            <ErrorBoundery>
              <Hero heroName="Superman" />
            </ErrorBoundery>

            <ErrorBoundery>
              <Hero heroName="joker " />
            </ErrorBoundery>
            ++++++++++++++++++++++++++++++++++++++++++++++++++++++
            <FRParentInput />
            <FocusInput />
            <RefsDemo />
            <ParentComp />
            <Table />
            <FragmentDemo />
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
            <Welcome name='tshepo' lastName='lehipi' /> */
        }
      </div>
      
    )
  }
}

export default App
