import functionShowMessages from './functions/function_show_messages'
import { DataBaseConnection } from './classes/database_connection'
// export default allows to import only a single function, class, interface etc,...

const clientConnection = DataBaseConnection.factory({
  baseType: DataBaseConnection.TYPE_MYSQL,
  username: 'Admin',
  password: 'admin123',
  ip: DataBaseConnection.LOCAL,
})

functionShowMessages(clientConnection)
