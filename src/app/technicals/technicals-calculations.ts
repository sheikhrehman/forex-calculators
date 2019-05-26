import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'tech-calc',
	template: `
		<button gui-button
				(click)="calculateTechnicals()">
			Execute!
		</button>
	`
})

export class TechnicalsCalculationsComponent {

	@Input()
	public high;

	@Input()
	public low;

	@Input()
	public type;

	@Input()
	public open;

	@Input()
	public close;

	@Output()
	calculatorPivotResults: EventEmitter<Array<string>> = new EventEmitter();

	@Output()
	calculatorFiboResults: EventEmitter<Array<string>> = new EventEmitter();

	@Output()
	calculatorShowResults: EventEmitter<boolean> = new EventEmitter();

	private pivotResults: Array<string> = [];
	private fiboResults: Array<string> = [];

	private showResults: boolean;
	private Pivot: number;
	private result_R3: string;
	private result_R2: string;
	private result_R1: string;
	private result_PP: string;
	private result_S1: string;
	private result_S2: string;
	private result_S3: string;
	private result_236: string;
	private result_382: string;
	private result_50: string;
	private result_618: string;
	private range: number;

	calculateTechnicals() {
		this.showResults = true;
		this.calculatorShowResults.emit(this.showResults);
		this.range = this.high - this.low;
		this.cal_fib();
		this.cal_pivot();
	}

	cal_fib() {

		if (this.type === 'Long') {
			this.result_236 = ((this.range * 0.764) + this.low).toFixed(5);
			this.result_382 = ((this.range * 0.618) + this.low).toFixed(5);
			this.result_50 = ((this.range * 0.50) + this.low).toFixed(5);
			this.result_618 = ((this.range * 0.382) + this.low).toFixed(5);
		}

		if (this.type === 'Short') {
			this.result_236 = (this.high - (this.range * 0.764)).toFixed(5);
			this.result_382 = (this.high - (this.range * 0.618)).toFixed(5);
			this.result_50 = (this.high - (this.range * 0.50)).toFixed(5);
			this.result_618 = (this.high - (this.range * 0.382)).toFixed(5);
		}

		this.fiboResults =
			[
				this.result_236,
				this.result_382,
				this.result_50,
				this.result_618
			];

		this.calculatorFiboResults.emit(this.fiboResults);
	}

	cal_pivot() {

		this.Pivot = (this.high + this.low + this.close + this.open) / 4;

		this.result_R3 = (this.Pivot + this.range * 3).toFixed(5);
		this.result_R2 = (this.Pivot + this.range * 2).toFixed(5);
		this.result_R1 = (this.Pivot * 2 - this.low).toFixed(5);
		this.result_PP = (this.Pivot).toFixed(5);
		this.result_S1 = (this.Pivot * 2 - this.high).toFixed(5);
		this.result_S2 = (this.Pivot - this.range * 2).toFixed(5);
		this.result_S3 = (this.Pivot - this.range * 3).toFixed(5);

		this.pivotResults =
			[
				this.result_R3,
				this.result_R2,
				this.result_R1,
				this.result_PP,
				this.result_S1,
				this.result_S2,
				this.result_S3
			];

		this.calculatorPivotResults.emit(this.pivotResults);
	}
}
