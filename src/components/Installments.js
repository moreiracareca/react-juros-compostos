import React from "react";

export default function Installments(props) {
  return (
    <div>
      <div className="col s2" style={{ border: "1px solid #dedede", margin: "10px" }}>
        <div className="col s3">{props.parcela}</div>
        <div className="col s9">
          <span style={{ color: props.color }}>{props.total}</span>
          <br />
          <span style={{ color: props.color }}>{props.rendimento}</span>
          <br />
          <span style={{ color: props.color }}>{props.taxa}</span>
        </div>
      </div>
    </div>
  );
}
