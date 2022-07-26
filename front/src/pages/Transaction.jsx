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
import { tidx_request } from "../reducers/txReducers";

const Block = () => {
  const dispatch = useDispatch();
  let params = useParams();

  useEffect(() => {
    dispatch({ type: tidx_request.toString(), payload: { params } });
  }, [dispatch]);
  const tx = useSelector((state) => state.txReducers.idx[0]);
  return (
    <>
      <Page>
        <Background>
          <TitleB>Transaction Details</TitleB>
          <Table>
            <Tr>
              <Td1>Transaction Hash :</Td1>
              <Td2>{tx[0].hash}</Td2>
            </Tr>

            <Tr>
              <Td1>Block:</Td1>
              <Td2>
                <Link
                  to={"/block/" + tx[0].blockNumber}
                  style={{ color: "#2d1582", textDecoration: "none" }}
                >
                  {tx[0].blockNumber}
                </Link>
              </Td2>
            </Tr>

            <Tr>
              <Td1>From:</Td1>
              <Td2>
                <Link
                  to={"/accounts/" + tx[0].sender}
                  style={{
                    color: "#2d1582",
                    textDecoration: "none",
                  }}
                >
                  {tx[0].sender}
                </Link>
              </Td2>
            </Tr>
            <Tr>
              <Td1>To:</Td1>
              <Td2>
                <Link
                  to={"/accounts/" + tx[0].received}
                  style={{
                    color: "#2d1582",
                    textDecoration: "none",
                  }}
                >
                  {tx[0].received}
                </Link>
              </Td2>
            </Tr>
            <Tr>
              <Td1>Value:</Td1>
              <Td2>{tx[0].value * 10 ** -18}ETH</Td2>
            </Tr>
            {/* <Tr>
              <Td1>Transaction Fee:</Td1>
              <Td2>{tx[0].gasUsed}</Td2>
            </Tr> */}
            <Tr>
              <Td1>Gas Price:</Td1>
              <Td2>{tx[0].gasPrice / 10 ** 9} Gwei</Td2>
            </Tr>

            <Tr>
              <Td1>Gas Used:</Td1>
              <Td2>{tx[0].gas / 10 ** 9} ETH</Td2>
            </Tr>

            <Tr>
              <Td1>Input Data:</Td1>
              <Td2>{tx[0].input}</Td2>
            </Tr>
          </Table>
        </Background>
      </Page>
    </>
  );
};

export default Block;
