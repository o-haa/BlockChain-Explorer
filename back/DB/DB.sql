CREATE DATABASE block;
USE block

CREATE TABLE block (  
    difficulty INT NOT NULL,
    extraData CHAR(52) NOT NULL,
    transactions CHAR(66),
    gasLimit INT NOT NULL,
    gasUsed INT NOT NULL,
    hash CHAR(66) NOT NULL,
    miner CHAR(42) NOT NULL,
    mixHash CHAR(66) NOT NULL,
    nonce  VARCHAR(20) NOT NULL,
    number INT NOT NULL PRIMARY KEY,
    parentHash CHAR(66) NOT NULL,
    receiptsRoot CHAR(66) NOT NULL,
    sha3Uncles CHAR(66) NOT NULL,
    size INT NOT NULL,
    stateRoot  CHAR(66) NOT NULL,
    timestamp INT NOT NULL,
    totalDifficulty INT NOT NULL,
    transactionsRoot VARCHAR(70) NOT NULL
);

CREATE TABLE tx(
    blockHash CHAR(66) NOT NULL,
    blockNumber INT NOT NULL,
    sender CHAR(42) NOT NULL,
    gas INT NOT NULL,
    gasPrice INT NOT NULL,
    hash CHAR(66) NOT NULL PRIMARY KEY,
    input TEXT,
    nonce INT NOT NULL,
    received CHAR(42) NOT NULL,
    transactionIndex INT NOT NULL,
    value INT NOT NULL
)

CREATE TABLE accounts (
    address CHAR(66) NOT NULL PRIMARY KEY
);


