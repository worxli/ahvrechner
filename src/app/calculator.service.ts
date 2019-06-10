import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  // Input settings
  private salary: number;
  private gender: string;
  private age: number;

  // Variables
  private pensionAge: number;
  private deduction: number;
  private mwst: number;
  private payout: number;

  // Calculated results
  private resultSalary: BehaviorSubject<number>;
  private resultAHV: BehaviorSubject<number[]>;

  constructor() {
    this.resultSalary = new BehaviorSubject<number>(0);
    this.resultAHV = new BehaviorSubject<number[]>([]);
  }

  private calculate() {
    // TODO: calculate real result salary
    this.resultSalary.next(this.salary);
  }

  // Input setters
  setSalary(salary: number) {
    this.salary = salary;
    this.calculate();
  }

  setGender(gender: string) {
    this.gender = gender;
    this.calculate();
  }

  setAge(age: number) {
    this.age = age;
    this.calculate();
  }

  // Variable Setters
  setMwSt(mwst: number) {
    this.mwst = mwst;
    this.calculate();
  }

  setPayout(payout: number) {
    this.payout = payout;
    this.calculate();
  }

  setDeduction(deduction: number) {
    this.deduction = deduction;
    this.calculate();
  }

  setPensionAge(age: number) {
    this.pensionAge = age;
    this.calculate();
  }

  // Result getters
  getResultSalary(): Observable<number> {
    return this.resultSalary.asObservable();
  }

  getResultAHV(): Observable<number[]> {
    return this.resultAHV.asObservable();
  }
}
