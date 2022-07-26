import {
  Body,
  IndexBox,
  Title,
  List,
  Content,
  BkBox,
  BlockInfo,
  BlockNumber,
  BlockTime,
  Miner,
  RewardValue,
  TxBox,
  Hashes,
  Tx,
  FromBox,
  FromTo,
} from "../components/indexStyles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { block_request, newBlock_request } from "../reducers/blockReducers";
import { tx_request } from "../reducers/txReducers";

const timeForToday = (value) => {
  const today = new Date();
  const timeValue = value * 1000;

  const betweenTime = Math.floor((today.getTime() - timeValue) / 1000 / 60);
  if (betweenTime < 1) return "방금전";
  if (betweenTime < 60) {
    return `${betweenTime}분전`;
  }

  const betweenTimeHour = Math.floor(betweenTime / 60);
  if (betweenTimeHour < 24) {
    return `${betweenTimeHour}시간전`;
  }

  const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
  if (betweenTimeDay < 365) {
    return `${betweenTimeDay}일전`;
  }

  return `${Math.floor(betweenTimeDay / 365)}년전`;
};
const Index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: newBlock_request.toString() });
    dispatch({ type: block_request.toString() });
    dispatch({ type: tx_request.toString() });
  }, [dispatch]);
  const block = useSelector((state) => state.blockReducers.bkList[0]);
  const tx = useSelector((state) => state.txReducers.txList[0]);

  return (
    <>
      <Body>
        <IndexBox>
          <Title> Latest Blocks </Title>
          <List>
            {block &&
              block.map((x, i) => {
                return (
                  <>
                    <Content>
                      <BkBox>Bk</BkBox>
                      <BlockInfo key={i}>
                        <BlockNumber>
                          <Link
                            to={"/block/" + x.number}
                            style={{ color: "#2d1582", textDecoration: "none" }}
                          >
                            #{x.number}
                          </Link>
                        </BlockNumber>
                        <BlockTime>{timeForToday(x.timestamp)}</BlockTime>
                      </BlockInfo>
                      <Miner>
                        <span style={{ color: "black" }}>Miner</span>{" "}
                        <Link
                          to={"/accounts/" + x.miner}
                          style={{
                            color: "#2d1582",
                            textDecoration: "none",
                            fontWeight: "bold",
                          }}
                        >
                          {x.miner}
                        </Link>
                      </Miner>
                      <RewardValue>
                        {x.reward === null ? 2 : x.reward}ETH
                      </RewardValue>
                    </Content>
                  </>
                );
              })}
          </List>
        </IndexBox>
        <IndexBox>
          <Title> Latest Transaction </Title>
          <List>
            {tx &&
              tx.map((x, i) => {
                return (
                  <>
                    <Content>
                      <TxBox>Tx</TxBox>

                      <Hashes>
                        <Link
                          to={"/tx/" + x.hash}
                          style={{
                            color: "#2d1582",
                            textDecoration: "none",
                            fontWeight: "bold",
                          }}
                        >
                          {x.hash}
                        </Link>
                      </Hashes>
                      <Tx>
                        <FromBox>
                          <span style={{ color: "black" }}>From</span>
                          <FromTo style={{ marginLeft: "3%" }}>
                            <Link
                              to={"/accounts/" + x.sender}
                              style={{
                                color: "#2d1582",
                                textDecoration: "none",
                                fontWeight: "bold",
                              }}
                            >
                              {x.sender}
                            </Link>
                          </FromTo>
                        </FromBox>

                        <FromBox>
                          <span style={{ color: "black" }}>To</span>
                          <FromTo style={{ marginLeft: "3%" }}>
                            <Link
                              to={"/accounts/" + x.received}
                              style={{
                                color: "#2d1582",
                                textDecoration: "none",
                                fontWeight: "bold",
                              }}
                            >
                              {x.received}
                            </Link>
                          </FromTo>
                        </FromBox>
                      </Tx>
                      <RewardValue>{x.value * 10 ** -18}ETH</RewardValue>
                    </Content>
                  </>
                );
              })}
          </List>
        </IndexBox>
      </Body>
    </>
  );
};

export default Index;
