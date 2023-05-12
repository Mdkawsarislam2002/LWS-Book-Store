import { Outlet } from "react-router-dom";

// layout components
import GlobalNav from "../layout/GlobalNav";

const Root = () => {
  return (
    <>
      <GlobalNav />
      <Outlet />
    </>
  );
};

export default Root;
