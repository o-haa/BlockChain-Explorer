const express = require('express')
const Web3 = require('web3')
const { pool } = require('../db')

const router = express.Router()

let web3
web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9000'))

router.post('/new', async (req, res) => {
    const accounts = await web3.eth.getAccounts()

    const confirm = `select count(*) as num from accounts `
    let num = 0
    try {
        const [[result]] = await pool.query(confirm)
        num = result
    } catch (e) {
        console.log(e.message)
    }

    if (accounts.length >= num.num) {
        for (let i = 1; i <= accounts.length; i++) {
            const prepare = [accounts[i]]

            const sql = `insert into accounts value (?)`

            try {
                const [result] = await pool.query(sql, prepare)
                const response = {
                    result,
                }
            } catch (e) {
                console.log(e.message)
            }
        }
    }
    res.json({})
})

router.post('/:address', async (req, res) => {
    const address = [req.params.address]

    const addressString = req.params.address

    const balance = await web3.eth.getBalance(addressString)
    const realBalance = balance / 10 ** 18

    const sql = `select * from accounts where address = ?`

    try {
        const [result] = await pool.query(sql, address)
        const response = {
            result,
            realBalance,
        }
        console.log(response)
        res.json(response)
    } catch (e) {
        console.log('accounts address', e.message)
    }
})

module.exports = router
