import {
  SearchList,
  SContent,
  SBkBox,
  SBlockInfo,
  SBlockNumber,
  BlockTime,
  SMiner,
  SRewardValue,
  TxBox,
  Hashes,
  Tx,
  FromBox,
  FromTo,
} from "../components/searchStyles";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagenation";

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

const Search = () => {
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const Block = useSelector((state) => state.searchReducers.Block);
  const Hash = useSelector((state) => state.searchReducers.Hash);

  return (
    <div style={{ marginTop: "50px" }}>
      {Block &&
        Block.slice(offset, offset + limit).map((x, i) => {
          return (
            <>
              <SearchList>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <SContent>
                    <SBkBox>Bk</SBkBox>
                    <SBlockInfo key={i}>
                      <SBlockNumber>
                        <Link
                          to={"/block/" + x.number}
                          style={{ color: "#2d1582", textDecoration: "none" }}
                        >
                          #{x.number}
                        </Link>
                      </SBlockNumber>
                      <BlockTime>{timeForToday(x.timestamp)}</BlockTime>
                    </SBlockInfo>
                    <SMiner>
                      <span style={{ color: "black" }}>Miner</span>
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
                    </SMiner>
                    <SRewardValue>
                      {x.reward === null ? 2 : x.reward}ETH
                    </SRewardValue>
                  </SContent>
                </div>
              </SearchList>
            </>
          );
        })}
      {Block.length > 0 && (
        <Pagination
          style={{ display: "inline-block" }}
          total={Block.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      )}

      {Hash &&
        Hash.slice(offset, offset + limit).map((x, i) => {
          return (
            <>
              <SearchList>
                <SContent>
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
                  <SRewardValue>{x.value * 10 ** -18}ETH</SRewardValue>
                </SContent>
              </SearchList>
            </>
          );
        })}
      {Hash.length > 0 && (
        <Pagination
          total={Hash.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default Search;
