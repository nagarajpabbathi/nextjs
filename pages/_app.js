import '../styles/globals.css'
import { Provider } from "react-redux";
import { wrapper, store } from "../redux/store";
import BasicLoader from '../components/BasicLoader/BasicLoader';
import ToastNotification from '../components/ToastNotification/ToastNotification';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <BasicLoader />
        <ToastNotification />
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
