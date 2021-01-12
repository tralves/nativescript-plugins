import { Color, CssProperty, Style } from '@nativescript/core';
import { dip } from '@nativescript/core/ui/core/view';
import { ShadowedLabelCommon } from './common';

export declare class ShadowedLabel extends ShadowedLabelCommon {
    textShadow: any;
}

export interface TextShadow {
    offsetX: dip;
    offsetY: dip;
    blurRadius: dip;
    color: Color;
}
