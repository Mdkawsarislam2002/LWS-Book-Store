import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";

//  components
import Root from "./layout/Root";
import Home from "./page/Home";
import EditBooks from "./page/EditBooks";
import AddBooks from "./page/AddBooks";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/add",
          element: <EditBooks />,
        },
        {
          path: "/edit/:id",
          element: <AddBooks />,
        },
      ],
    },
  ]);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
};

export default App;
