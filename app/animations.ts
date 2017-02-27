import { state, transition, animate, trigger, style } from '@angular/core';

export var componentNavigation = [
    trigger('state', [
        state('in', style({'opacity': 1 })),
        state('void', style({'opacity': 0 })),
        transition('void => *', [ animate('600ms ease-out') ]),
            transition('* => void', [ animate('600ms ease-out')])
    ])
];
