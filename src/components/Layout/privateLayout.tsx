import { Layout } from "antd";
import { FunctionComponent } from "react";
import HeaderPriv from "../HeaderPriv";
const { Header, Footer, Content } = Layout;
interface PrivateLayoutProps {
  children: any;
}

const PrivateLayout: FunctionComponent<PrivateLayoutProps> = ({ children }) => {
  return (
    <Layout className="max-height">
      <Header>
        <HeaderPriv />
      </Header>
      <Content>{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default PrivateLayout;
