import {Provider} from 'react-redux';
import RootComponent from '.';
import {FC} from 'react';
import {persistor, store} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const App: FC = () => {
  // useEffect(() => {
  //   i18n.changeLanguage('vi');
  //   // dispatch(launchAppAction());
  // }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
};

export default App;
