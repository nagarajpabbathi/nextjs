import '../styles/globals.css'
import { Provider } from "react-redux";
import { wrapper, store } from "../redux/store";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
