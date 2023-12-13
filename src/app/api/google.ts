import { google } from 'googleapis'
import { cookies } from 'next/headers';

const getClient = () => {
  return new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
  );
}

// google.options({auth: OAUTH2_CLIENT})

const SCOPES = [
  'https://www.googleapis.com/auth/userinfo.email',
  'https://www.googleapis.com/auth/userinfo.profile'
];

export async function getAuthURL() {
  return getClient().generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES.join(' '),
  });
}

export async function getToken(code: string) {
  const {tokens} = await getClient().getToken(code)
  return tokens
}

const people = async (tokens: Object) => {
  const client = getClient()
  // const {tokens} = await client.getToken(code)
  client.setCredentials(tokens)
  return google.people({version: 'v1', auth: client})
}

export async function isAuthenticated() {
  let result = false
  const token = cookies().get('goa2_tok')
  if (token) result = true
  return result
}

export async function getPeopleDetails() {
  try {
    const tokenString = cookies().get('goa2_tok')?.value
    const tokens = JSON.parse(tokenString || '{}')
    const PEOPLE = await people(tokens)

    const res = await PEOPLE.people.get({
      resourceName: 'people/me',
      personFields: 'names,emailAddresses,photos',
    });
    
    // console.log('signeduser:', res?.data)
    return {
      name: res?.data?.names?.[0]?.displayName || "", 
      photo: res?.data?.photos?.[0]?.url || ""
    }
  } catch (err) {
    // redirect('/login')
    // throw new Error('foo')
    return {name: "", photo: ""}
  }
}