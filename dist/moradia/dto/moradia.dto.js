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
exports.criaMoradiaDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class criaMoradiaDTO {
}
exports.criaMoradiaDTO = criaMoradiaDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'endereco não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'avenia da luz',
        description: `A informação sobre moradia é utilizada para identificar possíveis localizações de locais para habitação`,
    }),
    __metadata("design:type", String)
], criaMoradiaDTO.prototype, "endereco", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Nome Não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Apartamento para venda e locação com 1 quarto no Edificio Personnalite, Araraquara',
        description: `O nome é utilizado para identificar o estabelecimento em telas, cadastros e outros contextos.`,
    }),
    __metadata("design:type", String)
], criaMoradiaDTO.prototype, "nome", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Tipos' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 1,
        description: `Os tipos são usados para identificar a área atuante do componente.`,
    }),
    __metadata("design:type", Number)
], criaMoradiaDTO.prototype, "tipos", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Link correlato não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'https://www.moradiabrasil.com.br/',
        description: `O link correlato possui função de localizar hospedagens de sites online onde é possível localizar habitações.`,
    }),
    __metadata("design:type", String)
], criaMoradiaDTO.prototype, "linkCorrelatos", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Área  não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: '47m²',
        description: `A área é utilizada para se dar uma base do tamanho da residência.`,
    }),
    __metadata("design:type", String)
], criaMoradiaDTO.prototype, "area", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Quartos não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 2,
        description: `Específica quantidade de quartos na residência.`,
    }),
    __metadata("design:type", Number)
], criaMoradiaDTO.prototype, "quartos", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Valor não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 60000,
        description: `Específica o valor da residência.`,
    }),
    __metadata("design:type", Number)
], criaMoradiaDTO.prototype, "valor", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Banheiro não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 1,
        description: `Específica a quantidade de banheiros na residência.`,
    }),
    __metadata("design:type", Number)
], criaMoradiaDTO.prototype, "banheiro", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Vagas não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 1,
        description: `Específica a quantidade de vagas na residência.`,
    }),
    __metadata("design:type", Number)
], criaMoradiaDTO.prototype, "vagas", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Foto não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'https://i.im.ge/2024/02/22/g9vgTP.6687959233.jpg',
        description: `Específica a quantidade de vagas na residência.`,
    }),
    __metadata("design:type", String)
], criaMoradiaDTO.prototype, "foto", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Foto não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'O que devo fazer caso eu fique doente?',
        description: `Específica a quantidade de vagas na residência.`,
    }),
    __metadata("design:type", String)
], criaMoradiaDTO.prototype, "interacao", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'Foto não pode ser vazio' }),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiPropertyOptional)({
        example: 'Leve seu Protocolo Provisório ou Carteira de Registro Nacional Migratório (antigo Registro Nacional de Estrangeiro  RNE) e CPF quando for a uma UBS pela primeira vez. Você receberá uma carteirinha do SUS. Esse documento contém toda informação médica sobre seu portador e provê acesso a consultas e exames. Você deverá levar a carteirinha do SUS toda vez que procurar assistência médica.',
        description: `Específica a quantidade de vagas na residência.`,
    }),
    __metadata("design:type", String)
], criaMoradiaDTO.prototype, "subInteracao", void 0);
//# sourceMappingURL=moradia.dto.js.map