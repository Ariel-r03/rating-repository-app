import React from 'react'
import { View } from 'react-native'
import StyledText from './StyledText'

const parseThousands = value => {
  return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}
const RepositoryStats = (props) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText align='center' fontWeight='bold'>{parseThousands(props.stargazersCount)}</StyledText>
        <StyledText>Stars</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>{parseThousands(props.forksCount)}</StyledText>
        <StyledText>Forks</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>{parseThousands(props.reviewCount)}</StyledText>
        <StyledText>Review</StyledText>
      </View>
      <View>
        <StyledText align='center' fontWeight='bold'>{parseThousands(props.ratingAverage)}</StyledText>
        <StyledText>Rating</StyledText>
      </View>
    </View>
  )
}

export default RepositoryStats
