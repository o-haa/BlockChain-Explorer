import {
  Page,
  Background,
  TitleB,
  Table,
  Tr,
  Td1,
  Td2,
} from "../components/pageStyles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { bidx_request } from "../reducers/blockReducers";
import { tx_failure, tx_request } from "../reducers/txReducers";

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
const Block = () => {
  const dispatch = useDispatch();
  let params = useParams();

  useEffect(() => {
    dispatch({ type: bidx_request.toString(), payload: { params } });
    dispatch({ type: tx_request.toString() });
  }, [dispatch]);
  const block = useSelector((state) => state.blockReducers.idx[0]);
  const tx = useSelector((state) => state.txReducers.txList[0]);

  return (
    <>
      <Page>
        <Background>
          <TitleB>Block #{block[0].number}</TitleB>
          <Table>
            <Tr>
              <Td1>Block Height:</Td1>
              <Td2 style={{ fontWeight: "bold" }}>{block[0].number}</Td2>
            </Tr>
            <Tr>
              <Td1>Timestamp:</Td1>
              <Td2>{timeForToday(block[0].timestamp)}</Td2>
            </Tr>
            <Tr>
              <Td1>Transactions:</Td1>
              <Td2>
                {tx.filter((x) => x.blockNumber === block[0].number)
                  ? tx
                      .filter((x) => x.blockNumber === block[0].number)
                      .map((a, i) => {
                        return (
                          <Link
                            to={"/tx/" + a.hash}
                            style={{ color: "#2d1582", textDecoration: "none" }}
                          >
                            {a.hash}
                          </Link>
                        );
                      })
                  : ""}
              </Td2>
            </Tr>
            <Tr>
              <Td1>Mined by:</Td1>
              <Td2>
                <Link
                  to={"/accounts/" + block[0].miner}
                  style={{
                    color: "#2d1582",
                    textDecoration: "none",
                  }}
                >
                  {block[0].miner}
                </Link>
              </Td2>
            </Tr>
            <Tr>
              <Td1>Difficulty:</Td1>
              <Td2>{block[0].difficulty}</Td2>
            </Tr>
            <Tr>
              <Td1>Total Difficulty:</Td1>
              <Td2>{block[0].totalDifficulty}</Td2>
            </Tr>
            <Tr>
              <Td1>Size:</Td1>
              <Td2>{block[0].size}</Td2>
            </Tr>
            <Tr>
              <Td1>Gas Used:</Td1>
              <Td2>{block[0].gasUsed}</Td2>
            </Tr>
            <Tr>
              <Td1>Gas Limit:</Td1>
              <Td2>{block[0].gasLimit}</Td2>
            </Tr>
            <Tr>
              <Td1>Extra Data:</Td1>
              <Td2>{block[0].extraData}</Td2>
            </Tr>
            <Tr>
              <Td1>Hash:</Td1>
              <Td2>{block[0].hash}</Td2>
            </Tr>
            <Tr>
              <Td1>Parent Hash:</Td1>
              <Td2>{block[0].parentHash}</Td2>
            </Tr>
            <Tr>
              <Td1>Sha3Uncles:</Td1>
              <Td2>{block[0].sha3Uncles}</Td2>
            </Tr>
            <Tr>
              <Td1>StateRoot:</Td1>
              <Td2>{block[0].stateRoot}</Td2>
            </Tr>
            <Tr>
              <Td1>Nonce:</Td1>
              <Td2>{block[0].nonce}</Td2>
            </Tr>
          </Table>
        </Background>
      </Page>
    </>
  );
};

export default Block;
