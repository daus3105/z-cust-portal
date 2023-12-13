/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import fetch from 'jest-fetch-mock';
// import { enableFetchMocks } from 'jest-fetch-mock'
// enableFetchMocks()
import Users from './page'

jest.mock('../api/google', () => {
  const originalModule = jest.requireActual('../api/google');

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    // default: jest.fn(() => 'mocked baz'),
    isAuthenticated: () => false,
  };
});

// const mockTitleProvider = titleProvider as jest.MockedFn<() => string>
// const mockIsAuthenticated = isAuthenticated as jest.MockedFn<() => Promise<boolean>>

describe('Users Page', () => {
  it('should show error if user not authenticated', async () => {
    fetch.mockResponse(JSON.stringify({
      total_pages: 2,
      data: [
        {
          id: 7,
          email: "michael.lawson@reqres.in",
          first_name: "Michael",
          last_name: "Lawson",
          avatar: "https://reqres.in/img/faces/7-image.jpg"
        },
        {
          id: 8,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          avatar: "https://reqres.in/img/faces/8-image.jpg"
        }
      ]}))

    const expectedErrorMsg = 'auth'
    let actualErrorMsg;
    try {
      render(await Users())
    } catch(e: any) {
      actualErrorMsg = e.message
    }
    expect(actualErrorMsg).toEqual(expectedErrorMsg);
    expect(screen.findByText('You are not authorised to view this page! Please sign in'))
  })
})