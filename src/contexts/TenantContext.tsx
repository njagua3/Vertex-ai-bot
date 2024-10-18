import React, { createContext, useState, useEffect, useContext } from 'react';
import { Tenant } from '../types';
import { mockTenants } from '../mockData';

interface TenantContextType {
  tenants: Tenant[];
  setTenants: React.Dispatch<React.SetStateAction<Tenant[]>>;
  fetchTenants: () => Promise<void>;
}

const TenantContext = createContext<TenantContextType | undefined>(undefined);

export const TenantProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tenants, setTenants] = useState<Tenant[]>([]);

  const fetchTenants = async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    setTenants(mockTenants);
  };

  useEffect(() => {
    fetchTenants();
  }, []);

  return (
    <TenantContext.Provider value={{ tenants, setTenants, fetchTenants }}>
      {children}
    </TenantContext.Provider>
  );
};

export const useTenants = () => {
  const context = useContext(TenantContext);
  if (context === undefined) {
    throw new Error('useTenants must be used within a TenantProvider');
  }
  return context;
};