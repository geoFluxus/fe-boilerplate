import { ConfigProvider} from 'antd'
// import { MatomoProvider } from '@datapunt/matomo-tracker-react'
import { Home } from './views'
import { Branding } from './components'
// import { useTracking } from './businessLogic'
import { Provider, ErrorBoundary } from '@rollbar/react' // <-- Provider imports 'rollbar' for us
import { ROLLBAR_ACCESS_TOKEN, THEME } from './constants'



const rollbarConfig = {
  accessToken: ROLLBAR_ACCESS_TOKEN, // <--- here 
  environment: 'production',
}


const App = () => {
  // const { matomoInstance } = useTracking()

  return (
    // <MatomoProvider value={matomoInstance}>
      <ConfigProvider theme={THEME}>
        <Provider config={rollbarConfig}>
          <ErrorBoundary>
            <Branding>
              <Home/>
            </Branding>
          </ErrorBoundary>
        </Provider>
      </ConfigProvider>
    // </MatomoProvider>
  )
}

export default App
