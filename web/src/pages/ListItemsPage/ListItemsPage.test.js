import { render } from '@redwoodjs/testing'

import ListItemsPage from './ListItemsPage'

describe('ListItemsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ListItemsPage />)
    }).not.toThrow()
  })
})
