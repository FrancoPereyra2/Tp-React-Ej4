import React, { useState } from 'react';

function App() {
  // Estado para la nueva tarea y para la lista de tareas
  const [tarea, setTarea] = useState("");
  const [listaTareas, setListaTareas] = useState([]);

  // Función que maneja la adición de una nueva tarea
  const agregarTarea = () => {
    if (tarea !== "") {
      setListaTareas([...listaTareas, tarea]);
      setTarea("");  // Limpia el input después de agregar la tarea
    }
  };

  // Función para eliminar una tarea
  const eliminarTarea = (index) => {
    const nuevasTareas = listaTareas.filter((_, i) => i !== index);
    setListaTareas(nuevasTareas);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Bienvenido</h1>
      <h3>Ingresa tus tareas</h3>
      <form>
        <input 
          type="text" 
          placeholder="Tarea 1..." 
          value={tarea} 
          onChange={(e) => setTarea(e.target.value)} 
        />
        <button type="button" onClick={agregarTarea}>Agregar</button>
      </form>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {listaTareas.map((tarea, index) => (
          <li key={index} style={{ margin: '10px 0', display: 'flex', justifyContent: 'center' }}>
            <span style={{ marginRight: '10px' }}>{tarea}</span>
            <button onClick={() => eliminarTarea(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
