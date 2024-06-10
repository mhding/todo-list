// app/providers.tsx
"use client";

import { ReactNode } from 'react';
import { QueryClientProvider } from 'react-query';
import queryClient from '../lib/queryClient';

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default Providers;
