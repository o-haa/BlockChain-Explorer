const express = require('express')
const Web3 = require('web3')
const { pool } = require('../db')

const router = express.Router()

let web3
web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9000'))

router.post('/', async (req, res) => {
    const showTx = `select * from tx order by blockNumber desc limit 7`

    try {
        const [result] = await pool.query(showTx)
        const response = {
            result,
        }
        res.json(response)
    } catch (e) {
        console.log(e.message)
    }
})

router.post('/alltx', async (req, res) => {
    const showAllTx = `select * from tx order by blockNumber desc`

    try {
        const [result] = await pool.query(showAllTx)
        const response = {
            result,
        }
        res.json(response)
    } catch (e) {
        console.log(e.message)
    }
})

router.post('/:hash', async (req, res) => {
    const hash = [req.params.hash]
    const sql = `select * from tx where hash = ?`

    try {
        const [result] = await pool.query(sql, hash)
        const response = {
            result,
        }
        res.json(response)
    } catch (e) {
        console.log('block  idx', e.message)
    }
})

module.exports = router
