import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    MessageService,
    providePrimeNG({
      theme: {
        preset: Aura,
      },
      license:
        'eyJpZCI6ImE1YWI1MDNmLTc2YmMtNGIwMS04OWU5LWNkODMzN2JkZDdlYiIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODQ3MjAyNDYsImV4cCI6MTgxNjI1NjI0Nn0.wYyBJfX696iP-25k4QIFc2Fzu-6Usoq1VSRyZSawrqZPDnsuNjUHZO4JqPtIt94ycIDF96Jw6-dcXKZw-IofAA',
    }),
  ],
};
