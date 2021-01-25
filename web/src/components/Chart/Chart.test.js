import { render } from '@redwoodjs/testing'

import Chart from './Chart'

describe('Chart', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Chart />)
    }).not.toThrow()
  })
})
