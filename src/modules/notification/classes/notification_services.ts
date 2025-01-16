import type INotificationUser from '../interfaces/interface_notification_user'
import type INotificationServices from '../interfaces/interface_notification_services'

export class NotificationServices implements INotificationServices {
  serviceSMS(user: INotificationUser): boolean {
    console.log(`Sending SMS to user ${user.name}'s ${user.phone}...`)
    return true
  }

  serviceEmail(user: INotificationUser): boolean {
    console.log(`Sending Email to user ${user.name}'s ${user.email}...`)
    return true
  }

  serviceMobile(user: INotificationUser): boolean {
    console.log(
      `Sending Pop-up notification to user ${user.name}'s ${user.smartphone}...`
    )
    return true
  }

  static serviceCall(user: INotificationUser): boolean {
    console.log(`Sending Call to user ${user.name}'s ${user.phone}...`)
    return true
  }
}

export const callService = (user: INotificationUser): void => {
  NotificationServices.serviceCall(user)
}
