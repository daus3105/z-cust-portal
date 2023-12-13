import { isAuthenticated } from "../api/google";
import { getUsers } from "../api/users";
import UserList from "../components/UserList";

export default async function Users() {
  const users = await getUsers()
  if (!await isAuthenticated()) {
    throw new Error('auth')
  }
  // const sortFirstNameGLastNameW = [
  //   {field: "first_name", value: "g"},
  //   {field: "last_name", value: "w"}
  // ]
  // const sortedUser = sortFirstNameGLastNameW.map(c => {
  //   return users.filter(u => u[c.field].toUpperCase().startsWith(c.value.toUpperCase()))
  // })
  // const sortedUser = users.filter(u => sortFirstNameGLastNameW.find(c => u[c.field].toUpperCase().startsWith(c.value.toUpperCase())))
  const sortedUser = users.filter(u => u.first_name.toLowerCase().startsWith('g') || u.last_name.toLowerCase().startsWith('w'))

  return <main className="flex min-h-screen flex-col items-center md:p-24">
    <div className="bg-white rounded-xl shadow-lg px-5 py-5 w-full mb-4 md:mb-7 mt-4 space-y-2">
      <div>List of Users</div>
      <div className="space-x-4">
        
      </div>
    </div>
    <UserList data={sortedUser} />
  </main>
}