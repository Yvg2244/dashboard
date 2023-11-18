import React from "react";
import User from "../assets/User.png";
import online from "../assets/online.png";
import offline from "../assets/offline.png";
import Activeuser from "../assets/Activeuser.png";
import Done from "../assets/Done.png";
import Todo from "../assets/Todo.png";
import NoPriority from "../assets/NoPriority.png";
import LowPriority from "../assets/LowPriority.png";
import MediumPriority from "../assets/MediumPriority.png";
import HighPriority from "../assets/HighPriority.png";
import UrgentPriority from "../assets/UrgentPriority.png";
import Inprogress from "../assets/Inprogress.png";
import { useSelector } from "react-redux";
const ContentCard = ({ uid, status, title, tag, userId, priority }) => {
  const statusObject = {
    Todo: { title: "Todo", imageLink: Todo },
    "In progress": { title: "In Progress", imageLink: offline },
    Backlog: { title: "Backlog", imageLink: Inprogress },
    Done: { title: "Done", imageLink: Done },
  };
  const priorityObject = {
    0: { title: "No Priority", imageLink: NoPriority },
    1: { title: "Low", imageLink: LowPriority },
    2: { title: "Medium", imageLink: MediumPriority },
    3: { title: "High", imageLink: HighPriority },
    4: { title: "Urgent", imageLink: UrgentPriority },
  };
  const groupBy = useSelector((store) => store.cart.groupBy);
  const users=useSelector(state=>state.cart.userData)
  function getUserStatusById(userId) {
    const user = users.find(user => user.id === userId);
    console.log(user)
    return user.available 
  }
  return (
    <div className="content-card shadow border flex-col g-10 bg-primary">
      {/* part 1 uid */}
      <div className="flex just-btw align-center">
        {" "}
        <div className="text-third">{uid}</div>
        {/* hiding user dp */}
        {groupBy == "userId" ? (
          <></>
        ) : (
          <div className="heading-logo content-card-heading">
            <img src={User} alt="" />
            <div className="status">
              <img
                className=""
                src={getUserStatusById(userId)==true?Activeuser:offline}
                alt=""
              />
            </div>
          </div>
        )}
      </div>
      {/* part 2 title */}
      <div className="flex g-10">
        {groupBy == "status" ? (
          <></>
        ) : (
          <div className="content-card-status">
            <img className="" src={statusObject[status].imageLink} alt="" />
          </div>
        )}
        <div className="bold">{title}</div>
      </div>
      {/* part 3 footer */}
      <div className="flex g-10">
        <div className="content-card-footer flex  border shadow">
          <div className="content-card-footer-img ">
            <img src={priorityObject[priority].imageLink} alt="" />
          </div>
        </div>
        <div className="content-card-footer-tag border shadow g-5 flex">
          <div className=" ">
            
            <img src={offline} alt="" />
          </div>
          <div className="text-secoundary">{tag}</div>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
