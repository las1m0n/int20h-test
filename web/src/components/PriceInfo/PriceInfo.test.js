import { render } from '@redwoodjs/testing'

import PriceInfo from './PriceInfo'

describe('PriceInfo', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PriceInfo />)
    }).not.toThrow()
  })
})
