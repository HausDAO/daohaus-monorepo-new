import { DHConnectProvider } from '@daohaus/connect';
import { useState } from 'react';
import { Routes } from './Routes';

export const App = () => {
  const [daoChainId, setDaoChainId] = useState<string | undefined>();

  return (
    <DHConnectProvider>
      <Routes setDaoChainId={setDaoChainId} />
    </DHConnectProvider>
  );
};