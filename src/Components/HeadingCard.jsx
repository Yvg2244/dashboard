import React from "react";
import { useSelector } from "react-redux";
import NoPriority from "../assets/NoPriority.png";
import LowPriority from "../assets/LowPriority.png";
import HighPriority from "../assets/HighPriority.png";
import MediumPriority from "../assets/MediumPriority.png";
import UrgentPriority from "../assets/UrgentPriority.png";
import Done from "../assets/Done.png";
import Todo from "../assets/Todo.png";
import Inprogress from "../assets/Inprogress.png";
import Plus from "../assets/Plus.png";
import Ellipsis from "../assets/Ellipsis.png";
import User from "../assets/User.png";
import offline from "../assets/offline.png";

import ContentCard from "./ContentCard";
const HeadingCard = ({ groupingKey, orderingKey, value }) => {
  const priorityObject = {
    0: { title: "No Priority", imageLink: NoPriority },
    1: { title: "Low", imageLink: LowPriority },
    2: { title: "Medium", imageLink: MediumPriority },
    3: { title: "High", imageLink: HighPriority },
    4: { title: "Urgent", imageLink: UrgentPriority },
  };
  const statusObject = {
    Todo: { title: "Todo", imageLink: Todo },
    "In progress": { title: "In Progress", imageLink: offline },
    Backlog: { title: "Backlog", imageLink: Inprogress },
    Done: { title: "Done", imageLink: Done },
  };
  const users = useSelector((state) => state.cart.userData);
  const tickets = useSelector((state) => state.cart.ticketData);
  const findUserNameById = (val) => {
    const user = users.find((user) => user.id === val);
    return user ? user.name : null;
  };

  const findTicketByCriteria = (key, orderingKey, value) => {
    const tempData = tickets.filter((ticket) => ticket[key] === value);

    if (orderingKey == "priority") {
      return [...tempData].sort((a, b) => b.priority - a.priority);
    }
    if (orderingKey == "title") {
      return [...tempData].sort((a, b) =>
        a.title.localeCompare(b.title, undefined, { numeric: true })
      );
    }
  };
  // console.log(findTicketByCriteria(groupingKey, value));
  return (
    <>
      <div className="heading-card border flex ">
        <div className="heading-title flex">
          {" "}
          {groupingKey == "priority" ? (
            <div className="flex align-center g-10">
              <div className="heading-logo">
                <img src={priorityObject[value].imageLink} alt="" />
              </div>
              <div className="bold s-12">{priorityObject[value].title}</div>
            </div>
          ) : groupingKey == "status" ? (
            <div className="flex align-center g-10">
              <div className="heading-logo">
                <img src={statusObject[value].imageLink} alt="" />
              </div>
              <div className="bold s-12">{statusObject[value].title}</div>
            </div>
          ) : (
            <div className="flex align-center g-10">
              <div className="heading-logo">
                <img src={User} alt="" />
              </div>
              <div className="bold s-12">{findUserNameById(value)}</div>
            </div>
          )}
          <div className="flex align-center g-10">
            <div className="heading-logo">
              <img src={Plus} alt="" />
            </div>
            <div className="heading-logo">
              <img src={Ellipsis} alt="" />
            </div>
          </div>
        </div>
        {/* <div className="heading-count"></div>
        <div className="heading-buttons"></div> */}
      </div>
      <div className="content-card-holder flex-col">
        {findTicketByCriteria(groupingKey, orderingKey, value).map((item) => {
          return (
            <span key={item.id}>
              <ContentCard
                uid={item.id}
                status={item.status}
                title={item.title}
                tag={item.tag}
                userId={item.userId}
                priority={item.priority}
              />{" "}
            </span>
          );
        })}
      </div>
    </>
  );
};

export default HeadingCard;
