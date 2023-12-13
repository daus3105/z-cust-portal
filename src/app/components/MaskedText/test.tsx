/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from '@testing-library/react'
import MaskedText from '.'

describe('MaskedText', () => {
  const text = 'masked_rider@gmail.com'
  const maskedText = 'masked_*****@gmail.com'
  const renderMaskedText = async () => render(await <MaskedText>{text}</MaskedText>)

  it('should redact part of email', async () => {
    await renderMaskedText()
    expect(await screen.findByText(maskedText))
  })
  
  it('should show full email when button is clicked', async () => {
    await renderMaskedText()
    expect(await screen.findByText(maskedText))
    fireEvent.click(screen.getByRole('button'))
    expect(await screen.findByText(text))
  })

  it('should hide email again when button is clicked', async () => {
    await renderMaskedText()
    expect(await screen.findByText(maskedText))
    fireEvent.click(screen.getByRole('button'))
    expect(await screen.findByText(text))
    fireEvent.click(screen.getByRole('button'))
    expect(await screen.findByText(maskedText))
  })
})