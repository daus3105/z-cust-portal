async function getUserByPage(page: number) {
  return fetch(`https://reqres.in/api/users?page=${page}`)
}
  
export async function getUsers() {
  let users: any[] = []
  // const res = await fetch(`https://reqres.in/api/users?page=${page}`)
  const firstPageRes = await getUserByPage(1)
  
  if (!firstPageRes.ok) {
    throw new Error('Failed to fetch data')
  }

  const firstPageResJson = await firstPageRes.json()
  // console.log(`run page 1`, firstPageResJson?.data)

  users = [
    ...users, 
    ...firstPageResJson?.data
  ]
  
  for (let i = 2; i <= firstPageResJson.total_pages; i++) {
    const nextPageRes = await getUserByPage(i)
    const nextPageResJson = await nextPageRes.json()
    // console.log(`run page ${i}:`, nextPageResJson?.data)
    users = [
      ...users, 
      ...nextPageResJson?.data
    ]
  }

  return users;
}