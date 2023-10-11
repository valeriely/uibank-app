import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { CreditCardsComponent } from './credit-cards/credit-cards.component';
import { CreditCardsApplyComponent } from './credit-cards-apply/credit-cards-apply.component';

const routes: Routes = [
  {path:'', component: CreditCardComponent, children:[
    {path:'', component: CreditCardsComponent},
    {path:'apply', component: CreditCardsApplyComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditCardsModuleRoutingModule { }
