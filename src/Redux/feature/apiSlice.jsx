import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/",
  }),

  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "books",
      keepUnusedDataFor: 600,
    }),
    getSingleBooks: builder.query({
      query: (id) => `books/${id}`,
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `books/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),

    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: "DELETE",
      }),
    }),

    addBook: builder.mutation({
      query: (data) => ({
        url: `books`,
        method: "POST",
        body: data,
      }),
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
