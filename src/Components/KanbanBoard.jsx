import React, { useEffect, useState } from "react";
import { getUniqueValues } from "../helperFunction/uniqueKey";
import { useSelector } from "react-redux";
import HeadingCard from "./HeadingCard";

const KanbanBoard = ({ ticket }) => {
  const [storageChange, setStorageChange] = useState(0);
  const groupBy = useSelector((store) => store.cart.groupBy);
  const orderBy = useSelector((store) => store.cart.orderBy);
 

  return (
    <div className="bg-third board font-primary">
      <div className="flex just-btw ">
        {getUniqueValues(groupBy, ticket)?.map((items, index) => {
          return (
            <div className="card-container" key={index}>
              <HeadingCard groupingKey={groupBy} orderingKey={orderBy} value={items} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KanbanBoard;
