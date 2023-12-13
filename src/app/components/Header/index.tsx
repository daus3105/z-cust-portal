import Image from 'next/image'
import NavProfileMenu from '../NavProfileMenu'
import { isAuthenticated, getPeopleDetails } from '@/app/api/google'

export default async function Header() {
  let userDetails:any = {}
  if (await isAuthenticated()) {
    userDetails = await getPeopleDetails()
  }

  return <div className="grid grid-cols-2 bg-white shadow-lg p-2 sticky top-0">
    <div className='flex items-center'>
      <div>
        <Image
          src="/images/portal2.jpeg"
          alt="App Logo"
          // className="dark:invert"
          width={60}
          height={24}
          priority
        />
      </div>
      <div>
        <h1 className='text-xs md:text-2xl font-sans'>Customer Portal</h1>
      </div>
    </div>
    <div>
      { await isAuthenticated() ? <NavProfileMenu 
        name={userDetails.name} 
        photo={userDetails.photo} 
      />
     : null}
    </div>
  </div>
}