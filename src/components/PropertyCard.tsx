import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Property, Tenant } from '../types';

interface PropertyCardProps {
  property: Property;
  tenants: Tenant[];
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, tenants }) => {
  const navigate = useNavigate();

  const handleEditTenant = (tenantId: number) => {
    navigate(`/edit-tenant/${tenantId}`);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h4 className="text-xl font-semibold mb-2">{property.name}</h4>
      <p className="text-gray-600 mb-4">Landlord ID: {property.landlord_id}</p>
      <div>
        <p className="font-medium mb-2">Tenants:</p>
        {tenants.length === 0 ? (
          <p className="text-gray-500">No tenants found.</p>
        ) : (
          <ul className="space-y-2">
            {tenants.map(tenant => (
              <li key={tenant.id} className="flex items-center justify-between">
                <span>{tenant.name} - Rent: ${tenant.rent_amount} - Room: {tenant.room_number}</span>
                <button 
                  onClick={() => handleEditTenant(tenant.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition-colors"
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;