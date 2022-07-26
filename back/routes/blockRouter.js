const express = require('express')
const Web3 = require('web3')
const { pool } = require('../db')

const router = express.Router()

let web3
web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9000'))

router.post('/', async (req, res) => {
    const showBlock = `select *, 
    (select SUM(transaction.gasPrice * transaction.gas /power(10,18)) + 2
    from tx transaction
    where transaction.blockNumber=bk.number) as reward
    from block bk order by bk.number desc limit 7`

    try {
        const [result] = await pool.query(showBlock)
        const response = {
            result,
        }
        res.json(response)
    } catch (e) {
        // console.log(e.message)
    }
})

router.post('/allblock', async (req, res) => {
    const showAllBlock = `select *, 
    (select SUM(transaction.gasPrice * transaction.gas /power(10,18)) + 2
    from tx transaction
    where transaction.blockNumber=bk.number) as reward
    from block bk order by bk.number desc `

    try {
        const [result] = await pool.query(showAllBlock)
        const response = {
            result,
        }
        res.json(response)
    } catch (e) {
        console.log('allblock', e.message)
    }
})

router.post('/new', async (req, res) => {
    const latestBlock = await web3.eth.getBlockNumber()

    const confirm = `select count(*) as num from block `
    let num = 0
    try {
        const [[result]] = await pool.query(confirm)
        num = result
    } catch (e) {
        console.log(e.message)
    }

    if (latestBlock >= num.num) {
        for (let i = 1; i <= latestBlock; i++) {
            const block = await web3.eth.getBlock(i, true)

            const prepare = [
                block.difficulty,
                block.extraData,
                block.gasLimit,
                block.gasUsed,
                block.hash,
                block.miner,
                block.mixHash,
                block.nonce,
                block.number,
                block.parentHash,
                block.receiptsRoot,
                block.sha3Uncles,
                block.size,
                block.stateRoot,
                block.timestamp,
                block.totalDifficulty,
                block.transactionsRoot,
            ]

            const sql = `insert into block values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`

            try {
                const [result] = await pool.query(sql, prepare)
                const response = {
                    result,
                }
            } catch (e) {
                console.log(e.message)
            }

            const txConfirm = `select count(*) as txnum from tx `
            let txnum = 0
            try {
                const [[result]] = await pool.query(txConfirm)
                txnum = result
            } catch (e) {
                console.log(e.message)
            }

            if (block.transactions.length > 0) {
                for (let j = 0; j < block.transactions.length; j++) {
                    const tx = block.transactions[j]

                    const txPrepare = [
                        tx.blockHash,
                        tx.blockNumber,
                        tx.from,
                        tx.gas,
                        tx.gasPrice,
                        tx.hash,
                        tx.input,
                        tx.nonce,
                        tx.to,
                        tx.transactionIndex,
                        tx.value,
                    ]

                    const txSql = `insert into tx values (?,?,?,?,?,?,?,?,?,?,?)`

                    try {
                        const [result] = await pool.execute(txSql, txPrepare)
                        const response = {
                            result,
                        }
                    } catch (e) {
                        console.log(e.message)
                    }
                }
            }
        }
    }
    res.json({})
})

router.post('/:idx', async (req, res) => {
    const idx = [req.params.idx]
    const sql = `select * from block where number = ?`

    try {
        const [result] = await pool.query(sql, idx)
        const response = {
            result,
        }
        res.json(response)
    } catch (e) {
        console.log('block  idx', e.message)
    }
})

module.exports = router
