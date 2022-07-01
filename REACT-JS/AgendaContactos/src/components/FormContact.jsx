import React, { useRef } from 'react';

export default function FormContact({ onAddContact }) {
  const nombre = useRef('');
  const email = useRef('');
  function agregarcontacto(e) {
    e.preventDefault();
    const nuevoContacto = {
      Nombre: nombre.current.value,
      Email: email.current.value,
      estado: true,
    };
    onAddContact(nuevoContacto);
    limpiartext();
  }

  function limpiartext() {
    nombre.current.value('');
    email.current.value('');
  }
  return (
    <div>
      <form onSubmit={agregarcontacto}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            Nombre Contacto
          </label>
          <input
            type="text"
            ref={nombre}
            class="form-control"
            placeholder="Ingrese su nombre"
          ></input>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            E-mail Contacto:
          </label>
          <input
            type="text"
            ref={email}
            class="form-control"
            placeholder="Ingrese su E-mail"
          ></input>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn- btn-success">
            Guardar
          </button>
        </div>
      </form>
    </div>
  );
}
