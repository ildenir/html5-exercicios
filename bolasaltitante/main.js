// -*- mode:js; indent-tabs-mode:nil; c-basic-offset:4 -*-
// Implementacao exercicio Bola Saltitante do cap.03
// Livro : Meyer, J.; O guia essencial do HTML5.
(function () {
    var ball = {
        x : 50,
        y : 60,
        rad : 10,
        vx : 18,
        vy : 18
    };

    var box = {
        x : 20,
        y : 30,
        w : 350,
        h : 250
    };

    var ctx;

    function update() {

        var bmin = [box.x + ball.rad, box.y + ball.rad];
        var bmax = [box.x + box.w - ball.rad,
                    box.y + box.h - ball.rad];
        var npt = [ball.x + ball.vx, ball.y + ball.vy];

        if (npt[0] > bmax[0]) {
            ball.vx = -ball.vx;
            npt[0] = bmax[0];
        }
        if (npt[0] < bmin[0]) {
            ball.vx = -ball.vx;
            npt[0] = bmin[0];
        }
        if (npt[1] > bmax[1]) {
            ball.vy = -ball.vy;
            npt[1] = bmax[1];
        }
        if (npt[1] < bmin[1]) {
            ball.vy = -ball.vy;
            npt[1] = bmin[1];
        }
        ball.x = npt[0];
        ball.y = npt[1];

        render();
    }

    function render() {
        ctx.clearRect(box.x, box.y, box.w, box.h);
        // Desenha bola
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.rad, 0, Math.PI*2.0, true);
        ctx.fill()
        // Desenha caixa
        ctx.strokeRect(box.x, box.y, box.w, box.h);
    }

    function alterarVelocidade() {
        var ivx = document.querySelector("#vx");
        var ivy = document.querySelector("#vy");
        ball.vx = parseInt(ivx.value);
        ball.vy = parseInt(ivy.value);
    }

    function onLoad() {
        var changeBtn = document.querySelector("#change");
        changeBtn.addEventListener("click", alterarVelocidade, false);
        var canvas = document.querySelector("canvas");
        ctx = canvas.getContext("2d");
        setInterval(update, 100);
    }

    window.addEventListener("load", onLoad, false);
}());
