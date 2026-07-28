/*=========================================================
    FILE : script.js
    PROJECT : Birthday Surprise For Mubashra
    PART : 1

    FEATURES

    ✔ Loading Screen
    ✔ Gift Drop
    ✔ Gift Open
    ✔ Birthday Song
    ✔ Screen Navigation
=========================================================*/


/*=========================================================
                    HTML ELEMENTS
=========================================================*/

const loadingScreen = document.getElementById("loadingScreen");

const birthdaySong = document.getElementById("birthdaySong");

const finalSong = document.getElementById("finalSong");

const giftBox = document.getElementById("giftBox");

const fireworksCanvas = document.getElementById("fireworksCanvas");


const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");
const screen5 = document.getElementById("screen5");
const screen6 = document.getElementById("screen6");
const screen7 = document.getElementById("screen7");
const screen8 = document.getElementById("screen8");


const nextOne = document.getElementById("nextOne");
const nextTwo = document.getElementById("nextTwo");
const nextThree = document.getElementById("nextThree");
const nextFour = document.getElementById("nextFour");
const nextFive = document.getElementById("nextFive");

const restartBtn = document.getElementById("restartBtn");

const openLetter = document.getElementById("openLetter");

const envelope = document.getElementById("envelope");


/*=========================================================
                LOADING SCREEN
=========================================================*/

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loadingScreen.style.opacity="0";

        setTimeout(()=>{

            loadingScreen.style.display="none";

            startIntro();

        },1000);

    },2500);

});


/*=========================================================
                WEBSITE INTRO
=========================================================*/

function startIntro(){

    if(birthdaySong){

        birthdaySong.volume=0.50;

        birthdaySong.play().catch(()=>{});

    }

    giftBox.style.opacity="0";

    giftBox.style.transform=

    "translate(-50%,-500px) scale(.4)";

    setTimeout(dropGift,300);

}


/*=========================================================
                GIFT DROP
=========================================================*/

function dropGift(){

    giftBox.style.transition=

    "2s cubic-bezier(.17,.89,.32,1.35)";

    giftBox.style.opacity="1";

    giftBox.style.transform=

    "translate(-50%,0) scale(1)";

    setTimeout(shakeGift,2200);

}


/*=========================================================
                GIFT SHAKE
=========================================================*/

function shakeGift(){

    giftBox.animate(

        [

            {

                transform:

                "translate(-50%,0) rotate(0deg)"

            },

            {

                transform:

                "translate(-50%,0) rotate(-5deg)"

            },

            {

                transform:

                "translate(-50%,0) rotate(5deg)"

            },

            {

                transform:

                "translate(-50%,0) rotate(0deg)"

            }

        ],

        {

            duration:500,

            iterations:4

        }

    );

}


/*=========================================================
                OPEN GIFT
=========================================================*/

giftBox.addEventListener("click",()=>{giftBox.addEventListener("click",()=>{

    // 🎵 Start Birthday Song
    if (birthdaySong) {

        birthdaySong.volume = 0.5;

        birthdaySong.play().catch(error => {

            console.log("Audio blocked:", error);

        });

    }

    giftBox.classList.add("open");

    createSmoke();

    createMagicParticles();

    createGoldenBurst();

    setTimeout(()=>{

        changeScreen(screen1,screen2);

        startFireworks();

        createHearts();

        createFlowers();

        createBalloons();

        createButterflies();

        createSparkles();

    },1700);

});

    giftBox.classList.add("open");

    createSmoke();

    createMagicParticles();

    createGoldenBurst();

    setTimeout(()=>{

        changeScreen(screen1,screen2);

        startFireworks();

        createHearts();

        createFlowers();

        createBalloons();

        createButterflies();

        createSparkles();

    },1700);

});


/*=========================================================
                SCREEN CHANGE
=========================================================*/

function changeScreen(hide,show){

    hide.classList.remove("active");

    show.classList.add("active");

}


/*=========================================================
                NEXT BUTTONS
=========================================================*/

nextOne.addEventListener("click",()=>{

    changeScreen(screen2,screen3);

});


nextTwo.addEventListener("click",()=>{

    changeScreen(screen3,screen4);

});


openLetter.addEventListener("click",()=>{

    envelope.classList.add("open");

    setTimeout(()=>{

        changeScreen(screen4,screen5);

        startTyping();

    },1200);

});


nextThree.addEventListener("click",()=>{

    changeScreen(screen5,screen6);

});


nextFour.addEventListener("click",()=>{

    changeScreen(screen6,screen7);

});


nextFive.addEventListener("click",()=>{

    birthdaySong.pause();

    birthdaySong.currentTime=0;

    finalSong.play().catch(()=>{});

    changeScreen(screen7,screen8);

});


restartBtn.addEventListener("click",()=>{

    location.reload();

});


/*=========================================================
            PART 2 STARTS HERE

✔ 500 Natural Stars
✔ White Moon Animation
✔ Moving Clouds
✔ Shooting Stars
✔ Magic Particles
✔ Smoke
✔ Golden Burst
=========================================================*/
/*=========================================================
    FILE : script.js
    PROJECT : Birthday Surprise For Mubashra
    PART : 2

    ✔ Natural White Moon
    ✔ 500 Random Stars
    ✔ Moving Clouds
    ✔ Shooting Stars
    ✔ Smoke Effect
    ✔ Magic Particles
    ✔ Golden Burst
=========================================================*/


/*=========================================================
                CREATE STARS
=========================================================*/

function createStars(){

    const stars = document.getElementById("stars");

    if(!stars) return;

    for(let i=0;i<500;i++){

        const star=document.createElement("div");

        star.className="star";

        const size=(Math.random()*3)+1;

        star.style.width=size+"px";
        star.style.height=size+"px";

        star.style.left=Math.random()*100+"%";
        star.style.top=Math.random()*100+"%";

        star.style.opacity=Math.random();

        star.style.animationDelay=
        Math.random()*5+"s";

        star.style.animationDuration=
        (2+Math.random()*5)+"s";

        stars.appendChild(star);

    }

}

createStars();


/*=========================================================
                CREATE CLOUDS
=========================================================*/

function createClouds(){

    const cloudArea=document.getElementById("clouds");

    if(!cloudArea) return;

    for(let i=0;i<6;i++){

        const cloud=document.createElement("div");

        cloud.className="cloud";

        cloud.style.top=
        (30+(i*60))+"px";

        cloud.style.animationDelay=
        (-15*i)+"s";

        cloud.style.opacity=
        0.15+Math.random()*0.15;

        cloudArea.appendChild(cloud);

    }

}

createClouds();


/*=========================================================
                SHOOTING STARS
=========================================================*/

function shootingStars(){

    const area=document.getElementById("shootingStars");

    if(!area) return;

    setInterval(()=>{

        const star=document.createElement("div");

        star.style.position="absolute";
        star.style.width="180px";
        star.style.height="2px";

        star.style.background=
        "linear-gradient(to right,white,transparent)";

        star.style.left=
        (60+Math.random()*35)+"%";

        star.style.top=
        Math.random()*35+"%";

        star.style.transform=
        "rotate(-35deg)";

        star.style.boxShadow=
        "0 0 20px white";

        star.style.animation=
        "shoot 2s linear forwards";

        area.appendChild(star);

        setTimeout(()=>{

            star.remove();

        },2000);

    },7000);

}

shootingStars();


/*=========================================================
            SHOOTING STAR KEYFRAME
=========================================================*/

const shootStyle=document.createElement("style");

shootStyle.innerHTML=`

@keyframes shoot{

0%{

transform:
translate(0,0)
rotate(-35deg);

opacity:1;

}

100%{

transform:
translate(-700px,450px)
rotate(-35deg);

opacity:0;

}

}`;

document.head.appendChild(shootStyle);


/*=========================================================
                SMOKE EFFECT
=========================================================*/

function createSmoke(){

    const layer=document.getElementById("smokeLayer");

    if(!layer) return;

    for(let i=0;i<18;i++){

        setTimeout(()=>{

            const smoke=document.createElement("div");

            smoke.className="smoke";

            smoke.style.left=
            (45+Math.random()*10)+"%";

            smoke.style.bottom="220px";

            layer.appendChild(smoke);

            setTimeout(()=>{

                smoke.remove();

            },6000);

        },i*120);

    }

}


/*=========================================================
            MAGIC PARTICLES
=========================================================*/

function createMagicParticles(){

    const layer=document.getElementById("magicDust");

    if(!layer) return;

    for(let i=0;i<120;i++){

        setTimeout(()=>{

            const p=document.createElement("div");

            p.className="magicParticle";

            p.style.left=
            (45+Math.random()*10)+"%";

            p.style.bottom="180px";

            layer.appendChild(p);

            setTimeout(()=>{

                p.remove();

            },5000);

        },i*20);

    }

}


/*=========================================================
            GOLDEN BURST
=========================================================*/

function createGoldenBurst(){

    const layer=document.getElementById("goldParticles");

    if(!layer) return;

    for(let i=0;i<150;i++){

        setTimeout(()=>{

            const g=document.createElement("div");

            g.className="goldParticle";

            g.style.left="50%";
            g.style.top="50%";

            const angle=Math.random()*360;
            const distance=150+Math.random()*250;

            g.animate([

                {

                    transform:"translate(0,0)",
                    opacity:1

                },

                {

                    transform:

                    `translate(${Math.cos(angle*Math.PI/180)*distance}px,

                    ${Math.sin(angle*Math.PI/180)*distance}px)`,

                    opacity:0

                }

            ],{

                duration:2000,
                easing:"ease-out"

            });

            layer.appendChild(g);

            setTimeout(()=>{

                g.remove();

            },2000);

        },i*8);

    }

}


/*=========================================================
                PART 3

✔ Fireworks Engine
✔ Hearts
✔ Butterflies
✔ Balloons
✔ Flowers
✔ Rose Rain
✔ Typing Letter
✔ Final Celebration
=========================================================*/
/*=========================================================
    FILE : script.js
    PROJECT : Birthday Surprise For Mubashra
    PART : 3

    ✔ HD Fireworks
    ✔ Hearts
    ✔ Butterflies
    ✔ Balloons
    ✔ Flowers
    ✔ Rose Rain
    ✔ Typing Effect
=========================================================*/


/*=========================================================
                FIREWORKS ENGINE
=========================================================*/

function startFireworks(){

    const canvas=document.getElementById("fireworksCanvas");

    if(!canvas) return;

    const ctx=canvas.getContext("2d");

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    let particles=[];

    function explode(x,y){

        for(let i=0;i<80;i++){

            particles.push({

                x:x,
                y:y,

                angle:Math.random()*Math.PI*2,

                speed:Math.random()*6+2,

                radius:2,

                alpha:1,

                color:`hsl(${Math.random()*360},100%,60%)`

            });

        }

    }

    setInterval(()=>{

        explode(

            Math.random()*canvas.width,

            Math.random()*canvas.height*0.45

        );

    },900);


    function animate(){

        ctx.fillStyle="rgba(0,0,0,.15)";
        ctx.fillRect(0,0,canvas.width,canvas.height);

        particles.forEach((p,index)=>{

            p.x+=Math.cos(p.angle)*p.speed;
            p.y+=Math.sin(p.angle)*p.speed;

            p.speed*=0.98;

            p.alpha-=0.01;

            ctx.beginPath();

            ctx.arc(p.x,p.y,p.radius,0,Math.PI*2);

            ctx.fillStyle=p.color;

            ctx.globalAlpha=Math.max(p.alpha,0);

            ctx.fill();

            if(p.alpha<=0){

                particles.splice(index,1);

            }

        });

        ctx.globalAlpha=1;

        requestAnimationFrame(animate);

    }

    animate();

}


/*=========================================================
                HEARTS
=========================================================*/

function createHearts(){

    const layer=document.getElementById("heartLayer");

    if(!layer) return;

    setInterval(()=>{

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left=Math.random()*100+"%";

        layer.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },8000);

    },600);

}


/*=========================================================
                BUTTERFLIES
=========================================================*/

function createButterflies(){

    const layer=document.getElementById("butterflyLayer");

    if(!layer) return;

    setInterval(()=>{

        const b=document.createElement("div");

        b.className="butterfly";

        b.innerHTML="🦋";

        b.style.top=Math.random()*70+"%";

        layer.appendChild(b);

        setTimeout(()=>{

            b.remove();

        },15000);

    },5000);

}


/*=========================================================
                BALLOONS
=========================================================*/

function createBalloons(){

    const layer=document.getElementById("balloonLayer");

    if(!layer) return;

    const colors=["red","blue","green","yellow","purple"];

    setInterval(()=>{

        const balloon=document.createElement("div");

        balloon.className="balloon "+colors[Math.floor(Math.random()*colors.length)];

        balloon.style.left=Math.random()*100+"%";

        layer.appendChild(balloon);

        setTimeout(()=>{

            balloon.remove();

        },14000);

    },1800);

}


/*=========================================================
                FLOWERS
=========================================================*/

function createFlowers(){

    const layer=document.getElementById("flowerLayer");

    if(!layer) return;

    for(let i=0;i<40;i++){

        const flower=document.createElement("div");

        flower.innerHTML="🌸";

        flower.style.position="absolute";

        flower.style.left=Math.random()*100+"%";

        flower.style.top=Math.random()*100+"%";

        flower.style.fontSize=(20+Math.random()*20)+"px";

        flower.style.animation="spark 3s infinite";

        layer.appendChild(flower);

    }

}


/*=========================================================
                ROSE RAIN
=========================================================*/

function createRoseRain(){

    const layer=document.getElementById("roseRain");

    if(!layer) return;

    setInterval(()=>{

        const rose=document.createElement("div");

        rose.className="rose";

        rose.innerHTML="🌹";

        rose.style.left=Math.random()*100+"%";

        layer.appendChild(rose);

        setTimeout(()=>{

            rose.remove();

        },10000);

    },450);

}


/*=========================================================
                TYPING EFFECT
=========================================================*/

function startTyping() {
    const area = document.getElementById("typingMessage");
    if (!area) return;

    const message = `🤲 Happy Birthday! 🎂🤍

On your special day, my sincerest prayer is that Allah (SWT) showers your life with endless mercy, happiness, and barakah. 🤲✨ May He protect you from every sorrow, every hardship, and every evil, and replace them with peace, joy, and contentment. 🌸

May Allah grant you a heart that is always close to Him, a smile that never fades, and a life filled with beautiful moments and sincere people. 💖 May He bless you with good health, long life, halal rizq, success in every step you take, and make every dream that is good for you come true. 🌹

May your duas never go unanswered, your tears only be tears of happiness, and your heart always find comfort in Allah's remembrance. 🤍📿 May He strengthen your faith, forgive your shortcomings, guide you on the straight path, and make you among those whom He loves the most. 🌙✨

I pray that Allah writes for you a future more beautiful than you have ever imagined, fills your home with love and tranquility, and surrounds you with people who truly care for you. 🏡💐

Ameen Ya Rabbal Aalameen. 🤲❤️`;

    area.innerHTML = "";

    let i = 0;

    const timer = setInterval(() => {
        area.innerHTML += message.charAt(i);
        i++;

        if (i >= message.length) {
            clearInterval(timer);
        }
    }, 35);
}


/*=========================================================
                PART 4

✔ Final Song
✔ Final Celebration
✔ Replay
✔ Confetti
✔ Ending Effects
=========================================================*/
/*=========================================================
    FILE : script.js
    PROJECT : Birthday Surprise For Mubashra
    PART : 4 (FINAL)

    ✔ Final Song
    ✔ Confetti Rain
    ✔ Final Celebration
    ✔ Replay Button
    ✔ Window Resize
=========================================================*/


/*=========================================================
                CONFETTI
=========================================================*/

function createConfetti(){

    const layer=document.getElementById("confettiLayer");

    if(!layer) return;

    const colors=[
        "#ff4d6d",
        "#ffd43b",
        "#4dabf7",
        "#40c057",
        "#9775fa",
        "#ffffff"
    ];

    setInterval(()=>{

        const confetti=document.createElement("div");

        confetti.style.position="absolute";
        confetti.style.top="-20px";
        confetti.style.left=Math.random()*100+"%";

        confetti.style.width=(6+Math.random()*8)+"px";
        confetti.style.height=(8+Math.random()*12)+"px";

        confetti.style.background=
        colors[Math.floor(Math.random()*colors.length)];

        confetti.style.transform=
        `rotate(${Math.random()*360}deg)`;

        confetti.animate(

            [

                {
                    transform:"translateY(0) rotate(0deg)",
                    opacity:1
                },

                {
                    transform:
                    `translateY(${window.innerHeight+100}px)
                    rotate(${720+Math.random()*360}deg)`,

                    opacity:0
                }

            ],

            {

                duration:5000+Math.random()*3000,

                easing:"linear"

            }

        );

        layer.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },8000);

    },120);

}


/*=========================================================
            FINAL CELEBRATION
=========================================================*/

function finalCelebration(){

    createConfetti();

    createRoseRain();

    createHearts();

    createButterflies();

    createBalloons();

}


/*=========================================================
            FINAL BUTTON
=========================================================*/

nextFive.addEventListener("click",()=>{

    /* Stop Birthday Song */

    if(birthdaySong){

        birthdaySong.pause();

        birthdaySong.currentTime=0;

    }

    /* Start Personal Song */

    if(finalSong){

        finalSong.volume=0.7;

        finalSong.play().catch(()=>{});

    }

    changeScreen(screen7,screen8);

    finalCelebration();

});


/*=========================================================
            REPLAY BUTTON
=========================================================*/

restartBtn.addEventListener("click",()=>{

    location.reload();

});


/*=========================================================
            WINDOW RESIZE
=========================================================*/

window.addEventListener("resize",()=>{

    const canvas=document.getElementById("fireworksCanvas");

    if(canvas){

        canvas.width=window.innerWidth;

        canvas.height=window.innerHeight;

    }

});


/*=========================================================
            END MESSAGE
=========================================================*/

console.log("====================================");
console.log(" Birthday Surprise Loaded Successfully ");
console.log(" Happy Birthday Mubashra ❤️ ");
console.log("====================================");
