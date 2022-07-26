const Web3 = require('web3')

describe('Block', () => {
    let web3

    it('web3 연결 테스트', async () => {
        //여기에서 web3 js 의 큰 객체.
        web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9000'))

        //geth에 요청해서 받아야 한다. 하지만 메서드하나로 따로 요청하는 코드를 작성하지 않아도 됨.
        const block_number = await web3.eth.getBlockNumber()
        console.log(block_number)

        //172개의 블록을 조회하고 싶다면?
        for (let i = 1; i <= block_number; i++) {
            const block = await web3.eth.getBlock(i, true)
            // console.log(block)
            //트랜잭션 내용도 불러오고 싶다면?
            for (let j = 0; j < block.transactions.length; j++) {
                // console.log('트랜잭션',block.transactions[j])
            }
        }

        console.log(await web3.eth.getBlock(243, true))
    })

    //getTransactionRecipt()
    //getTransaction()

    //사용자가 우리에게 보내주는 데이터의 형태가 getTransaction
    it('getTransaction', async () => {
        const tx = await web3.eth.getTransaction('0x310e67a08e2ebee2523755fe6675724dd255cdc4bbf891c94522e3420ca2eafe')
        console.log(tx)
    })

    //geth가 트랜잭션을 내용을 실행한  결과
    it('getTransactionRecipt', async () => {
        const tx = await web3.eth.getTransactionReceipt(
            '0x310e67a08e2ebee2523755fe6675724dd255cdc4bbf891c94522e3420ca2eafe',
        )
        console.log('tx Recipt:', tx)
    })
})
