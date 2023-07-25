import React from 'react'
import { View } from 'react-native'
import RepositoryList from './RepositoryList'
import AppBar from '../components/AppBar'
import { Routes, Route } from 'react-router-native'
import LogInPage from '../pages/Login'
const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} exact />
        <Route path='/signing' element={<LogInPage />} exact />
      </Routes>

    </View>
  )
}

export default Main
