const express = require("express")
const cors = require("cors")
const { Pool } = require("pg")

const app = express()
app.use(cors())

    const pool = new Pool({
        user: "postgres",
        database: "postgres",
        password: "1234",
        host: "localhost",
        port: 5432
    })


    app.get("/api/main", async (req, res) =>{
        const { brand } = req.query
        let sql = "SELECT * from cars"
        const val = []
        if (brand) {
            sql += " WHERE brand = $1"
            val.push(brand)
        }
        const r = await pool.query(sql, val)
        res.json(r.rows)
    })

app.listen(3000, () => console.log("Сервер работает на 3000 порту"))
