import { useDispatch, useSelector } from "react-redux";
import {
  selectNameFilter,
  changeFilter,
} from "../../redux/filters/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectNameFilter);

  const onSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <div>
      <label htmlFor="search">Find Contacts by name</label>
      <input
        onChange={onSearch}
        value={filterValue}
        type="text"
        name="search"
      />
    </div>
  );
}
