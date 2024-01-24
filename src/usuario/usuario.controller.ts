import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { criaUsuarioDTO } from "./dto/usuario.dto";
import { UsuarioEntity } from "./usuario.entity";
import { UsuariosArmazenados } from "./usuario.dm";
import {v4  as uuid} from 'uuid'
import { ListaUsuarioDTO } from "./dto/listaUsuario.dto";
import { AlteraUsuarioDTO } from "./dto/atualizaUsuario.dto";

import { LoginUsuarioDTO } from "./dto/loginUsuario.dto";
import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('usuario')
@Controller('/usuarios')
export class UsuarioController{    
    constructor(private clsUsuariosArmazenados: UsuariosArmazenados){
        
    }   

    @ApiResponse({ status: 200, description: 'Retorna os usuários cadastrados.'})
    @Get()
    async RetornoUsuarios(){
        const usuariosListados = await this.clsUsuariosArmazenados.Usuarios;
        const listaRetorno = usuariosListados.map(
            usuario => new ListaUsuarioDTO(
                usuario.id,
                usuario.nome,
                usuario.cidade,
                usuario.email,
                usuario.senha
            )
        );
        
        return listaRetorno;
    }

    @ApiResponse({ status: 200, description: 'Retorna se houve sucesso no login. O retorno "Status" diz se houve sucesso ou não.'})
    @Get('/login')
    async Login(@Body() dadosUsuario: LoginUsuarioDTO){
        var login = this.clsUsuariosArmazenados.validarLogin(dadosUsuario.email,dadosUsuario.senha);
        return {
            usuario: login[1] ? login[0] : null,
            status: login[1],
            message: login[1] ? "Login efetuado" : "Usuario ou senha inválidos"
        }
    }

    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao excluir o usuário.'})
    @ApiResponse({ status: 500, description: 'Retorna que o usuário não foi encontrado.'})
    @Delete('/:id')
    async removeUsuario(@Param('id') id: string){
        const usuarioRemovido = await this.clsUsuariosArmazenados.removeUsuario(id)

        return{
            usuario: usuarioRemovido,
            message: 'Usuário removido'
        }
    }

    @ApiResponse({ status: 200, description: 'Retorna que houve sucesso ao alterar o usuário.'})
    @ApiResponse({ status: 500, description: 'Retorna que o usuário não foi encontrado.'})
    @Put('/:id')
    async atualizaUsuario(@Param('id') id: string, @Body() novosDados: AlteraUsuarioDTO){
        const usuarioAtualizado = await this.clsUsuariosArmazenados.atualizaUSuario(id, novosDados)

        return{
            usuario: usuarioAtualizado,
            message: 'Usuário atualizado'
        }
    }
    

    @ApiCreatedResponse({ description: 'Retorna que houve sucesso ao cadastrar o usuário e retorna o ID criado.'})
    @Post()
    async criaUsuario(@Body() dadosUsuario: criaUsuarioDTO){
        var usuario = new UsuarioEntity(uuid(),dadosUsuario.nome,dadosUsuario.idade,dadosUsuario.cidade,
                                    dadosUsuario.email, dadosUsuario.telefone, dadosUsuario.senha)
        
            
        this.clsUsuariosArmazenados.AdicionarUsuario(usuario);        
        var retorno={
            id: usuario.id,
            message:'Usuário Criado'
        }
        
        return retorno
    }
}