import { render, screen } from '@testing-library/react'
import Footer from '.'

describe('Footer', () => {
  it('should render copyright text', async () => {
    render(await Footer())
    expect(await screen.getByText('(c)', {exact: false}))
  })
})