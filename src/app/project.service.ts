import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  loadProjekts(): Project[] {
    return [
      { name: 'DMS Einführung', startDate: '01.10.2022', endDate: '03.10.2022', owner: 'Christian', details: { employees: [{ name: 'John' }] } },
      { name: 'FooBar', startDate: '01.10.2022', endDate: '03.10.2022', owner: 'Christian', details: { employees: [{ name: 'John' }] } },
      { name: 'Wuff wuff', startDate: '01.10.2022', endDate: '03.10.2022', owner: 'Christian', details: { employees: [{ name: 'John' }] } },
    ]
  }
}

export interface Project {
  name: string;
  startDate: string;
  endDate: string;
  owner: string;

  details:{
    employees: [{
      name: string;
    }]
  }
}