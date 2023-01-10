import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData(key:string):any{
    let data:string|null = localStorage.getItem(key)
    if(data)
      return JSON.parse(data);
    return null;
  }

  setData(key:string, data:any){
    localStorage.setItem(key, JSON.stringify(data));
  }

  deleteData(key: string){
    localStorage.removeItem(key);
  }
}
