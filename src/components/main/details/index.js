import React, { useState } from "react";
import "./index.css";
import "../index.css";
import { plans } from "./plans";
import check from "../../../image/checkmark.svg";
import middle from "../../../image/checkmark-orange.svg";
import infinity from "../../../image/infinity.png";
import multiply from "../../../image/multiply.png";
import info from ".././../../image/info.svg";

export const TableBlock = ({ name }) => {
  const [select, setSelect] = useState(plans);
  return (
    <div className={name !== undefined ? name : "table-all"} select={select}>
      {plans.map((plan) => (
        <BasicTable key={plan.id} plan={plan} onClick={() => setSelect(plan)} />
      ))}
    </div>
  );
};

const BasicTable = ({ plan, onClick }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <>
      <table className={show ? "select" : "table-info"}>
        <tbody>
          <tr>
            <th onClick={onClick && handleClick}>{plan.name}</th>
            {plan.value.map((item) => (
              <td key={item.id}>
                {item === true ? (
                  <img src={check} width="20px" alt="check" />
                ) : item === "middle" ? (
                  <img src={middle} width="20px" alt="middle" />
                ) : (
                  item
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <DetailTable show={show} details={plan.details} />
    </>
  );
};

const DetailTable = ({ details, show }) => {
  if (!show) {
    return null;
  }
  return (
    <>
      {details.map((detail) => (
        <table key={detail.id} className="table-detail">
          <tbody>
            <tr>
              <div className="th-main">
                <th>
                  {detail.name}
                  <span className="icon" data-title={detail.prompt}>
                    <img src={info} alt="info" />
                  </span>
                </th>
              </div>
              {detail.value.map((index) => (
                <td key={index.id}>
                  {index === true ? (
                    <img src={check} width="20px" alt="check" />
                  ) : index === false ? (
                    <img src={multiply} width="20px" alt="multiply" />
                  ) : index === "middle" ? (
                    <img src={middle} width="20px" alt="middle" />
                  ) : index === "infinity" ? (
                    <img src={infinity} width="20px" alt="infinity" />
                  ) : (
                    index
                  )}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      ))}
    </>
  );
};
