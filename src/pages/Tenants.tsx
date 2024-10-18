import React from 'react';
import { useTenants } from '../contexts/TenantContext';

const Tenants: React.FC = () => {
  const { tenants } = useTenants();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Tenants</h2>
      {tenants.length === 0 ? (
        <p>No tenants found.</p>
      ) : (
        <ul className="space-y-2">
          {tenants.map(tenant => (
            <li key={tenant.id} className="bg-white shadow rounded-lg p-4">
              <p className="font-semibold">{tenant.name}</p>
              <p>Rent: ${tenant.rent_amount}</p>
              <p>Room: {tenant.room_number}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tenants;