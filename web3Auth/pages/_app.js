import { MoralisProvider } from "react-moralis";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider serverUrl="https://1cdue0qwddwc.usemoralis.com:2053/server" appId="JKLnMPqLLyFwQNPeN4aKz9CRJoMAsACELVFLSCD9">
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
