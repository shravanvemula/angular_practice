import { Component, OnInit } from '@angular/core';
import { BudgetsService } from 'src/app/budgets.service';
import { IBudget } from 'src/app/types/IBudget';


@Component({
  selector: 'app-list-budget',
  templateUrl: './list-budget.component.html',
  styleUrls: ['./list-budget.component.css']
})
export class ListBudgetComponent implements OnInit {

  constructor(private budgetService: BudgetsService) { }

  public budgets: IBudget[] = []
  public isEmpty = false 

  public userId = JSON.stringify(localStorage.getItem('userId'));
  ngOnInit(): void { 
    console.log('user id ', this.userId);
    this.budgetService.getBudgets(this.userId).subscribe( data => {
      this.budgets=data
      if(data.length === 0) {
        this.isEmpty = true;
      }
    })
  }

  onDelete(id: any) {
    this.budgetService.deleteBudget(id).subscribe(() => {
      this.ngOnInit();
    })
  }
}
