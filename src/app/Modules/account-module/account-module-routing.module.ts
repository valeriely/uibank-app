import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountApplyComponent } from './account-apply/account-apply.component';
import { AccountCreateResultsComponent } from './account-create-results/account-create-results.component';
import { DisputeTransactionComponent } from './dispute-transaction/dispute-transaction.component';
import { DisputeAccountViewComponent } from './dispute-account-view/dispute-account-view.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { TransferResultComponent } from './transfer-result/transfer-result.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';

const routes: Routes = [
  {
    path: '', component: AccountComponent, children: [
      { path: '', component: AccountsComponent },
      { path: 'account-details', component: AccountDetailsComponent },
      { path: 'account-apply', component: AccountApplyComponent },
      { path: 'account-details/:accountID/:balance/:accountName', component: AccountDetailsComponent },
      { path: 'account-create-results/:accountId/:friendlyName', component: AccountCreateResultsComponent },
      { path: 'dispute-transaction/:accountId', component: DisputeTransactionComponent },
      { path: 'dispute-transaction/view-details/:accountId', component: DisputeAccountViewComponent },
      { path: 'transfer-money', component: TransferMoneyComponent },
      { path: 'transfer-result', component: TransferResultComponent },
      { path: 'maintenance', component: MaintenanceComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountModuleRoutingModule { }
