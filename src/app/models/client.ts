export interface Client {
  id: number;
  address: string;
  address_b: string;
  address_c: string;
  address_d: string;
  age: number;
  age2: number;
  city: string;
  last_name: string;
  name: string;
  state: string;
  telephone: string;
  zip: number;
  messages?: Array<Message>;
}

export interface Message {
  title: string;
  content: string;
}
