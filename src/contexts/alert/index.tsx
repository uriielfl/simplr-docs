import { Alert } from '@material-tailwind/react';
import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { AlertTypeEnum } from '@/utils/enums/alert-type-enum';
import { IAlert } from '@/utils/interfaces/alert.interface';

interface IAlertContext {
  alert: IAlert;
  showAlert: (alert: IAlert) => void;
}
export const AlertContext = createContext({} as IAlertContext);

interface IAlertProvider {
  children: ReactNode;
}

export const AlertProvider = ({ children }: IAlertProvider) => {
  const [alert, setAlert] = useState<IAlert>({
    message: '',
    type: AlertTypeEnum.INFO,
  });
  const showAlert = useCallback((alert: IAlert) => {
    setAlert(alert);
  }, []);

  const hideAlert = useCallback(() => {
    setAlert({ message: '', type: AlertTypeEnum.INFO });
  }, []);

  useEffect(() => {
    if (!alert.message) return;

    const timeout = setTimeout(() => {
      hideAlert();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [alert]);

  const alertColor = useMemo(() => {
    switch (alert.type) {
      case AlertTypeEnum.ERROR:
        return 'red';
      case AlertTypeEnum.WARNING:
        return 'yellow';
      case AlertTypeEnum.SUCCESS:
        return 'green';
      case AlertTypeEnum.INFO:
        return 'blue';
    }
  }, [alert.type]);

  return (
    <AlertContext.Provider value={{ showAlert, alert }}>
      {alert.message && (
        <Alert
          className="absolute w-60 z-[100000] bottom-4 right-4"
          color={alertColor}
          onClose={hideAlert}
        >
          {alert.message}
        </Alert>
      )}
      {children}
    </AlertContext.Provider>
  );
};
