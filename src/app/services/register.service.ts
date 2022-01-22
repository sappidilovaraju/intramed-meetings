import { Injectable } from '@angular/core';
import { RegisterRequestModel } from '../models/register.model';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private rest: RestService) { }

  public register(payload: RegisterRequestModel) {
    const key = (new Date()).getTime();
    return this.rest.post('registrations', payload, { key: key });
  }
}
