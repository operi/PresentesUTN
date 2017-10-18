import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { LoginPage } from '../pages/login/login';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { PlanillasAsistenciaPage } from '../pages/planillas-asistencia/planillas-asistencia';
import { PlanillaService } from './services/planilla.service';
import { PlanillaAsistencia} from './model/planilla-asistencia';

@Component({
  templateUrl: 'app.html',
  providers: [PlanillaService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = LoginPage;
  pages: Array<{title: string, component: any}>;
  planillas: Array<PlanillaAsistencia>;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private planillaService: PlanillaService
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Página Principal', component: HomePage },
      { title: 'Planillas', component: PlanillasAsistenciaPage }      
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}

