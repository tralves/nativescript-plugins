import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedShadowedLabel } from '@demo/shared';
import {} from '@tralves/shadowed-label';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedShadowedLabel {}
