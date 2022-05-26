import { Button } from "antd";
import { connect } from "react-redux";
import { closeSesion } from "../redux/actions/auth";

const Saludos = ({ userName, closeSesion }: any) => {
  const logOut = () => {
    closeSesion();
  };

  return (
    <div>
      <h2>Saludos {userName}</h2>
      <br />
      <Button type="primary" onClick={logOut}>
        Cerrar Sesión
      </Button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userName: state.user.name,
  };
};
export default connect(mapStateToProps, { closeSesion })(Saludos);
