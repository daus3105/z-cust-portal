/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NavProfileMenu from '.'

describe('NavProfileMenu', () => {
  it('should render name and profile photo', async () => {
    const name = 'John Doe'
    const photo = 'https://images.freeimages.com/images/large-previews/c22/cat-1395746.jpg'
    const mockStore = configureStore([]);
    const store = mockStore({
      signedUser: {
        name: name,
        photo: photo
      },
    });

    render (await <Provider store={store}>
      <NavProfileMenu name={name} photo={photo} />
    </Provider>)

    expect(await screen.findByText(name))
    const imageMatch:HTMLImageElement = await screen.findByAltText('profile image')
    expect(imageMatch.src).toEqual(photo)
  })
})