import { Utils } from '@nativescript/core';
import { TextShadow } from '.';
import { ShadowedLabelCommon, textShadowProperty } from './common';

export class ShadowedLabel extends ShadowedLabelCommon {
    [textShadowProperty.setNative](value: TextShadow) {
        const toDevicePixels = Utils.layout.toDevicePixels;
        this.nativeViewProtected.setShadowLayer(
            toDevicePixels(value.blurRadius),
            toDevicePixels(value.offsetX),
            toDevicePixels(value.offsetY),
            value.color.android
        );
    }
}
