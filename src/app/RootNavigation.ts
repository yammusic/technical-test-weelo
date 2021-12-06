import { createNavigationContainerRef, StackActions } from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef()

export const navigate = (screen: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screen as never, params as never)
  }
}

export const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack()
  }
}

export const push = (screen: string, params?: any) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(screen, params))
  }
}
