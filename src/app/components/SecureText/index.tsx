"use client"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye /*faEyeSlash*/ } from '@fortawesome/free-solid-svg-icons'

type SecureTextProps = {
  children: string
  retrieveId?: number
  retrieveAction: Function
}

export default function SecureText(props: SecureTextProps) {
  const {children, retrieveAction} = props
  const [text, setText] = useState(children)
  const [isRetrieved, setIsRetrieved] = useState(false)
  
  return <div className="inline">
    {text}
    {` `}
    {!isRetrieved ? <button 
      type="button" 
      // onClick={() => setIsMasked(value => !value)}
      onClick={() => {
        setText(retrieveAction())
        setIsRetrieved(true)
      }}
    >
      <FontAwesomeIcon icon={faEye} />
    </button> : null}
  </div>
}