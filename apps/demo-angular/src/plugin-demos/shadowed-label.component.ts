import { Component, NgZone } from '@angular/core';
import { DemoSharedShadowedLabel } from '@demo/shared';

@Component({
	selector: 'demo-shadowed-label',
	templateUrl: 'shadowed-label.component.html',
})
export class ShadowedLabelComponent {
	demoShared: DemoSharedShadowedLabel;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedShadowedLabel();
	}
}
