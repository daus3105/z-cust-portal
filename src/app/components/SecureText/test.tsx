/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from '@testing-library/react'
import SecureText from '.'

describe('SecureText', () => {
  const text = 'masked_rider@gmail.com'
  const secureText = 'masked_*****@gmail.com'
  const mockRetrieveAction = () => text

  const renderSecureText = async () => render(await <SecureText retrieveAction={() => mockRetrieveAction()}>{secureText}</SecureText>)

  it('should redact part of email', async () => {
    await renderSecureText()
    expect(await screen.findByText(secureText))
  })
  
  it('should retrieve full email when button is clicked', async () => {
    await renderSecureText()
    expect(await screen.findByText(secureText))
    fireEvent.click(screen.getByRole('button'))
    expect(await screen.findByText(text))
  })

  // it('should hide email again when button is clicked', async () => {
  //   await renderSecureText()
  //   expect(await screen.findByText(secureText))
  //   fireEvent.click(screen.getByRole('button'))
  //   expect(await screen.findByText(text))
  //   fireEvent.click(screen.getByRole('button'))
  //   expect(await screen.findByText(secureText))
  // })
})