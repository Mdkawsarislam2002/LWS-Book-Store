import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/",
  }),
  tagTypes: ["Books", "singleBook"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ filter, searchQuery }) => {
        let checkFeature = filter === "featured";
        if (checkFeature) {
          return `books?featured=${checkFeature}&name_like=${searchQuery}`;
        } else {
          return `books?name_like=${searchQuery}`;
        }
      },
      keepUnusedDataFor: 500,
      providesTags: ["Books"],
    }),
    getSingleBooks: builder.query({
      query: (id) => `books/${id}`,
      providesTags: (result, error, id) => [{ type: "singleBook", id }],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, { id }) => [
        ["Books"],
        { type: "singleBook", id },
      ],
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, { id }) => [
        ["Books"],
        { type: "singleBook", id },
      ],
    }),

    addBook: builder.mutation({
      query: (data) => ({
        url: `books`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});
export default apiSlice;
export const {
  useGetBooksQuery,
  useGetSingleBooksQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useAddBookMutation,
} = apiSlice;
