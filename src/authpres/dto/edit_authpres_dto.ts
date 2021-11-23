import { PartialType, OmitType } from '@nestjs/swagger';
import { Create_Authpres_Dto } from './create_authpres_dto';

export class Edit_Authpres_Dto extends PartialType(
    OmitType(Create_Authpres_Dto, [

    ] as const),
) { }