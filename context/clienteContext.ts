import { createContext } from "react";

export interface Cliente {
  id: number,
  nombre: string,
  telefono: string,
  fechaDeIngreso: string,
  fechaDeExpiracion: string,
  foto: string,
  puesto: string,
  empresa: string,
  email: string
}

export const ClienteContext = createContext<Cliente>({
  id: 0,
  nombre: '',
  telefono: '',
  fechaDeIngreso: '',
  fechaDeExpiracion: '',
  foto: '',
  puesto: '',
  empresa: '',
  email: ''
});
