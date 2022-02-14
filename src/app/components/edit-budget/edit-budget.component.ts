import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BudgetsService } from 'src/app/budgets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-budget',
  templateUrl: './edit-budget.component.html',
    styleUrls: ['../login-user/login-user.component.css'],
})
export class EditBudgetComponent implements OnInit {
  constructor(private budgetService: BudgetsService, private router: ActivatedRoute) {}

  public isEdited: boolean = false;
  private budgetId = this.router.snapshot.params['id']

  editBudget = new FormGroup({
    category: new FormControl(''),
    value: new FormControl('')
  });

  updateBudget() {
    this.budgetService
      .updateBudgetData( this.budgetId,this.editBudget.value)
      .subscribe((budget) => {
        this.isEdited = true;
        this.editBudget.reset({});
      });
  }

  removeAlert() {
    this.isEdited = false;
  }

  ngOnInit(): void {
    this.budgetService.getBudgetById(this.budgetId)
    .subscribe((budget: any) => {
      this.editBudget = new FormGroup( {
        category: new FormControl(budget['category']),
        value: new FormControl(budget['value'])
      })
   })
 }
}
