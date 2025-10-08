* rel="noopener": предотвращает доступ к window.opener на открытой вкладке
* rel="noreferrer": предотвращает передачу HTTP-заголовка Referer открытой вкладке

```js
function secureExternalLinks() {
    const links = document.querySelectorAll('a[target="_blank"]');

    links.forEach(link => {
        link.relList.add('noopener', 'noreferrer');
    });
}

document.addEventListener('DOMContentLoaded', secureExternalLinks);
