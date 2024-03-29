"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const uuid_1 = require("uuid");
const lista_usuario_dto_1 = require("./dto/lista.usuario.dto");
const usuario_entity_1 = require("./usuario.entity");
let UsuarioService = class UsuarioService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async listar() {
        var usuarioListados = await this.usuarioRepository.find();
        return usuarioListados.map(usuario => new lista_usuario_dto_1.ListaUsuarioDTO(usuario.id, usuario.nome, usuario.ultimoNome, usuario.statusMigratorio, usuario.interesses, usuario.email, usuario.senha, usuario.foto));
    }
    async inserir(dados) {
        let usuario = new usuario_entity_1.USUARIO();
        usuario.id = (0, uuid_1.v4)();
        usuario.nome = dados.nome;
        usuario.ultimoNome = dados.ultimoNome;
        usuario.statusMigratorio = dados.statusMigratorio;
        usuario.interesses = dados.interesses;
        usuario.email = dados.email;
        usuario.senha = dados.senha;
        usuario.foto = dados.foto;
        return this.usuarioRepository.save(usuario)
            .then((result) => {
            return {
                id: usuario.id,
                message: "Interesse cadastrado!"
            };
        })
            .catch((error) => {
            return {
                id: "",
                message: "Houve um erro ao cadastrar." + error.message
            };
        });
    }
    localizarID(id) {
        return this.usuarioRepository.findOne({
            where: {
                id,
            },
        });
    }
    async remover(id) {
        const usuario = await this.localizarID(id);
        return this.usuarioRepository.remove(usuario)
            .then((result) => {
            return {
                return: usuario,
                message: "Interesse excluido!"
            };
        })
            .catch((error) => {
            return {
                return: usuario,
                message: "Houve um erro ao excluir." + error.message
            };
        });
    }
    async validaEmail(email) {
        const possivelUsuario = this.usuarioRepository.findOne({
            where: {
                email: email,
            },
        });
        return possivelUsuario !== undefined;
        ;
    }
};
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USUARIO_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map