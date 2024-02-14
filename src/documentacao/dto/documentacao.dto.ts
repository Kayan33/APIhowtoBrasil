import { ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class criaDocumentacaoDTO{

  @IsString()
  @IsNotEmpty({ message: 'Documentação não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Passaporte',
    description: `A informação sobre documentação é primariamente um auxílio para identificar quais documentos são pedidos em território nacional
    e onde cada uma deve ser entregue para a autoridade competente.`,
  })
  documentacao: string;

  @IsString()
  @IsNotEmpty({ message: 'nome Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Fórum da comarca',
    description: `O nome é utilizado para identificar o órgão competente e suas funções na mediação para com as regularizações.`,
  })
  nome: string;

  @IsString()
  @IsNotEmpty({ message: 'Endereco Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Rua dom pedro 5-40',
    description: `O endereço é utilizado para identificar a localização do Orgão Governamental.`,
  })
  endereco: string;

  @IsString()
  @IsNotEmpty({ message: 'Numero Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: "(00)00000-0000",
    description: `O número de telefone é usado para contato com o estabelecimento.`,
  })
  Numero: string;

  @IsString()
  @IsNotEmpty({ message: 'Horario Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Dás 14:00 até 22:0',
    description: `O horário é usado para especificar o intervalo de funcionamento do estabelecimento.`,
  })
  Horario: string;

}