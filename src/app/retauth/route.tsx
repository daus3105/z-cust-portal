import { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { getToken } from '@/app/api/google' 

// export const dynamic = 'force-dynamic' // defaults to force-static
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  // const token = searchParams.get('token')
  console.log('code:', searchParams.get('code'))
  const tokens = await getToken(searchParams.get('code') || '')

  // console.log(request)
  console.log('tokens:', tokens)
  cookies().set({name: 'goa2_tok', value: JSON.stringify(tokens), httpOnly: true})
  // return NextResponse.redirect({tokens})
  redirect('/users')
//   redirect('/users/first_name/g/last_name/w')
}