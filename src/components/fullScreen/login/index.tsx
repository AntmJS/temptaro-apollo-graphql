import { ApolloError } from '@apollo/client'
import { View } from '@tarojs/components'

interface IProps {
  pageError?: ApolloError
  setPageError?: React.Dispatch<React.SetStateAction<undefined>>
}

export default function Index(props: IProps) {
  // 成功之后下拉刷新 并且 clearPageError
  console.log(props)
  return <View>login</View>
}
