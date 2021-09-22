let box = document.querySelector('.box'),
    btn = document.querySelector('.btn'),
    rotate_btn = document.querySelector('.center_rotate');


function Animation() {
    let pos = 0;

    let id = setInterval(frame, 10);

    function frame() {
        if (pos == 340) {
            clearInterval(id);
        } else {
            pos++;
            box.style.top = pos + 'px';
            box.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', Animation);

let btnBlock = document.querySelector('.buttons_block'),
    btns = document.getElementsByTagName('button'),
    btnBlock2 = document.querySelector('.mt_n');

btnBlock.addEventListener('click', function (e) {
    if (e.target && e.target.matches('button.left')) {
        let pos = 0;
        let id = setInterval(frame, 10);

        function frame() {
            if (pos == 340) {
                clearInterval(id);
            } else {
                pos++;
                box.style.left = pos + 'px';
            }
        }
    };
    if (e.target && e.target.matches('button.down')) {
        let pos = 0;
        let id = setInterval(frame, 10);

        function frame() {
            if (pos == 340) {
                clearInterval(id);
            } else {
                pos++;
                box.style.top = pos + 'px';
            }
        }
    };
    if (e.target && e.target.matches('button.center')) {
        let pos = 0;
        let id = setInterval(frame, 10);

        function frame() {
            if (pos == 340) {
                clearInterval(id);
            } else {
                pos++;
                if (pos < 175) {
                    box.style.top = pos + 'px';
                    box.style.left = pos + 'px';
                }
            }
        }
    };
    if (e.target && e.target.matches('button.center_to')) {
        let pos = 0;
        let id = setInterval(frame, 10);

        function frame() {
            if (pos == 340) {
                clearInterval(id);
            } else {
                pos++;
                if (pos < 175) {
                    box.style.top = pos + 'px';
                    box.style.left = pos + 'px';
                } else {
                    box.style.top = pos + 'px';
                }
            }
        }
    };
});

btnBlock2.addEventListener('click', function (e) {
    if (e.target && e.target.matches('button.center_top')) {
        let posX = 0,
            posY = 0;
        let id = setInterval(frame, 10);

        function frame() {
            if (posX == 340 && posY == 0) {
                clearInterval(id);
            } else {
                if (posX < 175 && posY < 175) {
                    posY++;
                    posX++;
                    box.style.top = posY + 'px';
                    box.style.left = posX + 'px';
                } else if (posX >= 175 && posY != 0) {
                    posY--;
                    box.style.top = posY + 'px';
                }
            }
        }
    };
    if (e.target && e.target.matches('button.center_left')) {
        let posX = 0,
            posY = 0;
        let id = setInterval(frame, 10);

        function frame() {
            if (posX == 340 && posY == 0) {
                clearInterval(id);
            } else {
                if (posX < 175 && posY < 175) {
                    posY++;
                    posX++;
                    box.style.top = posY + 'px';
                    box.style.left = posX + 'px';
                } else if (posX != 0 && posY >= 175) {
                    posX--;
                    box.style.left = posX + 'px';
                }
            }
        }
    };
    if (e.target && e.target.matches('button.center_right')) {
        let posX = 0,
            posY = 0;
        let id = setInterval(frame, 10);

        function frame() {
            if (posX == 340 && posY == 0) {
                clearInterval(id);
            } else {
                if (posX < 175 && posY < 175) {
                    posY++;
                    posX++;
                    box.style.top = posY + 'px';
                    box.style.left = posX + 'px';
                } else if (posX != 340 && posY >= 175) {
                    posX++;
                    box.style.left = posX + 'px';
                }
            }
        }
    };
    if (e.target && e.target.matches('button.center_rotate')) {
        let pos = 0,
            deg = 360;
        let id = setInterval(frame, 10);

        function frame() {
            if (pos == 175) {
                box.style.background = 'green';
                clearInterval(id);
            } else {
                pos++;
                if (pos < 175) {
                    box.style.top = pos + 'px';
                    box.style.left = pos + 'px';
                }
            }
        }
    };
});

let butn = document.querySelector('.btn2');

butn.addEventListener('click', () => {
    box.style.top = 0;
    box.style.left = 0;
    box.style.background = 'rgb(44, 114, 194)';
});
