import { Page, Background } from "../components/pageStyles";
import {
  ATitle,
  ATable,
  Balance,
  ATr,
  ATr2,
} from "../components/accountStyles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import {
  account_request,
  new_account_request,
} from "../reducers/accountReducers";

const Account = () => {
  const dispatch = useDispatch();
  let params = useParams();

  useEffect(() => {
    dispatch({ type: account_request.toString(), payload: { params } });
    dispatch({ type: new_account_request.toString() });
  }, [dispatch]);

  const account = useSelector((state) => state.accountReducers.account[0]);

  const balance = useSelector((state) => state.accountReducers.balance);
  const tx = useSelector((state) => state.txReducers.allTx[0]);

  return (
    <>
      <Page>
        <Background>
          <ATitle>
            Address: <span> {account.address} </span>
          </ATitle>
          <Balance>
            Balance: <span> {balance} ETH </span>
          </Balance>
          <ATitle
            style={{
              marginTop: "40px",
            }}
          >
            Transactions
          </ATitle>
          <ATable>
            <ATr2>
              <td>TXN HASH</td>
              <td>Block</td>
              <td>From</td>
              <td>To</td>
              <td>Value</td>
            </ATr2>
            {tx
              .filter((x) => x.sender === account.address)
              .map((a, i) => {
                return (
                  <ATr>
                    <td>
                      <Link
                        to={"/tx/" + a.hash}
                        style={{
                          color: "#2d1582",
                          textDecoration: "none",
                        }}
                      >
                        {a.hash}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={"/block/" + a.blockNumber}
                        style={{ color: "#2d1582", textDecoration: "none" }}
                      >
                        #{a.blockNumber}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={"/accounts/" + a.sender}
                        style={{
                          color: "#2d1582",
                          textDecoration: "none",
                        }}
                      >
                        {a.sender}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={"/accounts/" + a.received}
                        style={{
                          color: "#2d1582",
                          textDecoration: "none",
                        }}
                      >
                        {a.received}
                      </Link>
                    </td>
                    <td>{a.value / 10 ** 18}ETH</td>
                  </ATr>
                );
              })}
            {tx
              .filter((x) => x.received === account.address)
              .map((a, i) => {
                return (
                  <ATr>
                    <td>
                      <Link
                        to={"/tx/" + a.hash}
                        style={{
                          color: "#2d1582",
                          textDecoration: "none",
                        }}
                      >
                        {a.hash}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={"/block/" + a.blockNumber}
                        style={{ color: "#2d1582", textDecoration: "none" }}
                      >
                        #{a.blockNumber}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={"/accounts/" + a.sender}
                        style={{
                          color: "#2d1582",
                          textDecoration: "none",
                        }}
                      >
                        {a.sender}
                      </Link>
                    </td>
                    <td>
                      <Link
                        to={"/accounts/" + a.received}
                        style={{
                          color: "#2d1582",
                          textDecoration: "none",
                        }}
                      >
                        {a.received}
                      </Link>
                    </td>
                    <td>{a.value / 10 ** 18}ETH</td>
                  </ATr>
                );
              })}
          </ATable>
        </Background>
      </Page>
    </>
  );
};

export default Account;
