import './botao.css'

interface BotaoProps{
    children : string
}

const Botao = ({children}: BotaoProps) => {
    return <button className="botao">
        {children}
    </button>
}

export default Botao