import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTenants } from '../contexts/TenantContext';
import { Tenant } from '../types';

const EditTenant: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { tenants, setTenants } = useTenants();
  const [tenant, setTenant] = useState<Tenant | null>(null);

  useEffect(() => {
    const foundTenant = tenants.find(t => t.id === Number(id));
    if (foundTenant) {
      setTenant(foundTenant);
    } else {
      console.error('Tenant not found');
      navigate('/tenants');
    }
  }, [id, tenants, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!tenant) return;

    try {
      const response = await fetch(`/api/tenants/${tenant.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tenant),
      });

      if (!response.ok) throw new Error('Failed to update tenant');

      setTenants(prevTenants =>
        prevTenants.map(t => (t.id === tenant.id ? tenant : t))
      );

      navigate('/tenants');
    } catch (error) {
      console.error('Error updating tenant:', error);
    }
  };

  if (!tenant) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Edit Tenant</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1">Name:</label>
          <input
            type="text"
            id="name"
            value={tenant.name}
            onChange={e => setTenant({ ...tenant, name: e.target.value })}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="rent" className="block mb-1">Rent Amount:</label>
          <input
            type="number"
            id="rent"
            value={tenant.rent_amount}
            onChange={e => setTenant({ ...tenant, rent_amount: Number(e.target.value) })}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="room" className="block mb-1">Room Number:</label>
          <input
            type="text"
            id="room"
            value={tenant.room_number}
            onChange={e => setTenant({ ...tenant, room_number: e.target.value })}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
          Update Tenant
        </button>
      </form>
    </div>
  );
};

export default EditTenant;