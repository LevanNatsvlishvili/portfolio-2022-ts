import React, { createContext, useState, useContext, ReactNode, useMemo, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Url } from 'next/dist/shared/lib/router/router';

interface StoreContextProvider {
  children: ReactNode;
}

interface StoreContextValue {
  currView: number;
  setCurrView: (view: number) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  handleNavigationLoading: (path: Url) => void;
}

function createInitialValue(): StoreContextValue {
  return {
    currView: 0,
    setCurrView: () => {},
    loading: false,
    setLoading: () => {},
    handleNavigationLoading: () => {},
  };
}

export const StoreContext = createContext<StoreContextValue>(createInitialValue());

export const StoreContextProvider = ({ children }: StoreContextProvider) => {
  const router = useRouter();

  const [currView, setCurrView] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const handleNavigationLoading = (path: Url): void => {
    setLoading(true);
    setTimeout(() => {
      router.push(path);
    }, 400);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const viewValues = useMemo(() => {
    return {
      currView,
      setCurrView,
    };
  }, [currView]);

  return (
    <StoreContext.Provider
      value={{
        ...viewValues,
        loading,
        setLoading,
        handleNavigationLoading,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => useContext(StoreContext);

export default useStore;
