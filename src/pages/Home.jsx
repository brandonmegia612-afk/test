import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export default function Home(){
  const [files, setFiles] = useState([])
  useEffect(()=>{
    fetch('/site-manifest.json')
      .then(r => r.json())
      .then(setFiles)
      .catch(()=>setFiles([]))
  },[])
  return (
    <div>
      <h1>CASATIC - Sitios</h1>
      <p>Coloca tus archivos HTML/CSS/JS dentro de <strong>/public/site</strong>. Genera `site-manifest.json` con la lista de HTML.</p>
      <ul>
        {files.length===0 && <li>No hay páginas en el manifest. Sigue el README.</li>}
        {files.map((f, i)=>(
          <li key={i}><a href={`/site/${f}`} target="_blank" rel="noreferrer">{f}</a> — <Link to={`/view?file=${encodeURIComponent('/site/'+f)}`}>Ver en app</Link></li>
        ))}
      </ul>
    </div>
  )
}
