import type EEnumSmartphones from '../enumerators/enum_smartphones'
import type INotificationUser from '../interfaces/interface_notification_user'

export default class NotificationUser implements INotificationUser {
  name: string
  email: string
  phone: string
  smartphone: EEnumSmartphones

  constructor(
    name: string,
    email: string,
    phone: string,
    smartphone: EEnumSmartphones
  ) {
    this.name = name
    this.email = email
    this.phone = phone
    this.smartphone = smartphone
  }
}
