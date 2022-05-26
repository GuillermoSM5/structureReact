import { FunctionComponent } from "react";
import { Layout, Row } from "antd";
const { Content } = Layout;
interface PublicLayoutProps {
  children: any;
}

const PublicLayout: FunctionComponent<PublicLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Row className="max-height" justify="center" align="middle">
        <Content>{children}</Content>
      </Row>
    </Layout>
  );
};

export default PublicLayout;
