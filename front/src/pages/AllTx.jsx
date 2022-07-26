import {
  TxBox,
  Hashes,
  Tx,
  FromBox,
  FromTo,
  SRewardValue,
} from "../components/searchStyles";
import { AllBlocks, Content } from "../components/indexStyles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagenation";
import { allTx_request } from "../reducers/txReducers";

const AllTx = () => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: allTx_request.toString() });
  }, [dispatch]);

  const tx = useSelector((state) => state.txReducers.allTx[0]);

  return (
    <div style={{ marginTop: "30px" }}>
      {tx &&
        tx.slice(offset, offset + limit).map((x, i) => {
          return (
            <>
              <AllBlocks>
                <Content>
                  <TxBox style={{ paddingTop: "0", lineHeight: "45px" }}>
                    Tx
                  </TxBox>
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
                </Content>
              </AllBlocks>
            </>
          );
        })}
      {tx.length > 0 && (
        <Pagination
          style={{ display: "inline-block" }}
          total={tx.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      )}
    </div>
  );
};

export default AllTx;
