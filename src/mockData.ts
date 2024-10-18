import { Property, Tenant, Landlord } from './types';

export const mockProperties: Property[] = [
  { id: 1, name: "Sunset Apartments", landlord_id: 1 },
  { id: 2, name: "Ocean View Condos", landlord_id: 2 },
  { id: 3, name: "Mountain Lodge", landlord_id: 1 },
];

export const mockTenants: Tenant[] = [
  { id: 1, name: "John Doe", property_id: 1, rent_amount: 1000, room_number: "101" },
  { id: 2, name: "Jane Smith", property_id: 1, rent_amount: 1200, room_number: "102" },
  { id: 3, name: "Bob Johnson", property_id: 2, rent_amount: 1500, room_number: "201" },
];

export const mockLandlords: Landlord[] = [
  { id: 1, name: "Alice Brown" },
  { id: 2, name: "Charlie Davis" },
];