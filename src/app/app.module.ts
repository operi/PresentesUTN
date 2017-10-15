import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { PlanillasAsistenciaPage } from '../pages/planillas-asistencia/planillas-asistencia';
import { DetallePlanillaAsistenciaPage } from '../pages/detalle-planilla-asistencia/detalle-planilla-asistencia';
import { DetalleAsistenciaDiaPage } from '../pages/detalle-asistencia-dia/detalle-asistencia-dia';
import { NuevoAlumnoPage } from '../pages/nuevo-alumno/nuevo-alumno';
import { NuevoDiaPage } from '../pages/nuevo-dia/nuevo-dia'; 
import { NuevaPlanillaAsistenciaPage } from '../pages/nueva-planilla-asistencia/nueva-planilla-asistencia';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    ItemDetailsPage,
    ListPage,
    PlanillasAsistenciaPage,
    DetallePlanillaAsistenciaPage,
    DetalleAsistenciaDiaPage,
    NuevoAlumnoPage,
    NuevoDiaPage,
    NuevaPlanillaAsistenciaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    ItemDetailsPage,
    ListPage,
    PlanillasAsistenciaPage,
    DetallePlanillaAsistenciaPage,
    DetalleAsistenciaDiaPage,
    NuevoAlumnoPage,
    NuevoDiaPage,
    NuevaPlanillaAsistenciaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
