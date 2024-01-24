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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlteraUsuarioDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const email_unico_validator_1 = require("../validacao/email-unico.validator");
class AlteraUsuarioDTO {
}
exports.AlteraUsuarioDTO = AlteraUsuarioDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: "nome Não pode ser vazio" }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Roberto Silva',
        description: `O nome é usado para identificar o usuário, em telas, cadastros e outros.`,
    }),
    __metadata("design:type", String)
], AlteraUsuarioDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: '18',
        description: `A idade é utilizada para identificar a idade do usuário, deve ser numérico.`,
    }),
    __metadata("design:type", Number)
], AlteraUsuarioDTO.prototype, "idade", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'São Paulo',
        description: `A cidade é utilizada para identificar a localização do usuário.`,
    }),
    __metadata("design:type", String)
], AlteraUsuarioDTO.prototype, "cidade", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(undefined, { message: "email é inválido" }),
    (0, email_unico_validator_1.EmailUnico)({ message: "O email informado já existe" }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'teste@teste.com',
        description: `O email é utilizado para o login e identificação do usuário. Deve ser único.`,
    }),
    __metadata("design:type", String)
], AlteraUsuarioDTO.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: '(00)00000-0000',
        description: `O telefone pode ser usado para se comunicar com o usuário.`,
    }),
    __metadata("design:type", String)
], AlteraUsuarioDTO.prototype, "telefone", void 0);
__decorate([
    (0, class_validator_1.MinLength)(6, { message: "Senha precisa de pelo menos 6 digitos" }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Asd@444555666',
        description: `A senha deve conter pelo menos 6 caracteres, contar com letras minusculas e maiusculas, numeros e caracteres especiais.`,
    }),
    __metadata("design:type", String)
], AlteraUsuarioDTO.prototype, "senha", void 0);
//# sourceMappingURL=atualizaUsuario.dto.js.map