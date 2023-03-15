export class CityDto
{
    id:number | null
    constructor(
        public name='',
        public description=''

    ){
        this.id=0
    } 
}