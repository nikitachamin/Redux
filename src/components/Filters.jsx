import { useDispatch, useSelector } from "react-redux";
import { selectActiveFilter } from "../store/filters/filter-selector";
import { setFilter } from "../store/filters/filter-actions";
import { Link, useParams } from "react-router-dom";

function Filters() {
  const {filter: activeFilter = 'all'} = useParams();
  

  return (
    <div style={{display: 'flex', justifyContent: 'center', gap: '0.75rem'}}>
      <Link
        to="/all"
        style={{
          color: activeFilter === "all" ? "red" : "black",
        }}
      >
        all
      </Link>
      <Link
       to="/active"
        style={{
          color: activeFilter === "active" ? "red" : "black",
        }}
      >
        active
      </Link>
      <Link
        to="/completed"
        style={{
          color: activeFilter === "completed" ? "red" : "black",
        }}
      >
        completed
      </Link>
    </div>
  );
}

export default Filters;
