import React from 'react'
import { Text, FlatList } from 'react-native'
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories'
const ReposList = () => {
  const { repositories } = useRepositories()
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text />}
      renderItem={({ item }) => <RepositoryItem {...item} />}
    />
  )
}

export default ReposList
