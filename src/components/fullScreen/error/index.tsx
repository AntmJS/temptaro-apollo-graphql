import { ApolloError } from '@apollo/client'
import { View } from '@tarojs/components'

interface IProps {
  pageError?: ApolloError
  catchError?: { code: string; message: string }
  setPageError?: React.Dispatch<React.SetStateAction<undefined>>
  setCatchError?: React.Dispatch<React.SetStateAction<undefined>>
}

export default function Index(props: IProps) {
  // 点击之后下拉刷新 并且 clearCatchError clearPageError
  console.log(props)
  return <View>error</View>
}
