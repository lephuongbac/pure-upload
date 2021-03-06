function addEventHandler(el: Element | HTMLElement, event: string, handler: (ev: UIEvent) => void) {
    if (el.addEventListener) {
        el.addEventListener(event, handler);
    } else {
        let elem = <IElementWithEvents>el;
        if (elem.attachEvent) {
            elem.attachEvent('on' + event, handler);
        } else {
            elem[event] = handler;
        }
    }
}

interface IElementWithEvents extends HTMLElement {
    [key: string]: Function | Object | string | void | null | number | boolean;
    attachEvent: (event: string, handler: (ev: UIEvent) => void) => void;
}