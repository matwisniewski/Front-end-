import React, { useContext, useState, useEffect } from "react";
import {
  Card,
  InfoCardTitle,
  InfoCardBottom,
  InfoCardContent,
  InfoCardDetails,
  InfoCardDescription,
  InfoCardStatusInfo,
  InfoCardButton,
} from "./OrderCard.css";

function OrderCard(props) {
  return (
    <Card>
      <InfoCardTitle>
        <div>
          Biała czekolada z maliną z konfiturą malinową {props.name} Biała
          czekolada z maliną z konfiturą malinową
        </div>
      </InfoCardTitle>
      <InfoCardContent>
        <InfoCardDetails />
        <InfoCardDetails />
      </InfoCardContent>
      <InfoCardBottom>
        <InfoCardButton>Więcej</InfoCardButton>
      </InfoCardBottom>
    </Card>
  );
}

export default OrderCard;
