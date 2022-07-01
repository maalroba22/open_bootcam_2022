import React, { useState } from 'react';
import Contactenos from './Contactenos';
import FormContact from './FormContact';

export default function ContactosDetalles() {
  const defaultContact = [
    { Nombre: 'Manuel', Email: 'maalroba22@gmail.com', estado: true },
    { Nombre: 'Inelsa', Email: 'inelsa@gmail.com', estado: false },
    { Nombre: 'Ximena', Email: 'ximena22@gmail.com', estado: true },
    { Nombre: 'Emanuel', Email: 'Emanuel22@gmail.com', estado: true },
  ];

  const [contactos, setcontacto] = useState(defaultContact);

  function changuestatecontacto(contaacto) {
    const index = contactos.indexOf(contaacto);
    const tempralcontactos = [...contactos];
    tempralcontactos[index].estado = !tempralcontactos[index].estado;
    setcontacto(tempralcontactos);
  }

  function eliminarContacto(contacto) {
    const index = contactos.indexOf(contacto);
    const tempralcontactos = [...contactos];
    tempralcontactos?.splice(index, 1);
    setcontacto(tempralcontactos);
  }

  function agregarcontacto(contacto) {
    const temporalcontact = [...contactos];
    temporalcontact.push(contacto);
    setcontacto(temporalcontact);
  }

  return (
    <div>
      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h5>Listado de Contactos</h5>
          </div>
          <div
            className="card-body"
            style={{ position: 'relative', height: '400px' }}
          >
            <table className="table table-striped">
              <thead>
                <th scope="col">Nombre:</th>
                <th scope="col">Email:</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones:</th>
              </thead>
              <tbody>
                {contactos?.map((contacto, index) => {
                  return (
                    <Contactenos
                      key={index}
                      contacto={contacto}
                      cambiaestado={changuestatecontacto}
                      eliminar={eliminarContacto}
                    />
                  );
                })}
              </tbody>
            </table>
            <div className="col-4">
              <FormContact onAddContact={agregarcontacto} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
