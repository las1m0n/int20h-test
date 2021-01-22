import { render } from '@redwoodjs/testing'

import ItemPagePage from './ItemPagePage'

describe('ItemPagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ItemPagePage />)
    }).not.toThrow()
  })
})
