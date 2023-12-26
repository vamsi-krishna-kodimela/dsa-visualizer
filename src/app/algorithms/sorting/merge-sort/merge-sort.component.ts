import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merge-sort',
  standalone: true,
  imports: [],
  templateUrl: './merge-sort.component.html',
  styleUrl: './merge-sort.component.scss',
})
export class MergeSortComponent implements OnInit {
  states: TransitionState[] = [];

  ngOnInit(): void {
    const numbers: number[] = [15, 234, 2, 0, 23, 76, 45, 21];
    this.sort(numbers);
  }

  sort(numbers: number[]) {
    for (let i = 1; i < numbers.length; i++) {
      const temp: number = numbers[i];
      let j = i;
      let state: TransitionState = {
        i,
        j,
        currentState: [...numbers],
        previousState: [...numbers],
        transitions: [],
      };
      while (j > 0 && numbers[j - 1] > temp) {
        let localState: TransitionState = {
          i,
          j,
          currentState: [...numbers],
          previousState: [...numbers],
          transitions: [],
        };
        numbers[j] = numbers[--j];
        localState.currentState = [...numbers];
        localState.j = j;
        state.transitions!.push(localState);
      }
      numbers[j] = temp;

      state.currentState = [...numbers];
      state.j = j;
      this.states.push(state);
    }
  }
}

interface TransitionState {
  previousState: number[];
  currentState: number[];
  i: number;
  j: number;
  transitions?: TransitionState[];
}
