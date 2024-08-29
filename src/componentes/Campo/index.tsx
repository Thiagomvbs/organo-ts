import './campo.css'


interface CampoTextoProps{
    aoAlterado: (valor: string) => void 
    placeholder: string
    label: string
    type?: string
    valor: string
    obrigatorio: boolean
}

const Campo = ({valor, obrigatorio, label, placeholder, aoAlterado, type = 'texto'}: CampoTextoProps) => {
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input 
                type={type}
                value={valor} 
                onChange={evento => aoAlterado(evento.target.value)} 
                required={obrigatorio} 
                placeholder={placeholder}/> 
        </div>
    )
}

export default Campo