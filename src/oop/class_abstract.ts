interface IMyUser {
  name: string
  email: string
  telephone: string
}

abstract class Notifications {
  abstract send(user: IMyUser): boolean
}

class Email extends Notifications {
  send(user: IMyUser): boolean {
    console.log(`Sending e-mail to user ${user.email}...`)
    return true
  }
}

class SMS extends Notifications {
  send(user: IMyUser): boolean {
    console.log(`Sending SMS to user ${user.telephone}...`)
    return true
  }
}

new Email().send({
  email: 'test@gmail.com',
  name: 'John',
  telephone: '31-99999-9999',
})

new SMS().send({
  email: 'test@gmail.com',
  name: 'John',
  telephone: '31-99999-9999',
})
