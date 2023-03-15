import { InMemoryDbService } from 'angular-in-memory-web-api';
import { CityDto } from './citydetail';


export class CityData implements InMemoryDbService
{
    createDb() {
        const cities: CityDto[] = [
          {
            id:1,
            name: 'New York City',
            description: 'The one with that big park.'
          },
          {
            id:2,
            name: 'Antwerp',
            description: 'The one with the cathedral that was never really finished.'
          },
          {
            id:3,
            name: 'Paris',
            description: 'The one with that big tower.'
          },
        ];
        return { cities };
      }
}