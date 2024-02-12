const app = document.getElementById('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay:75
});

typewriter
 .typeString('del suelo como los arboles')
 .pauseFor(200)
 .start();