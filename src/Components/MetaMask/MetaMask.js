import React, { useState } from "react";
import { ethers } from "ethers";

const MetaMask = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((result) => {
          accountChangeHandler(result[0]);
        });
    } else {
      setErrorMessage("Install MetaMask");
    }
  };

  const accountChangeHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount.toString());
  };
  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };

  //   const chainChangedHandler = () => {
  //     window.location.reload();
  //   };

  window.ethereum.on("accountsChanged", accountChangeHandler);
  //   window.ethereum.on("chainChanged", chainChangedHandler);
  return (
    <div className="walletCard">
      <h4>Connecting to MetaMask using window.ethereum methods</h4>
      <button
        className="btn primary"
        onClick={connectWalletHandler}
        style={{ color: "white", border: "1px solid #fff" }}
      >
        {connButtonText}
      </button>
      <div className="accountDispplay">
        <h3>Address: {defaultAccount}</h3>
      </div>
      <div className="balanceDispplay">
        <h3>Balance: {userBalance}</h3>
      </div>
      {errorMessage}
    </div>
  );
};

export default MetaMask;
