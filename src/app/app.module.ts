import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HompageComponent } from './hompage/hompage.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedInfoService } from './shared-info.service';
import { TilesComponent } from './tiles/tiles.component';
import { SearchComponent } from './search/search.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { LoginFlowComponent } from './login-flow/login-flow.component';
import { UpdatFlowComponent } from './updat-flow/updat-flow.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HompageComponent, AboutComponent, HeaderComponent, FooterComponent, TilesComponent, SearchComponent, SidebarComponent, LoginComponent, UserinfoComponent, LoginFlowComponent, UpdatFlowComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SharedInfoService]
})
export class AppModule { }
