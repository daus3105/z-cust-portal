"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks"
import { signInUser, signOutUser } from "@/app/store/features/signedUser/signedUserSlice"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function NavProfileMenu({name, photo} : {name: string, photo: string}) {
  const [isOpen, setIsOpen] = useState(false)
  const [hideComponent, setHideComponent] = useState(false)
  const signedUser = useAppSelector(state => state.signedUser)
  
  useEffect(() => {
    if (!signedUser.name) {
      const dispatch = useAppDispatch()
      dispatch(signInUser({name, photo}))
    }
  }, [])
  
  const handleSignOut = () => {
    const dispatch = useAppDispatch()
    dispatch(signOutUser())
    setHideComponent(true)
  }

  return <div className="float-right" hidden={hideComponent}>
    <div onClick={() => setIsOpen(v => !v)}>
      <img 
        src={signedUser.photo || ''}
        alt='profile image'
        width={60}
        height={60}
        className='rounded-full'
      />
    </div>
    <div className="absolute bg-white shadow-lg p-2 top-18 right-2 rounded border-slate-100	border-2 space-y-2" hidden={!isOpen}>
      <div></div>
      <div className="border-b-2">{signedUser.name}</div>
      <div><Link href="/logout" onClick={() => handleSignOut()}>Sign Out <FontAwesomeIcon icon={faArrowRightFromBracket} /></Link></div>
    </div>
  </div>
}