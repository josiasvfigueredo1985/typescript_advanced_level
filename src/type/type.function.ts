type TpAdministrator = {
  name: string
  id: number
  isAdmin: boolean
}

type TpUser = {
  name: string
  id: number
  isUser: boolean
}

function checkUser(user: TpAdministrator | TpUser): void {
  if (user['isAdmin']) {
    console.log(`${user.name} is an administrator`)
  } else if (user['isUser']) {
    console.log(`${user.name} is a regular user`)
  }
}

const admin: TpAdministrator = { name: 'John', id: 1, isAdmin: true }
const regularUser: TpUser = { name: 'Michael', id: 2, isUser: true }

checkUser(regularUser)
checkUser(admin)
