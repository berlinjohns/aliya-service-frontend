import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { APP_ROUTE } from './app.routes';
import { provideHttpClient } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(APP_ROUTE), 
      provideHttpClient(),
  
      importProvidersFrom([
       
      ]),
      
    ]
  };