import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/shift-away-subtle.css';

tippy.setDefaultProps({
    animation: 'shift-away-subtle',
});

export default function (node, options) {
    tippy(node, options) || [];

    return {
        destroy() {
            node._tippy?.destroy();
        },
    };
}
