import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import FilterButton from "./Components/FilterButton";
import { getUniqueValues } from "./helperFunction/uniqueKey";
import KanbanBoard from "./Components/KanbanBoard";
import { useDispatch } from "react-redux";
import { updateTicket, updateUsers } from "./cartSlice";
function App() {
  const [ticket, setTicket] = useState(null);
  const [userData, setUserData] = useState(null);
  const [groupBy, setGroupBy] = useState(
    localStorage.getItem("groupBy") ? localStorage.getItem("groupBy") : "status"
  );
  const dispatch = useDispatch();
  const [orderBy, setOrderBy] = useState(
    localStorage.getItem("orderBy")
      ? localStorage.getItem("orderBy")
      : "priority"
  );
  const [displayData, setDisplayData] = useState(
    ticket ? getUniqueValues("status", ticket) : null
  );

  useEffect(() => {
    // fetching data from api
    axios
      .get("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => {
        // console.log(response);
        setTicket(response.data.tickets);
        dispatch(updateTicket(response.data.tickets));

        dispatch(updateUsers(response.data.users));
        setUserData(response.data.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // updating values via local storage
    const handleStorageChange = (e) => {
      // console.log("fa", e.newValue);
      if (e.key === "groupBy") {
        setGroupBy(e.newValue);
      }
      if (e.key === "orderBy") {
        setOrderBy(e.newValue);
      }
    };
    window.addEventListener("storage", handleStorageChange);

    // cleanup function
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <>
      <div className="navbar font-primary">
        <FilterButton />
      </div>
      {ticket ? <KanbanBoard ticket={ticket} /> : <></>}
    </>
  );
}

export default App;
