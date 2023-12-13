import { render, screen } from '@testing-library/react'
import Login from './page'

const mockAuthURL = 'https://mockauthurl/'
jest.mock('../api/google', () => {
  const originalModule = jest.requireActual('../api/google');

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    // default: jest.fn(() => 'mocked baz'),
    getAuthURL: () => mockAuthURL,
  };
});

describe('Login Page', () => {
  it('should have Google sign in button with authenticated link', async () => {
    render(await Login())
    const signInButton = await screen.findByRole('button')
    expect(signInButton)
    const authLink:any = signInButton.parentElement
    expect(authLink.href).toEqual(mockAuthURL)
  })  
})