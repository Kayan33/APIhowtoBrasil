import { RetornoCadastroDTO, RetornoObjDTO } from 'src/dto/retorno.dto';
import { Repository } from 'typeorm';
import { ListaUsuarioDTO } from './dto/lista.usuario.dto';
import { criaUsuarioDTO } from './dto/usuario.dto';
import { USUARIO } from './usuario.entity';
export declare class UsuarioService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<USUARIO>);
    listar(): Promise<ListaUsuarioDTO[]>;
    inserir(dados: criaUsuarioDTO): Promise<RetornoCadastroDTO>;
    localizarID(id: string): Promise<USUARIO>;
    remover(id: string): Promise<RetornoObjDTO>;
    validaEmail(email: string): Promise<boolean>;
}
