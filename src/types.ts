export interface Property {
  id: number;
  name: string;
  landlord_id: number;
}

export interface Tenant {
  id: number;
  name: string;
  property_id: number;
  rent_amount: number;
  room_number: string;
}

export interface Landlord {
  id: number;
  name: string;
}