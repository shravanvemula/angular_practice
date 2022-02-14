import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBudget } from './types/IBudget';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BudgetsService {
  constructor(private http: HttpClient) {}

  private _onlyBudgetUrl = 'http://localhost:3000/budgets';
  private _usersUrl = 'http://localhost:3000/users';

  public userId = "";

  getBudgets(userId: string): Observable<IBudget[]> {
    this.userId = JSON.parse(userId);
  
    return this.http.get<IBudget[]>(
      `${this._usersUrl}/${this.userId}/budgets`);
  }

  saveBudgetData(data: IBudget) {
    if(this.userId) data.userId = JSON.parse(this.userId);
    return this.http.post(this._onlyBudgetUrl, data);
  }

  deleteBudget(id: number) {
    return this.http.delete(`${this._onlyBudgetUrl}/${id}`)
  }

  getBudgetById(id: number) {
    return this.http.get(`${this._onlyBudgetUrl}/${id}`)
  }

  updateBudgetData(id: number, budget: IBudget){
    if (this.userId) budget.userId = JSON.parse(this.userId);
    return this.http.put(`${this._onlyBudgetUrl}/${id}`, budget)
  }
}
