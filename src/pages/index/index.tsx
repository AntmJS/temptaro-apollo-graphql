import { View } from '@tarojs/components'
import { navigateTo, useDidHide, useDidShow } from '@tarojs/taro'
import { useEffect } from 'react'
import Container from '@/components/container'

import './index.less'
import { useFindUserQuery } from '@/graphql'

export default function Index() {
  const { data, loading, error } = useFindUserQuery()
  console.log(data)

  useEffect(function () {
    console.info('index page load.')
    return function () {
      console.info('index page unload.')
    }
  }, [])
  useDidShow(function () {
    console.info('index page show.')
  })
  useDidHide(function () {
    console.info('index page hide.')
  })

  return (
    <Container title="首页" loading={loading} pageError={error}>
      <View className="pages-index-index">
        <View
          onClick={() => {
            navigateTo({ url: '/pages/second/index' })
          }}
        >
          Index Page!
        </View>
      </View>
    </Container>
  )
}
