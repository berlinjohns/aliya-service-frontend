import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { APP_ROUTE } from './app/app-routing';
import { provideRouter } from '@angular/router';


bootstrapApplication(AppComponent, {
    providers:[provideRouter(APP_ROUTE)]
});

;

