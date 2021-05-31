import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AceroComponent } from './paginas/acero/acero.component';
import { MarroquineriaComponent } from './paginas/marroquineria/marroquineria.component';
import { SkincareComponent } from './paginas/skincare/skincare.component';
import { InsumosnailsComponent } from './paginas/insumosnails/insumosnails.component';
import { MakeupComponent } from './paginas/makeup/makeup.component';
import { AccesoriosComponent } from './paginas/accesorios/accesorios.component';
import { MenuprincipalComponent } from './menuprincipal/menuprincipal.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { ContactoComponent } from './paginas/contacto/contacto.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AceroComponent,
    MarroquineriaComponent,
    SkincareComponent,
    InsumosnailsComponent,
    MakeupComponent,
    AccesoriosComponent,
    MenuprincipalComponent,
    ContactoComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
