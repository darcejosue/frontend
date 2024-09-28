'use client'

import React, { useState } from 'react';

interface Insumo {
  nombre: string;
  categoria: string;
  unidadDeMedida: string;
  descripcion: string;
  cantidad: number;
  precio: number;
  proveedor: string;
}

const Table = () => {
  const [insumos, setInsumos] = useState<Insumo[]>([
    {
      nombre: 'Insumo 1',
      categoria: 'Categoria 1',
      unidadDeMedida: 'Unidad 1',
      descripcion: 'Descripcion 1',
      cantidad: 10,
      precio: 100,
      proveedor: 'Proveedor 1',
    },
    {
      nombre: 'Insumo 2',
      categoria: 'Categoria 2',
      unidadDeMedida: 'Unidad 2',
      descripcion: 'Descripcion 2',
      cantidad: 20,
      precio: 200,
      proveedor: 'Proveedor 2',
    },
  ]);



  return (
    <div className="flex h-screen">
     
      <main className="flex-1 p-4">
          <table className="table-auto w-full">
            <thead className='bg-slate-600 '>
              <tr >
                <th className="px-4 py-2 text-black">Nombre Insumo</th>
                <th className="px-4 py-2  text-black">Categoria</th>
                <th className="px-4 py-2  text-black">Unidad de Medida</th>
                <th className="px-4 py-2  text-black">Descripcion</th>
                <th className="px-4 py-2  text-black">Cantidad</th>
                <th className="px-4 py-2  text-black">Precio</th>
                <th className="px-4 py-2  text-black">Proveedor</th>
                <th className="px-4 py-2  text-black">Editar</th>
                <th className="px-4 py-2  text-black">Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {insumos.map((insumo) => (
                <tr key={insumo.nombre}>
                  <td className="border px-4 py-2">{insumo.nombre}</td>
                  <td className="border px-4 py-2">{insumo.categoria}</td>
                  <td className="border px-4 py-2">{insumo.unidadDeMedida}</td>
                  <td className="border px-4 py-2">{insumo.descripcion}</td>
                  <td className="border px-4 py-2">{insumo.cantidad}</td>
                  <td className="border px-4 py-2">{insumo.precio}</td>
                  <td className="border px-4 py-2">{insumo.proveedor}</td>
                  <td className="border px-4 py-2">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Editar
                    </button>
                  </td>
                  <td className="border px-4 py-2">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </main>
    </div>
  );
};

export default Table;