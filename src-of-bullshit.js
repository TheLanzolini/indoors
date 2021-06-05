const __0x1 =
  "d2UndmUgYmVlbiB0cnlpbmcgdG8gcmVhY2ggeW91IGFib3V0IHlvdXIgY2FyJ3MgZXh0ZW5kZWQgd2FycmFudHk=";
const GIVE_BACK_HALLELLUJAH = `<iframe width="560" height="315" src="https://www.youtube.com/embed/GM205iK6rlg?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

const LENS_WIDTH = 900;
const LENS_HEIGHT = 600;
const TARGET_FPS = 60;

const LENS_MID_W = LENS_WIDTH / 2;
const LENS_MID_H = LENS_HEIGHT / 2;

((w) => {
  const $c = document.getElementById(
    "myopic-lens-of-my-own-self-actualization"
  );
  let DEFAULT_LIFE_COUNTER = 1;
  let bail = false;
  let frames = 0;
  let fps = 0;
  let fpsEnabled = false;
  let startTime, now, then, elapsed;
  let bulletWidth = 3;
  let paintYou = true;
  let lives = DEFAULT_LIFE_COUNTER;
  let MUDA_MUDA_god_mode = false;
  let shots = 0;
  let backgroundColor = "#000000";
  let nhozz = 1;
  let nozzle = MUDA_MUDA_god_mode ? 0.25 : nhozz;
  window.$c = $c;
  $c.width = LENS_WIDTH;
  $c.height = LENS_HEIGHT;
  const ctx = $c.getContext("2d");
  let bullets = [];
  let bps = 0.2;

  const paintItBlack = () => {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, LENS_WIDTH, LENS_HEIGHT);
    ctx.fillStyle = "white";
    ctx.font = "16px Courier New";
    if (fpsEnabled) ctx.fillText(`FPS: ${fps}`, 50, 50);
    ctx.fillStyle = "black";
    ctx.fillText(atob(__0x1), 100, 100);
    ctx.fillStyle = "white";
  };

  // not a gun that paints, we're painting the gun
  const paintGun = () => {
    const gunW = 50;
    const gunH = 50;
    ctx.strokeStyle = "silver";
    ctx.lineWidth = 3;
    ctx.strokeRect(LENS_MID_W - 25, 10, gunW, gunH);
    ctx.fillStyle = "silver";
    ctx.font = "24px Courier New";
    ctx.textAlign = "center";
    ctx.fillText("GUN", LENS_MID_W, 42);
  };

  const playerInfo = {
    x: LENS_MID_W,
    y: LENS_HEIGHT - 50,
    width: 25,
    height: 25,
  };

  const paintPlayer = () => {
    ctx.fillStyle = "blue";
    ctx.fillRect(
      LENS_MID_W - playerInfo.width / 2,
      LENS_HEIGHT - playerInfo.height - 25,
      playerInfo.width,
      playerInfo.height
    );
    ctx.lineWidth = 2;
    ctx.strokeRect(
      LENS_MID_W - playerInfo.width / 2,
      LENS_HEIGHT - playerInfo.height - 25,
      playerInfo.width,
      playerInfo.height
    );
    if (paintYou) {
      ctx.fillStyle = "red";
      ctx.font = "30px Courier New";
      ctx.textAlign = "center";
      ctx.fillText("YOU", LENS_MID_W, LENS_HEIGHT - 75);
    }
  };

  class Bullet {
    constructor(x, y, d, xSpeed, ySpeed) {
      this.x = x;
      this.y = y;
      this.d = d;
      this.width = bulletWidth;
      this.height = 5;
      this.ySpeed = ySpeed || 5; // 5 per tick
      this.color = "white";
      this.hit = false;

      // i had to do math for this next time im using a library
      const h = this.ySpeed / Math.cos((this.d * Math.PI) / 180);
      // also had to relearn wtf a radian was.

      this.xSpeed =
        Math.sqrt(
          Math.pow(this.ySpeed / Math.cos(d), 2) - Math.pow(this.ySpeed, 2)
        ) * (this.d < 0 ? -1 : 1);
    }

    paint() {
      ctx.fillStyle = "white";

      this.y = this.y + this.ySpeed;
      this.x = this.x + this.xSpeed;

      if (
        this.x < playerInfo.x + playerInfo.width &&
        this.x + this.width > playerInfo.x &&
        this.y < playerInfo.y + playerInfo.height &&
        this.y + this.height > playerInfo.y &&
        !this.hit
      ) {
        this.color = "red";
        this.xSpeed = 0.2;
        this.ySpeed = 0;
        this.hit = true;
        lives--;
      }
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  const paintBullets = () => {
    for (let i = 0; i < bullets.length; i++) {
      const b = bullets[i];
      b.paint();
      if (b.y > LENS_HEIGHT) {
        bullets.splice(i, 1);
        i--;
      }
    }
  };

  const paintLives = () => {
    ctx.fillStyle = "red";
    ctx.font = "24px Courier New";
    ctx.textAlign = "left";
    ctx.fillText(`Lives: ${lives}`, LENS_WIDTH - 130, LENS_HEIGHT - 20);
  };

  const paintGameOver = () => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, LENS_WIDTH, LENS_HEIGHT);
    ctx.fillStyle = "red";
    ctx.font = "52px Courier New";
    ctx.textAlign = "center";
    ctx.fillText("GAME\nOVER", LENS_MID_W, LENS_MID_H);
  };

  const paintShotsCounter = () => {
    ctx.fillStyle = "silver";
    ctx.font = "18px Courier New";
    ctx.textAlign = "left";
    ctx.fillText(`Shots: ${shots}`, LENS_MID_W + 40, 20);
  };

  const paintLegend = () => {
    ctx.fillStyle = "white";
    ctx.font = "22px ZCOOL KuaiLe";
    ctx.textAlign = "left";
    ctx.fillText(`L = Legend`, 20, LENS_HEIGHT - 20);
  };

  const openAdmin = () => {
    const $admin = document.getElementById("admin");
    $admin.classList.remove("hidden");
    const $colorInput = document.getElementById("color-input");
    const onColorInput = (e) => {
      backgroundColor = e.target.value;
    };
    $colorInput.addEventListener("input", onColorInput);

    const $shotsInput = document.getElementById("shots-input");
    $shotsInput.value = bulletWidth;
    const onShotsInput = (e) => {
      bulletWidth = e.target.value;
    };
    $shotsInput.addEventListener("input", onShotsInput);

    const $bpsInput = document.getElementById("bps-input");
    $bpsInput.value = bps;
    const onBpsInput = (e) => {
      bps = Number(e.target.value);
    };
    $bpsInput.addEventListener("input", onBpsInput);

    const $mudaInput = document.getElementById("muda-input");
    const onMudaInput = (e) => {
      MUDA_MUDA_god_mode = e.target.checked;
    };
    $mudaInput.addEventListener("input", onMudaInput);
  };

  const KEYBINDS = {
    _KeyLToggled: false,

    KeyL: () => {
      KEYBINDS._KeyLToggled = !KEYBINDS._KeyLToggled;
      if (KEYBINDS._KeyLToggled) {
        KEYBINDS["KeyC"] = () => {
          console.log("hit c");
        };
        KEYBINDS["KeyH"] = () => {
          console.log("hit h");
          document.getElementById("help").classList.remove("hidden");
          KEYBINDS["KeyG"] = () => {
            const $e = document.createElement("div");
            $e.id = "give-back";
            $e.innerHTML = GIVE_BACK_HALLELLUJAH;
            document.body.appendChild($e);
          };
        };
        KEYBINDS["KeyR"] = () => {
          console.log("hit r");
          reset();
        };
        KEYBINDS["KeyT"] = () => {
          console.log("hit t");
        };
        document.getElementById("legend").classList.remove("hidden");
      } else {
        delete KEYBINDS["KeyC"];
        delete KEYBINDS["KeyH"];
        delete KEYBINDS["KeyR"];
        delete KEYBINDS["KeyT"];
        document.getElementById("legend").classList.add("hidden");
        document.getElementById("help").classList.add("hidden");
        document.getElementById("give-back") &&
          document.body.removeChild(document.getElementById("give-back"));
      }
    },
    Backquote: () => {
      openAdmin();
    },
  };

  w.addEventListener("keydown", (e) => {
    if (KEYBINDS[e.code]) {
      KEYBINDS[e.code]();
    } else {
      console.log("miss", e.code);
    }
    console.log(KEYBINDS);
  });

  const mainSourceOfOurProblems = () => {
    paintItBlack();
    paintGun();
    paintLives();
    paintBullets();
    paintPlayer();
    paintShotsCounter();
    paintLegend();
    if (lives < 0 || lives > 3) {
      paintGameOver();
      bail = true;
    }
  };

  const fpsInterval = 1000 / TARGET_FPS;
  then = Date.now();
  startTime = then;

  const amIReallyDoingThis = () => {
    if (!bail) w.requestAnimationFrame(amIReallyDoingThis);

    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
      frames += 1;
      then = now - (elapsed % fpsInterval);
      mainSourceOfOurProblems();
    }
  };

  setInterval(() => {
    fps = frames;
    frames = 0;
  }, 1000);

  const goBulletGo = () => {
    const sign = Math.round(Math.random()) ? 1 : -1;
    const rngesus =
      Math.random() * nozzle * sign + (MUDA_MUDA_god_mode ? 0.066 : 0) * sign;
    const bullet = new Bullet(LENS_MID_W, 60, rngesus);
    shots++;
    bullets.push(bullet);
    bps += MUDA_MUDA_god_mode ? 10 : 0.025;
    console.log("bps", bps);
    if (!bail) setTimeout(goBulletGo, 1000 / bps);
  };

  setTimeout(goBulletGo, 1000 / bps);

  setTimeout(() => {
    paintYou = false;
  }, 5000);

  amIReallyDoingThis();

  const reset = () => {
    lives = DEFAULT_LIFE_COUNTER;
    bail = false;
    bps = 0.2;
    shots = 0;
    bullets = [];
    setTimeout(goBulletGo, 1000 / bps);
    amIReallyDoingThis();
  };
})(window);
