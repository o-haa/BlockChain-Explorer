import {
  SContent,
  SBkBox,
  SBlockInfo,
  SBlockNumber,
  BlockTime,
  SMiner,
  SRewardValue,
} from "../components/searchStyles";
import { AllBlocks } from "../components/indexStyles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagenation";
import { allBlock_request } from "../reducers/blockReducers";

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

const AllBlock = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: allBlock_request.toString() });
  }, [dispatch]);

  const block = useSelector((state) => state.blockReducers.allBk[0]);

  return (
    <div style={{ marginTop: "30px" }}>
      {block &&
        block.slice(offset, offset + limit).map((x, i) => {
          return (
            <>
              <AllBlocks>
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
                    </SMiner>
                    <SRewardValue>
                      {x.reward === null ? 2 : x.reward}ETH
                    </SRewardValue>
                  </SContent>
                </div>
              </AllBlocks>
            </>
          );
        })}
      {block.length > 0 && (
        <Pagination
          style={{ display: "inline-block" }}
          total={block.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default AllBlock;
