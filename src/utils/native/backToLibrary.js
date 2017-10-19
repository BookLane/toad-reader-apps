import { NavigationActions } from 'react-navigation'

const backToLibrary = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Library'})
  ],
})

export default backToLibrary