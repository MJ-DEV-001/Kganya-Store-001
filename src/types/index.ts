export interface User {
  id: string;
  email: string;
  full_name?: string;
  phone?: string;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image_url: string;
  images?: string[];
  sizes: string[];
  colors?: string[];
  stock: number;
  featured: boolean;
  created_at: string;
}

export interface CartItem {
  id: string;
  user_id: string;
  product_id: string;
  product?: Product;
  quantity: number;
  size: string;
  color?: string;
  created_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shipping_address: ShippingAddress;
  created_at: string;
  items: OrderItem[];
}

export interface OrderItem {
  id: string;
  order_id: string;
  product_id: string;
  product?: Product;
  quantity: number;
  size: string;
  color?: string;
  price: number;
}

export interface ShippingAddress {
  full_name: string;
  phone: string;
  address_line1: string;
  address_line2?: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

export interface Profile {
  id: string;
  user_id: string;
  full_name?: string;
  phone?: string;
  avatar_url?: string;
  shipping_addresses: ShippingAddress[];
  created_at: string;
  updated_at: string;
}
