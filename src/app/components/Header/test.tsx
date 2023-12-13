import { render, screen } from '@testing-library/react'
import Header from '.'
// import { cookies } from 'next/headers'

jest.mock('../../api/google', () => {
  const originalModule = jest.requireActual('../../api/google');

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    // default: jest.fn(() => 'mocked baz'),
    isAuthenticated: () => false,
  };
});

describe('Header', () => {
  it('should render app title', async () => {
    render(await Header())
    expect(await screen.findByRole('heading'))
  })

  it('should render app logo', async () => {
    render(await Header())
    expect(await screen.findByAltText('App Logo'))
  })
})