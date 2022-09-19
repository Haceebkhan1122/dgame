import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import { ethers } from "ethers";
import {
  useTranslation,
  withTranslation,
  Trans,
  TFunction,
} from "react-i18next";

import i18next from "i18next";

import { metaMaskBalanceSelector } from "../../../store/metamask/selectors/metaMaskSelectors";
import { userSelector } from "../../../store/auth/selectors/authSelectors";
import { Signin } from "../../../store/auth/actions/AuthAction";
import { toggleSignInModal } from "../../../store/ui/actions/uiAction";
import { metMaskWallet } from "../../../store/metamask/actions/metaMaskAction";
import DominoBig from "../../../assets/img/dominobig.png";
import Metamask from "../../../assets/img/metamask.png";
import Binance from "../../../assets/img/binance.png";

function LoginModal(props) {
  const { t } = useTranslation();

  const [loginData, setLoginData] = useState(
    localStorage.getItem("loginData")
      ? JSON.parse(localStorage.getItem("loginData"))
      : null
  );

  const dispatch = useDispatch();

  // const wallet = useSelector((state) => state.metaMask.balance);
  // console.log(wallet);

  // const [address, setAddress] = useState(null);
  // const [balance, setBalance] = useState(0);
  // const [errorMessage, setErrorMessage] = useState(null);

  const user = useSelector(userSelector);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [class1, setIsClass1] = useState(true);
  const [validated, setValidated] = useState(false);
  const handleChange = () => {
    setIsClass1((current) => !current);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);

    // const payload = { email, password };

    const payload = user.find(
      (user) => user.email === email && user.password === password
    );

    if (payload) {
      dispatch(Signin(payload));
      alert("Successfully Login !!");
    } else {
      alert("Wrong Credentials");
    }

    dispatch(toggleSignInModal(false, props.setLoginModalShow(false)));

    localStorage.setItem("user");
  };

  const handleClick = () => {
    props.setLoginModalShow(false);
    props.setModalShowForgetPassword(true);
  };
  const handleSignup = () => {
    props.setLoginModalShow(false);
    props.setModalShowSignup(true);
  };

  // window.gapi.load("client:auth2", () => {
  //   window.gapi.client.init({
  //     clientId:
  //       "260487644515-thtgfv3fmanboc1h5jvmbodf8vcu242m.apps.googleusercontent.com",
  //     plugin_name: "chat",
  //   });
  // });

  // const handleLogin = async (googleData) => {
  //   const res = await fetch("/api/google-login", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       token: googleData.tokenId,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   const data = await res.json();
  //   setLoginData(data);
  //   localStorage.setItem("loginData", JSON.stringify(data));
  // };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("loginData");
    setLoginData(null);
  };

  // const accountChangeHandler = async (newAccount) => {
  //   console.log("new Account :", newAccount);
  //   setAddress(newAccount);
  //   let balance = await getUserBalance(newAccount.toString());
  //   return {
  //     address: newAccount,
  //     balance: balance,
  //   };
  // };

  // const getUserBalance = async (address) => {
  //   let balance = await window.ethereum.request({
  //     method: "eth_getBalance",
  //     params: [address, "latest"],
  //   });
  //   setBalance(ethers.utils.formatEther(balance));
  //   return ethers.utils.formatEther(balance);
  // };

  // const connectWalletHandler = async () => {
  //   if (window.ethereum) {
  //     let result = await window.ethereum.request({
  //       method: "eth_requestAccounts",
  //     });
  //     let newAccountValue = await accountChangeHandler(result[0]);
  //     console.log("address Value", newAccountValue.address);
  //     console.log("balance Value", newAccountValue.balance);
  //     dispatch(metMaskWallet(newAccountValue.address, newAccountValue.balance));
  //     // debugger;

  //     localStorage.setItem("address", address);
  //     if (address) {
  //       props.setLoginModalShow(false);
  //       window.location.href = "/";
  //     }
  //   } else {
  //     setErrorMessage(alert("Install MetaMask"));
  //   }
  // };
  // const handleFailure = (result) => {
  //   console.log(result);
  // };

  // window.ethereum.on("accountsChanged", accountChangeHandler);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="hk_assets_modal modal_light_bg"
    >
      <Modal.Header closeButton></Modal.Header>

      <Modal.Body>
        <Row>
          <Col md={5}>
            <div className="login_left">
              <div className="login_left_content">
                <img src={DominoBig} alt="Big-Logo" />
                <Button
                  className="primary hk_btn_with_bg_theme cheap_yellow text-uppercase"
                  onClick={handleSignup}
                >
                  {i18next.t("login_modal_signup_button")}
                </Button>
              </div>
            </div>
          </Col>
          <Col md={7}>
            <div className="login_right">
              <div className="login_right_content">
                <h1 className="primary_heading">
                  {i18next.t("login_modal_head")}
                </h1>
                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit}
                  className="hk_custom_style"
                >
                  <Form.Group className="mb-3" controlId="validationCustom01">
                    <Form.Control
                      type="text"
                      placeholder={t("login_modal_username")}
                      required
                      defaultValue=""
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a Valid Username
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3 position-relative">
                    <Form.Control
                      type="password"
                      placeholder={t("login_modal_password")}
                      className="pass_hk_padding_right"
                      required
                      defaultValue=""
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <span className="forget_pass" onClick={handleClick}>
                      {i18next.t("login_modal_forgot")}
                    </span>
                    {/* <ForgetPasswordModal
                      show={modalShowForgetPassword}
                      onHide={() => setModalShowForgetPassword(false)}
                    /> */}
                    <Form.Control.Feedback type="invalid">
                      Please provide a Correct Password
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <label htmlFor="class1" className="targeting">
                      <input
                        type="checkbox"
                        defaultChecked={false}
                        value={class1}
                        onChange={handleChange}
                        id="class1"
                        name="class1"
                      />
                      <span class="checkmark"></span>
                      <span className="position-relative">
                        <h5>
                          I accept Dominos terms of service and Privacy Policy
                        </h5>
                      </span>
                    </label>
                  </Form.Group>
                  <Button
                    className="primary hk_btn_with_bg_theme w-100"
                    type="submit"
                  >
                    {i18next.t("login_modal_login_button")}
                  </Button>
                </Form>
                <div className="divider_text">
                  <hr />
                  <label> {i18next.t("login_modal_connect_with")}</label>
                  <hr />
                </div>
                <Button className="primary hk_btn_with_bg_theme with_gmail w-100 mb-3">
                  <label> {i18next.t("login_modal_withgmail")}</label>
                </Button>
                <Button className="primary hk_btn_with_bg_theme with_white_theme_bg w-100 mb-3">
                  <img src={Metamask} alt="Metamask" />
                  {i18next.t("login_modal_metamask")}
                </Button>
                {/* {loginData ? (
                  <div>
                    <h3>You Logged in as {loginData.email}</h3>
                    <button onClick={handleLogout}>Logout</button>
                  </div>
                ) : (
                  <GoogleLogin
                    // clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="SIGN UP WITH GMAIL"
                    // onSuccess={handleLogin}
                    // onFailure={handleFailure}
                    // cookiePolicy={"single_host_origin"}
                    className="with_gmail mb-3"
                  ></GoogleLogin>
                )} */}
                {/* <Button
                  className="primary hk_btn_with_bg_theme with_white_theme_bg w-100 mb-3"
                  onClick={connectWalletHandler}
                > */}
                <Button className="primary hk_btn_with_bg_theme with_white_theme_bg w-100 mb-3">
                  <img src={Binance} alt="Binance" />
                  {i18next.t("login_modal_binance")}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;
