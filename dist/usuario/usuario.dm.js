"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _UsuariosArmazenados_usuarios;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosArmazenados = void 0;
const common_1 = require("@nestjs/common");
let UsuariosArmazenados = class UsuariosArmazenados {
    constructor() {
        _UsuariosArmazenados_usuarios.set(this, []);
    }
    AdicionarUsuario(usuario) {
        __classPrivateFieldGet(this, _UsuariosArmazenados_usuarios, "f").push(usuario);
    }
    atualizaUSuario(id, dadosAtualizacao) {
        const usuario = this.buscaPorID(id);
        Object.entries(dadosAtualizacao).forEach(([chave, valor]) => {
            if (chave === 'id') {
                return;
            }
            else if (chave === 'senha') {
                usuario.trocasenha(valor);
                return;
            }
            usuario[chave] = valor;
        });
        return usuario;
    }
    buscaPorID(id) {
        const possivelUsuario = __classPrivateFieldGet(this, _UsuariosArmazenados_usuarios, "f").find((usuarioSalvo) => usuarioSalvo.id === id);
        if (!possivelUsuario) {
            throw new Error('Usuario nao encontrado');
        }
        return possivelUsuario;
    }
    async removeUsuario(id) {
        const usuario = this.buscaPorID(id);
        __classPrivateFieldSet(this, _UsuariosArmazenados_usuarios, __classPrivateFieldGet(this, _UsuariosArmazenados_usuarios, "f").filter((usuarioSalvo) => usuarioSalvo.id !== id), "f");
        return usuario;
    }
    validaEmail(email) {
        const possivelUsuario = __classPrivateFieldGet(this, _UsuariosArmazenados_usuarios, "f").find((usuario) => usuario.email === email);
        return possivelUsuario !== undefined;
    }
    buscaPorEmail(email) {
        const possivelUsuario = __classPrivateFieldGet(this, _UsuariosArmazenados_usuarios, "f").find((usuario) => usuario.email === email);
        return possivelUsuario;
    }
    validarLogin(email, senha) {
        const usuario = this.buscaPorEmail(email);
        if (usuario)
            return [usuario, usuario.login(senha)];
        else
            return [null, false];
    }
    trocaSenha(email, senha) {
        const usuario = this.buscaPorEmail(email);
        if (usuario) {
            usuario.trocasenha(senha);
            return true;
        }
        else {
            return false;
        }
    }
    get Usuarios() {
        return __classPrivateFieldGet(this, _UsuariosArmazenados_usuarios, "f");
    }
};
exports.UsuariosArmazenados = UsuariosArmazenados;
_UsuariosArmazenados_usuarios = new WeakMap();
exports.UsuariosArmazenados = UsuariosArmazenados = __decorate([
    (0, common_1.Injectable)()
], UsuariosArmazenados);
//# sourceMappingURL=usuario.dm.js.map