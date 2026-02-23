import React from 'react'
import { useLocation } from 'react-router-dom'

function useQuery(){ return new URLSearchParams(useLocation().search) }

export default function View(){
  const q = useQuery()
  const file = q.get('file') || '/site/Directorio%20Interactivo%20de%20Empresas%20Tecnol%C3%B3gicas%20CASATIC%202026.html'
  return (
    <div style={{height:'80vh'}}>
      <iframe src={file} style={{width:'100%', height:'100%', border:0}} title="Vista sitio" />
    </div>
  )
}
