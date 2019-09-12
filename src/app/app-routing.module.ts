import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'TabsPageModule', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'opcao-cadastro', loadChildren: './opcao-cadastro/opcao-cadastro.module#OpcaoCadastroPageModule' },
  { path: 'cadastro-pj', loadChildren: './cadastro-pj/cadastro-pj.module#CadastroPJPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
