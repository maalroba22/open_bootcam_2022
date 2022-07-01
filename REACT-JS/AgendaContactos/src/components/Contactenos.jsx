import React from 'react';

const Contactenos = ({ contacto, cambiaestado, eliminar }) => {
  return (
    <tr className="fw-normal">
      <th>
        <span className="align-middle">{contacto.Nombre}</span>
      </th>
      <td className="align-middle">
        <span>{contacto.Email}</span>
      </td>
      <td className="align-middle">
        <span
          className={contacto.estado ? 'btn btn-success' : 'btn btn-danger'}
          onClick={() => cambiaestado(contacto)}
        >
          {contacto.estado ? 'CONECTADO' : 'DESCONECTADO'}
        </span>
      </td>

      <td className="align-middle">
        <i
          className="bi-trash btn btn-danger"
          onClick={() => {
            eliminar(contacto);
          }}
        ></i>
      </td>
    </tr>
  );
};

export default Contactenos;
