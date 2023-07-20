import React from 'react'
import { Text, FlatList } from 'react-native'
import { repositories } from '../data/repositories'
import RepositoryItem from './RepositoryItem'

const ReposList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text />}
      renderItem={({ item }) => <RepositoryItem {...item} />}
    />
  )
}

export default ReposList
