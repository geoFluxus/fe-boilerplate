import { useMatomo } from '@datapunt/matomo-tracker-react'
import { useEffect } from 'react'
import { createInstance } from '@datapunt/matomo-tracker-react'

//TODO: switch on Matomo tracking adding script with live matomo instance first

type HookType = (title?: string) => {
  trackPrimaryAction: (category: string) => void
  matomoInstance: any
}

const useTracking: HookType = (title) => {
  const { trackPageView, trackEvent } = useMatomo()
  const hasMatomo = document.getElementById('matomo')

  useEffect(() => {
    if (hasMatomo) {
      trackPageView({
        documentTitle: title
      })
    }
  }, [trackPageView, hasMatomo, title])

  const trackPrimaryAction = (category): void => {
    if (hasMatomo) {
      trackEvent({
        category,
        action: 'click-event',
        // name: 'test-name', // optional
        // value: 123, // optional, numerical value
        // documentTitle: 'Page title', // optional
        // href: 'https://LINK.TO.PAGE', // optional
        customDimensions: [
          {
            id: 1,
            value: 'loggedIn'
          }
        ] // optional
      })
    }
  }

  const matomoInstance = (): any => {
    if (hasMatomo) {
      createInstance({
        urlBase: 'https://LINK.TO.DOMAIN',
        siteId: 3,
        linkTracking: false, // optional, default value: true
        configurations: {
          disableCookies: true,
          setSecureCookie: true,
          setRequestMethod: 'POST'
        }
      })
    }
  }

  return { trackPrimaryAction, matomoInstance }
}

export default useTracking
