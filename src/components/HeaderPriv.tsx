import { FunctionComponent } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

interface HeaderPrivProps {}

const HeaderPriv: FunctionComponent<HeaderPrivProps> = () => {
  const items = [
    { label: <Link to={"/grettings"}>Inicio</Link>, key: "home" },
    { label: <Link to={"/books"}>Libros</Link>, key: "books" },
  ];

  return (
    <>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" items={items} />
    </>
  );
};

export default HeaderPriv;
