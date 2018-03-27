import { InjectionToken, Type } from '@angular/core';

export const TEST_COMPONENT: InjectionToken<Type<any>> = new InjectionToken('DynamicComponent');
