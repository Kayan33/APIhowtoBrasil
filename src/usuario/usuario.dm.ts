import { Injectable } from '@nestjs/common';
import { UsuarioEntity } from './usuario.entity';

@Injectable()
export class UsuariosArmazenados {
  #usuarios: UsuarioEntity[] = [];

  AdicionarUsuario(usuario: UsuarioEntity) {
    this.#usuarios.push(usuario);
  }

  atualizaUSuario(id: string, dadosAtualizacao: Partial<UsuarioEntity>) {
    const usuario = this.buscaPorID(id);

    Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
      if (chave === 'id') {
        return;
      } else if (chave === 'senha') {
        usuario.trocasenha(valor);
        return;
      }
      usuario[chave] = valor;
    });

    return usuario;
  }

  private buscaPorID(id: string) {
    const possivelUsuario = this.#usuarios.find(
      (usuarioSalvo) => usuarioSalvo.id === id,
    );

    if (!possivelUsuario) {
      throw new Error('Usuario nao encontrado');
    }

    return possivelUsuario;
  }

  async removeUsuario(id: string) {
    const usuario = this.buscaPorID(id);

    this.#usuarios = this.#usuarios.filter(
      (usuarioSalvo) => usuarioSalvo.id !== id,
    );

    return usuario;
  }

  validaEmail(email: string) {
    const possivelUsuario = this.#usuarios.find(
      (usuario) => usuario.email === email,
    );
    return possivelUsuario !== undefined;
  }

  buscaPorEmail(email: string) {
    const possivelUsuario = this.#usuarios.find(
      (usuario) => usuario.email === email,
    );
    return possivelUsuario;
  }

  validarLogin(email: string, senha: string) {
    const usuario = this.buscaPorEmail(email);
    if (usuario) return [usuario, usuario.login(senha)];
    else return [null, false];
  }

  trocaSenha(email: string, senha: string) {
    const usuario = this.buscaPorEmail(email);
    if (usuario) {
        usuario.trocasenha(senha); 
        return true; 
    } else {
        return false; 
    }
}

  

  get Usuarios() {
    return this.#usuarios;
  }
}
