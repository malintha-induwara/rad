import  Navigation  from "./Navigation";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <>
      <Navigation></Navigation>
      <Outlet></Outlet>
    </>
  );
}

export default RootLayout
