import { describe, expect, it, vi } from 'vitest'
import ResultCard from './ResultCard'
import { render, screen } from '@testing-library/react'
import { NO_DETAILS, NO_SERIAL, NO_PAYLOAD } from './copy'

// Mock matchMedia component render logic
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
})

const mockInclompleteResult = {
  name: 'testName',
  links: { patch: { small: 'https://images2.imgbox.com/94/f2/NN6Ph45r_o.png' } },
  success: true,
  date_utc: '2006-03-25T10:30:00+12:00'
}
const mockResult = {
  fairings: {
    reused: false,
    recovery_attempt: false,
    recovered: false,
    ships: []
  },
  links: {
    patch: {
      small: 'https://images2.imgbox.com/94/f2/NN6Ph45r_o.png',
      large: 'https://images2.imgbox.com/5b/02/QcxHUb5V_o.png'
    },
    reddit: {
      campaign: null,
      launch: null,
      media: null,
      recovery: null
    },
    flickr: {
      small: [],
      original: []
    },
    presskit: null,
    webcast: 'https://www.youtube.com/watch?v=0a_00nJ_Y88',
    youtube_id: '0a_00nJ_Y88',
    article: 'https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html',
    wikipedia: 'https://en.wikipedia.org/wiki/DemoSat'
  },
  static_fire_date_utc: '2006-03-17T00:00:00.000Z',
  static_fire_date_unix: 1142553600,
  net: false,
  window: 0,
  rocket: '5e9d0d95eda69955f709d1eb',
  success: false,
  failures: [
    {
      time: 33,
      altitude: null,
      reason: 'merlin engine failure'
    }
  ],
  details: 'Engine failure at 33 seconds and loss of vehicle',
  crew: [],
  ships: [],
  capsules: [],
  payloads: ['5eb0e4b5b6c3bb0006eeb1e1'],
  launchpad: '5e9e4502f5090995de566f86',
  flight_number: 1,
  name: 'FalconSat',
  date_utc: '2006-03-24T22:30:00.000Z',
  date_unix: 1143239400,
  date_local: '2006-03-25T10:30:00+12:00',
  date_precision: 'hour',
  upcoming: false,
  cores: [
    {
      core: '5e9e289df35918033d3b2623',
      flight: 1,
      gridfins: false,
      legs: false,
      reused: false,
      landing_attempt: false,
      landing_success: null,
      landing_type: null,
      landpad: null
    }
  ],
  auto_update: true,
  tbd: false,
  launch_library_id: null,
  id: '5eb87cd9ffd86e000604b32a'
}

describe('ResultCard component', () => {
  it('renders component ', () => {
    render(<ResultCard result={mockResult} />)
  })

  it('displays card header, title, description and other fields', () => {
    render(<ResultCard result={mockResult} />)

    screen.debug()

    expect(screen.getByText(mockResult.details)).toBeInTheDocument()
    expect(screen.getByText(mockResult.name)).toBeInTheDocument()
    expect(screen.getByText(mockResult.payloads[0])).toBeInTheDocument()
  })

  it('displays fall-back values for incomplete (non-primary) fields', () => {
    // @ts-expect-error // <-- haard-type interface will error on incomplete data OBJ, but we are not testing TS
    render(<ResultCard result={mockInclompleteResult} />)

    screen.debug()

    expect(screen.getByText(NO_SERIAL)).toBeInTheDocument()
    expect(screen.getByText(NO_PAYLOAD)).toBeInTheDocument()
    expect(screen.getByText(NO_DETAILS)).toBeInTheDocument()
  })
})
