import { PartialType, OmitType } from '@nestjs/swagger';
import { Create_Cei_Rtb_Dto } from './create_cei_rtb_dto';

export class Edit_Cei_Rtb_Dto extends PartialType(
    OmitType(Create_Cei_Rtb_Dto, [

    ] as const),
) { }