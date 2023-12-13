import { render, screen } from '@testing-library/react'
import UserList from '.'

describe('UserList', () => {
  it('should display list of users based on passed data', async () => {
    const users = [
      {
        id: 7,
        email: "john.doe@reqres.in",
        first_name: "John",
        last_name: "Doe",
        avatar: "https://reqres.in/img/faces/7-image.jpg"
      },
      {
        id: 8,
        email: "jane.doe@reqres.in",
        first_name: "Jane",
        last_name: "Doe",
        avatar: "https://reqres.in/img/faces/8-image.jpg"
      }
    ]
    render(await <UserList data={users} />)
    const foundName1 = await screen.findAllByText(users[0].first_name, {exact: false})
    expect(foundName1)
    const foundName2 = await screen.findAllByText(users[1].first_name, {exact: false})
    expect(foundName2)
    // to add image check
  })
})