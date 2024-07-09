import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/filtersSlice";

const SearchBox: React.FC = () => {
  const dispatch = useDispatch();
  const filterValue: string = useSelector(selectNameFilter);

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
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
};

export default SearchBox;
