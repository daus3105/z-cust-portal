'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '@/app/store/store'
import { signInUser } from './features/signedUser/signedUserSlice'
import { SignedUser } from '@/app/api/types'

export default function StoreProvider({
  signedUser,
  children
}: {
  signedUser: SignedUser
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    storeRef.current.dispatch(signInUser(signedUser));
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}