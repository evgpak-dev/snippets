# Показать резервный текст для изображений, которые не загружаются

```css
img {
    display: block;
    font-family: sans-serif;
    width: 100%;
    height: auto;
    position: relative;
    text-align: center;
}

img::before {
    content: "Sorry, this image is unavailable.";
    display: block;
    margin-bottom: 10px;
}

img::after {
    content: "(url: " attr(src) ")";
    display: block;
    font-size: 12px;
}
