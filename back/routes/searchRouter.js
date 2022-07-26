const express = require('express')
const { pool } = require('../db')
const router = express.Router()

router.post('/block', async (req, res) => {
    const { action } = req.body

    const getBlock = `select *, 
    (select SUM(transaction.gasPrice * transaction.gas /power(10,18)) + 2
    from tx transaction
    where transaction.blockNumber=bk.number) as reward
    from block bk where number like '%${action}%' `

    try {
        const [result] = await pool.query(getBlock)
        const response = {
            result,
        }
        res.json(response)
    } catch (e) {
        console.log(e.message)
    }
})

router.post('/tx', async (req, res) => {
    const { payload } = req.body

    const getTx = `select * from tx where hash like '%${payload}%' `

    try {
        const [result] = await pool.query(getTx)
        const response = {
            result,
        }
        res.json(response)
    } catch (e) {
        console.log(e.message)
    }
})

module.exports = router
