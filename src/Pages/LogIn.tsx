import { Input, Row, Col, Button } from "antd";
import { useState } from "react";
import { useDispatch, connect } from "react-redux";

import { loginA } from "../redux/actions/auth";

const LogIn = ({ isLoading }: any) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "libreria@yopmail.com",
    password: "string",
  });
  const { email, password } = form;

  const changeValue = ({ target }: any) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const login = () => {
    dispatch(loginA({ ...form }));
  };

  return (
    <>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <h2>Log in</h2>
          <Input
            size="large"
            placeholder="Usuario"
            name="email"
            value={email}
            onChange={changeValue}
          />
          <br />
          <br />
          <Input
            size="large"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={changeValue}
            type={"password"}
            autoComplete="off"
          />
          <br />
          <br />
          <Button type="primary" onClick={login} loading={isLoading}>
            Iniciar Sesión
          </Button>
        </Col>
        <Col span={8}></Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.auth.isLoading,
  };
};

export default connect(mapStateToProps)(LogIn);
