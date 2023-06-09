import { useDispatch, useSelector } from "react-redux";
import { useGetBooksQuery } from "../Redux/feature/apiSlice/apiSlice";
import HomeSingleBooks from "../components/HomeSingleBooks";
import { setSortBy } from "../Redux/filterSlice/filterSlice";

const Home = () => {
  const { searchValue, sortBy } = useSelector((state) => state?.filter);
  const { data: books, isSuccess } = useGetBooksQuery({
    filter: sortBy,
    searchQuery: searchValue,
  });
  const dispatch = useDispatch();

  return (
    <div>
      <main className="py-12 px-6 2xl:px-6 container">
        <div className="order-2 xl:-order-1">
          <div className="flex items-center justify-between mb-12">
            <h4 className="mt-2 text-xl font-bold">Book List</h4>

            <div className="flex items-center space-x-4">
              <button
                className={`lws-filter-btn  transition-all   ${
                  sortBy === "all" && `active-filter`
                } `}
                onClick={() => {
                  dispatch(setSortBy("all"));
                }}
              >
                All
              </button>
              <button
                className={`lws-filter-btn  transition-all   ${
                  sortBy === "featured" && `active-filter`
                } `}
                onClick={() => {
                  dispatch(setSortBy("featured"));
                }}
              >
                Featured
              </button>
            </div>
          </div>
          <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
            {isSuccess &&
              books.map((book) => (
                <HomeSingleBooks key={book.id} data={book} />
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
