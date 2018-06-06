function component() {
    var element = document.createElement('div');

    element.innerHTML = 'Hello';

    return element;
}

document.body.appendChild(component());