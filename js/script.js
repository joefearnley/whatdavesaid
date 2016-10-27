
document.querySelectorAll('button.clip')
    .forEach(function(el) {
        el.addEventListener('click', function() {
            var fileName = '/audio/' + this.getAttribute('data-file') + '.mp3';
            var clip = new Audio(fileName);
            clip.play();
        });
    });
