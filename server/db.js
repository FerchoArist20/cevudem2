import { createPool } from 'mysql2/promise'

const data = {
    host: "database",
    user: "root",
    password: "secret",
    database: "dbcev",
    port:"3306"
}

export class Pool {
    static async query(sql, list = []) {
        let pool = createPool(data)

        const promise = await pool.query(sql, list)
        pool.end()
        pool = undefined
        return promise
    }
}

