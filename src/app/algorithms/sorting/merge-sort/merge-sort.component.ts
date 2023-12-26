import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merge-sort',
  standalone: true,
  imports: [],
  templateUrl: './merge-sort.component.html',
  styleUrl: './merge-sort.component.scss',
})
export class MergeSortComponent implements OnInit {
  ngOnInit(): void {
    this.sort();
  }

  sort() {
    let numbers: number[] = [15, 234, 2, 0, 23, 76, 45, 21];
    for (let i = 1; i < numbers.length; i++) {
      let temp: number = numbers[i];
      let j = i;

      while (numbers[j - 1] > temp) {
        numbers[j] = numbers[j - 1];
        j--;
      }

      numbers[j] = temp;
    }
    console.log(numbers);
  }
}
