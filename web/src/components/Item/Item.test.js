import { render } from '@redwoodjs/testing'

import Item from './Item'

describe('Item', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Item />)
    }).not.toThrow()
  })
})
