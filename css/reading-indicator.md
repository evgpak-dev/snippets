```css
html {
    scroll-timeline: --page-scroll y;
}

.progress {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: green;
    
    transform-origin: 0 50%;
    animation-name: progress;
    animation-timing-function: linear;
    animation-duration: auto;
    animation-timeline: --page-scroll;
}

@keyframes progress {
    from {
        transform: scaleX(0);
    }
    
    to {
        transform: scaleX(1);
    }
}
