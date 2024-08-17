import './style.css'
import { tipado } from './typescript/01-tipado'
import { funciones } from './typescript/02-funciones'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
${tipado}<br>${funciones}
`

