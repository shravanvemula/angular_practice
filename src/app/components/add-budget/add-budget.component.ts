import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BudgetsService } from 'src/app/budgets.service';

@Component({
  selector: 'app-add-budget',
  templateUrl: './add-budget.component.html',
  styleUrls: ['../login-user/login-user.component.css'],
})
export class AddBudgetComponent implements OnInit {
  constructor(private budgetService: BudgetsService) {}

  public isAdded: boolean = false;
  public isBudgetEmpty: boolean = false;
  public isCategoryEmpty: boolean = false;

  addBudget = new FormGroup({
    category: new FormControl(''),
    value: new FormControl(''),
  });

  saveBudget() {
    if(this.addBudget.value.category.length === 0) {
      this.isCategoryEmpty = true;
    }
    else if (this.addBudget.value.value.length == 0) {
      this.isBudgetEmpty = true;
    }
    else {
          this.budgetService
            .saveBudgetData(this.addBudget.value)
            .subscribe((budget) => {
              this.isAdded = true;
              this.addBudget.reset({});
            });
    }

  }

  removeAlert() {
    this.isAdded = false;
    this.isBudgetEmpty = false;
    this.isCategoryEmpty = false;
  }

  ngOnInit(): void {}
}
