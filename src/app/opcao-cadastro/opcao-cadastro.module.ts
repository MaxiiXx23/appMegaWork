import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { OpcaoCadastroPage } from './opcao-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: OpcaoCadastroPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OpcaoCadastroPage]
})
export class OpcaoCadastroPageModule {}
