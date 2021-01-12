import { TextShadow } from '.';
import { ShadowedLabelCommon, textShadowProperty } from './common';

export class ShadowedLabel extends ShadowedLabelCommon {
    [textShadowProperty.setNative](value: TextShadow) {
        const layer = this.nativeTextViewProtected.layer;
        layer.shadowOpacity = 1;
        layer.shadowRadius = value.blurRadius;
        layer.shadowColor = value.color.ios.CGColor;
        layer.shadowOffset = CGSizeMake(value.offsetX, value.offsetY);
        layer.shouldRasterize = true;
        layer.masksToBounds = false;
    }
}
