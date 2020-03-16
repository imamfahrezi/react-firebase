import React, {useState} from "react";
import {Link} from "react-router-dom";
import Button from "../../components/Button";
import {connect} from "react-redux";
import {loginUserAPI} from "../../redux/actions/auth";

function Login({history, isLoading, loginAPI}) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const {email, password} = formData;
  const handleLoginSubmit = async () => {
    console.log("data before send", formData.email, formData.password);
    const res = await loginAPI({email, password}).catch(err => err);
    if (res) {
      console.log("login success");
      setFormData({
        email: "",
        password: "",
      });
      history.push("/dashboard");
    } else {
      console.log("login failed");
    }
  };

  return (
    <div className="container ">
      <div className="flex max-w-sm mx-auto flex-col bg-gray-200 mt-4">
        <div className="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal mb-2"
            type="email"
            placeholder="jane@example.com"
            id="email"
            value={email}
            onChange={handleChange}
          />
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="password"
            placeholder="password"
            id="password"
            value={password}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row text-center mb-2">
          <Button onClick={handleLoginSubmit} title="Login" loading={isLoading} />
          <Link
            to="/register"
            className="bg-white hover:bg-blue-700 text-gray-600 font-bold py-2 px-4 rounded mx-2"
          >
            Go to Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
});

const mapDispatchToProps = dispatch => ({
  loginAPI: data => dispatch(loginUserAPI(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
