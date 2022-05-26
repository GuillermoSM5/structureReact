import "./App.css";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import LogIn from "./Pages/LogIn";
import Saludos from "./components/Saludos";
import Books from "./Pages/Books";
import HandleRoutes from "./routes/HandleRoutes";

function App({ isAuthenticated }: any) {
  return (
    <div className="App">
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={
            <HandleRoutes
              element={<LogIn />}
              isAutenticated={isAuthenticated}
            />
          }
        />
        {/* Private Route */}
        <Route
          path="/grettings"
          element={
            <HandleRoutes
              element={<Saludos />}
              isPrivate={true}
              isAutenticated={isAuthenticated}
            />
          }
        />
        <Route
          path="/books"
          element={
            <HandleRoutes
              element={<Books />}
              isPrivate={true}
              isAutenticated={isAuthenticated}
            />
          }
        />
      </Routes>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: state.auth.isAutenticated,
  };
};

export default connect(mapStateToProps)(App);
