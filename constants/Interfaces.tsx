export interface User {
  id: number;
  name?: string;
  email?: string;
  phone?: string;
  finca?: [id: number, name: string];
}
