import { IsNotEmpty, IsString, Matches, IsDateString, IsUrl } from 'class-validator';

export class CreateAuthorityDto
{
    @IsNotEmpty()
    @IsString()
    @Matches(/^[A-Za-z\s]+$/, { message: 'Name should not contain numbers' })
    name: string;

    @IsNotEmpty()
    @Matches(/^(?=.*[@#$&]).{6,}$/, {
        message: 'Password must contain one special character (@, #, $, &)',
    })
    password: string;

    @IsNotEmpty()
    @IsDateString({}, { message: 'Please use valid date format (YYYY-MM-DD)' })
    date: string;

    @IsNotEmpty()
    @IsUrl({}, { message: 'Please enter a valid social media link' })
    socialMediaLink: string;
}
