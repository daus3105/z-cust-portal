"use client"
import SecureText from "../SecureText"

type User = {
  id: number
  first_name: string
  last_name: string
  email: string
  avatar: string
}

type UserFilter = Array<{
  field: string
  value: string
}>

type UserListProps = {
  data: Array<User>
  retrieveEmail: Function
}

export default function UserList(props: UserListProps) {
  const {data, retrieveEmail} = props
  // const [sortedUserData, setSortedUserData] = useState(data)
  // const [sortBy, setSortBy] = useState('first_name')
  // const [isSortDesc, setIsSortDesc] = useState(true)
  
  // const sortedData = initialSort ? initialSort.map((c) => {
  //   return data.filter((u) => u[c.field] === c.value)
  // }) : data

  return <div className="bg-white px-5 py-7 shadow-lg rounded-2xl text-sm w-full">
    {data.map((i, o) => <div key={i.id} className="space-y-6">
      <div className="flex space-x-3">
        <div><img src={i.avatar} /></div>
        <div>
          <div>First Name: {i.first_name}</div>
          <div>Last Name: {i.last_name} </div>
          <div>email: <SecureText retrieveAction={() => retrieveEmail(i.id)}>{i.email}</SecureText></div>
        </div>
      </div>
      {o < data.length - 1 ? <div className="border-slate-100 border-t-2 pb-6" /> : null}
    </div>)}
  </div>
}