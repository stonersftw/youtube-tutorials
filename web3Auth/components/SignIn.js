import Image from "next/image";
import { useMoralis } from "react-moralis";
import styles from "../styles/Home.module.css";
import Logo from "./images/Web3Auth.svg";
import { useState } from "react";

export default function SignIn() {
  const { authenticate, authError, isAuthenticating, Moralis } = useMoralis();

  const handleCustomLogin = async () => {
    await authenticate({
      provider: "web3Auth",
      clientId: "BK-eqYFyZrRWo7oWRKSw0dHF9WK2ywA2g1duDY7W38iTJlv7jQjGiUVWXmSe9X710wjbv9CUVoSq2dOTzJiiY5A",
      chainId: Moralis.Chains.ETH_ROPSTEN,
    });
  };

  return (
    <div className={styles.card}>
      <Image className={styles.img} src={Logo} width={80} height={80} />
      {isAuthenticating && <p className={styles.green}>Authenticating</p>}
      {authError && (
        <p className={styles.error}>{JSON.stringify(authError.message)}</p>
      )}
      <div className={styles.buttonCard}>
        <button className={styles.loginButton} onClick={handleCustomLogin}>
          Login
        </button>
      </div>
    </div>
  );
}
