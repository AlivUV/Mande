import { Pool, Client } from 'pg'

let conn: any

if (!conn) {
  conn = new Pool({
    user: 'karen',
    password: 'karen',
    host: '127.0.0.1',
    port: 5432,
    database: 'baseDatos'
  })
}

export { conn }