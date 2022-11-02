import React from "react";
import Moment from "react-moment";

const Timer = (props) => {
    var today = new Date();
 return (
    <Moment date={today} format="hh:mm:ss"/>
 );
};
export default Timer