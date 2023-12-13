"use client"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

type MaskedTextProps = {
  children: string
}

export default function MaskedText(props: MaskedTextProps) {
  const {children} = props
  const [isMasked, setIsMasked] = useState(true)
  const splitValue = children.split('')
  const atIndex = splitValue.indexOf('@')
  const maskedValue = splitValue.map((a, b) => b > atIndex / 2 && b < atIndex ? '*' : a)

  return <div className="inline">
    {isMasked ? maskedValue.join('') : children}
    {` `}
    <button 
      type="button" 
      onClick={() => setIsMasked(value => !value)}
    >
      {isMasked ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}
    </button>
  </div>
}