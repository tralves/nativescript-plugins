import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { ShadowedLabelComponent } from './shadowed-label.component';
import { registerElement } from '@nativescript/angular';
import { ShadowedLabel } from '@tralves/shadowed-label';

registerElement('ShadowedLabel', () => ShadowedLabel);

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: ShadowedLabelComponent }])],
	declarations: [ShadowedLabelComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class ShadowedLabelModule {}
