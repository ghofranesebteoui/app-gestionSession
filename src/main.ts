import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';  // Assurez-vous que vous importez AppModule du bon chemin

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
