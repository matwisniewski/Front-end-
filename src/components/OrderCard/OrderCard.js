import React, { useContext, useState, useEffect } from "react";
import { Card } from "./OrderCard.css";

function OrderCard(props) {
  return (
    <>
      <Card>
        <div>jakiś napis!{props.name}</div>
      </Card>
    </>
  );
}

export default OrderCard;
