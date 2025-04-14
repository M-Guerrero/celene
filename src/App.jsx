import { useEffect, useState } from 'react'
import supabase from './services/supabaseClient'

function App() {
  const [pedidos, setPedidos] = useState([])

  useEffect(() => {
    async function fetchPedidos() {
      const { data, error } = await supabase
        .from('pedido')
        .select('*')
        .order('fecha_creacion', { ascending: false })
  
      if (error) {
        console.error('Error al traer pedidos:', error)
      } else {
        console.log('Pedidos recibidos:', data) // 👈 Aquí se imprimen los pedidos en consola
        setPedidos(data)
      }
    }
  
    fetchPedidos()
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Pedidos de Medicamentos</h1>
      {pedidos.map((p) => (
        <div key={p.id} style={{ border: '1px solid #ccc', margin: '1rem 0', padding: '1rem' }}>
          <h2>{p.medicamento}</h2>
          <p><strong>Estado:</strong> {p.estado}</p>
          <p><strong>Ubicación:</strong> {p.ubicacion}</p>
          <p><strong>Fecha:</strong> {new Date(p.fecha_creacion).toLocaleString()}</p>
        </div>
      ))}
    </div>
  )
}

export default App
