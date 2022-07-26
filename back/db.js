require('dotenv').config()
const mysql = require('mysql2')

const host = process.env.DB_HOST || '127.0.0.1'
const user = process.env.DB_USER || 'oha'
const password = process.env.DB_PASSWORD || '1234'
const database = process.env.DB_DATABASE || 'block'

const config = { host, user, password, database }
const pool = mysql.createPool(config)
const promisePool = pool.promise()

exports.pool = promisePool
