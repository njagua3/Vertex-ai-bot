import React from 'react';
import { useProperties } from '../contexts/PropertyContext';

const Properties: React.FC = () => {
  const { properties } = useProperties();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Properties</h2>
      {properties.length === 0 ? (
        <p>No properties found.</p>
      ) : (
        <ul className="space-y-2">
          {properties.map(property => (
            <li key={property.id} className="bg-white shadow rounded-lg p-4">
              <p className="font-semibold">{property.name}</p>
              <p>Landlord ID: {property.landlord_id}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Properties;