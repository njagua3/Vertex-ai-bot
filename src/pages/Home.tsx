import React from 'react';
import { useProperties } from '../contexts/PropertyContext';
import { useTenants } from '../contexts/TenantContext';
import PropertyCard from '../components/PropertyCard';

const Home: React.FC = () => {
  const { properties } = useProperties();
  const { tenants } = useTenants();

  const isLoading = properties.length === 0 || tenants.length === 0;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">RINGBELT REAL ESTATE AGENTS</h1>
      <h2 className="text-xl mb-6">Welcome to the Tenant Management System</h2>

      <div className="properties-section">
        <h3 className="text-2xl font-semibold mb-4">Available Properties</h3>
        {isLoading ? (
          <p>Loading properties...</p>
        ) : properties.length === 0 ? (
          <p>No properties found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard 
                key={property.id} 
                property={property} 
                tenants={tenants.filter(tenant => tenant.property_id === property.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;