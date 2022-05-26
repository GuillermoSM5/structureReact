import { FunctionComponent } from "react";
import { Navigate } from "react-router-dom";
import PrivateLayout from "../components/Layout/privateLayout";
import PublicLayout from "../components/Layout/PublicLayout";

interface HandleRoutesProps {
  element: JSX.Element;
  isPrivate?: boolean;
  isAutenticated?: boolean;
}

const HandleRoutes: FunctionComponent<HandleRoutesProps> = ({
  element,
  isPrivate = false,
  isAutenticated = false,
  ...rest
}) => {
  let Layout = isAutenticated ? PrivateLayout : PublicLayout;

  if (isPrivate && !isAutenticated) {
    return <Navigate to={"/"} />;
  }

  if (!isPrivate && isAutenticated) {
    return <Navigate to={"/grettings"} />;
  }

  return <Layout>{element}</Layout>;
};

export default HandleRoutes;
