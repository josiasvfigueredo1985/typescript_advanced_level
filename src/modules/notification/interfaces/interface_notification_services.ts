import type IUser from './interface_notification_user'

export default interface INotificationServices {
  serviceSMS: (user: IUser) => boolean
  serviceEmail: (user: IUser) => boolean
  serviceMobile: (user: IUser) => boolean
}
