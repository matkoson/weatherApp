import _ from "lodash";
import React from "react";
import {Sparklines, SparklinesLine, SparklinesReferenceLine } from "react-sparklines";

function average(data) {
  return _.round(_.sum(data)/data.length);
}

export default (props) => {
  // let avg = props.data.reduce((a,c)=>a+c)/props.data.length;
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="mean" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
};
