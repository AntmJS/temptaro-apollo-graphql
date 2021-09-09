import { useDidShow, useDidHide, showToast } from '@tarojs/taro'
import React, { useEffect } from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { onError } from '@apollo/client/link/error'
import { EMlf } from '@antmjs/trace'
import COMMON from '@/constants'
import { link } from '@/utils/request'
import { monitor } from '@/trace'
import './cache'
import './app.less'
interface IProps {
  children: React.ReactNode
}

function sendGqlMonitor(operation: any, response: any, error: any) {
  const params = {
    d1: operation.operationName,
    d2: '',
    d3: JSON.stringify(operation),
    d4: JSON.stringify(response),
    d5: JSON.stringify(error),
  }
  if (process.env.NODE_ENV === 'development') {
    console.error('errorLink', operation, response, error)
  }
  monitor(EMlf.api, params)
}

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, response }) => {
    if (graphQLErrors) {
      sendGqlMonitor(operation, response, graphQLErrors)
      graphQLErrors.forEach(({ extensions }) => {
        if (extensions?.['biz']) {
          showToast({
            title: extensions['biz'].message,
          })
        } else {
          if (extensions?.['status'] !== COMMON.LOGIN) {
            showToast({
              title: '请求错误',
            })
          }
        }
      })
    }

    if (networkError) {
      sendGqlMonitor(operation, response, networkError)
      showToast({
        title: '网络不稳定，请重试',
      })
    }
  },
)

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: errorLink.concat(link),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
    mutate: {
      errorPolicy: 'all',
    },
  },
})

export default function App(props: IProps) {
  // 可以使用所有的 React Hooks
  useEffect(() => {
    console.log('app launch')
    return function () {
      // 这个暂时不确定会不会触发
      console.log('app unlaunch')
    }
  }, [])

  // 对应 onShow
  useDidShow(() => {
    console.log('app show')
  })

  // 对应 onHide
  useDidHide(() => {
    console.log('app hide')
  })

  return (
    // 在入口组件不会渲染任何内容，但我们可以在这里做类似于状态管理的事情
    <ApolloProvider client={client}>
      {/* props.children 是将要被渲染的页面 */}
      {props.children}
    </ApolloProvider>
  )
}
