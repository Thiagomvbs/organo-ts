import { IColaborador } from '../../shared/interfaces/IColaborador';
import { ITimes } from '../../shared/interfaces/ITimes';
import Colaborador from '../Colaborador';
import './time.css';
import hexToRgba from 'hex-to-rgba';

interface TimeProps {
    colaboradores: IColaborador[];
    time: ITimes;
    aoDeletar: (colaboradorId: string) => void;
    mudarCor: (novaCor: string, id: string) => void;
    aoFavoritar: (colaboradorId: string) => void;
}

const Time = ({ time, colaboradores, aoDeletar, mudarCor, aoFavoritar }: TimeProps) => {
    return (
        <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
            {colaboradores.length > 0 && (
                <>
                    <input value={time.cor} onChange={evento => mudarCor(evento.target.value, time.id)} type='color' className='input-cor' />
                    <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
                    <div className='colaboradores'>
                        {colaboradores.map((colaborador, indice) => (
                            <Colaborador 
                                key={indice} 
                                colaborador={colaborador} 
                                corDeFundo={time.cor} 
                                aoDeletar={aoDeletar} 
                                aoFavoritar={aoFavoritar}
                            />
                        ))}
                    </div>
                </>
            )}
        </section>
    );
};

export default Time;