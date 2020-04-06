import  React from 'react'

const UserContext = React.createContext()

const {UserProvider, UserConsumer} = UserContext.Provider

const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}