import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	showFibo: boolean = false;
	showPivot: boolean = false;
	showTechnicals: boolean = false;

	private technicalsCheckedFibo: boolean;
	private technicalsCheckedPivot: boolean;

	fiboResults: Array<string>;
	pivotResults: Array<string>;
	inputValues: Array<string>;

	fiboChecked(data) {
		this.showFibo = data;
	}

	pivotChecked(data) {
		this.showPivot = data;
	}

	technicalsChecked(data) {
		this.showTechnicals = data;
	}

	techBtnChecked() {
		if (!this.showTechnicals) {
			this.technicalsCheckedFibo = this.showFibo;
			this.technicalsCheckedPivot = this.showPivot;
		}
	}

	appCalculatorFiboResults(data) {
		this.fiboResults = data;
	}

	appCalculatorPivotResults(data) {
		this.pivotResults = data;
	}

	appTechnicalsInputValues(data) {
		this.inputValues = data;
	}
}