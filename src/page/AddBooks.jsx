import { useState } from "react";
import { useAddBookMutation } from "../Redux/feature/apiSlice/apiSlice";

const AddBooks = () => {
  const [addBook, { isSuccess }] = useAddBookMutation();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    addBook({ name, author, thumbnail, price, rating, featured });
  };

  const FormDataHandler = (value, type) => {
    switch (type) {
      case "name":
        setName(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "thumbnail":
        setThumbnail(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "rating":
        setRating(value);
        break;
      case "featured":
        setFeatured((pre) => !pre);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <main className="py-6 2xl:px-6">
        <div className="container">
          <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
            <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
            <form className="book-form" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label htmlFor="lws-bookName">Book Name</label>
                <input
                  required
                  className="text-input"
                  type="text"
                  id="lws-bookName"
                  name="name"
                  value={name}
                  onChange={(e) => FormDataHandler(e.target.value, "name")}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lws-author">Author</label>
                <input
                  required
                  className="text-input"
                  type="text"
                  id="lws-author"
                  name="author"
                  value={author}
                  onChange={(e) => FormDataHandler(e.target.value, "author")}
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lws-thumbnail">Image Url</label>
                <input
                  required
                  className="text-input"
                  type="text"
                  id="lws-thumbnail"
                  name="thumbnail"
                  value={thumbnail}
                  onChange={(e) => FormDataHandler(e.target.value, "thumbnail")}
                />
              </div>

              <div className="grid grid-cols-2 gap-8 pb-4">
                <div className="space-y-2">
                  <label htmlFor="lws-price">Price</label>
                  <input
                    required
                    className="text-input"
                    type="number"
                    id="lws-price"
                    name="price"
                    min="1"
                    value={price}
                    onChange={(e) => FormDataHandler(e.target.value, "price")}
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="lws-rating">Rating</label>
                  <input
                    required
                    className="text-input"
                    type="number"
                    id="lws-rating"
                    name="rating"
                    min="1"
                    max="5"
                    value={rating}
                    onChange={(e) => FormDataHandler(e.target.value, "rating")}
                  />
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="lws-featured"
                  type="checkbox"
                  name="featured"
                  className="w-4 h-4"
                  checked={featured}
                  onChange={(e) => FormDataHandler(e.target.value, "featured")}
                />
                <label htmlFor="lws-featured" className="ml-2 text-sm">
                  {" "}
                  This is a featured book{" "}
                </label>
              </div>

              <button type="submit" className="submit" id="lws-submit">
                Add Book
              </button>
            </form>
          </div>
        </div>
      </main>
      {isSuccess && (
        <div
          className="flex p-4 mx-6 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <p className="font-medium">Book Added Successfully</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddBooks;
