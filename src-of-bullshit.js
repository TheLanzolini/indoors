const __0x1 =
  "d2UndmUgYmVlbiB0cnlpbmcgdG8gcmVhY2ggeW91IGFib3V0IHlvdXIgY2FyJ3MgZXh0ZW5kZWQgd2FycmFudHk=";
const GIVE_BACK_HALLELLUJAH = "https://www.youtube.com/embed/GM205iK6rlg";
const SOOTH = "https://www.youtube.com/embed/5qap5aO4i9A";
const METAL = "https://www.youtube.com/embed/wPSWsz2R6Xc";
const EMAIL_SUPPORT =
  "mailto:support@lanzo.tv?subject=I%20need%20help%20with%20inddors!&body=Please%20tell%20me%20the%20answer%20I%20do%20not%20know%20how%20to%20make%20progress%20in%20this%20%22game%22%20if%20you%20can%20even%20call%20it%20that.%20I%20probably%20have%20spent%20less%20than%205%20minutes%20trying%20shit%20and%20now%20since%20the%20digital%20information%20age%20has%20destroyed%20my%20natural%20ability%20to%20be%20patient%2C%20I%20need%20the%20gratification%20now%20or%20I%20will%20stop%20playing%20your%20game.";

const LENS_WIDTH = 900;
const LENS_HEIGHT = 600;
let TARGET_FPS = 60;

const LENS_MID_W = LENS_WIDTH / 2;
const LENS_MID_H = LENS_HEIGHT / 2;

const destroyYoutube = () => {
  document.getElementById("embedded-joke") &&
    document.body.removeChild(document.getElementById("embedded-joke"));
};

const playYoutubeUrl = (url) => {
  destroyYoutube();
  const $e = document.createElement("div");
  $e.id = "embedded-joke";
  const $iframe = document.createElement("iframe");
  $iframe.width = 560;
  $iframe.height = 315;
  $iframe.src = `${url}?autoplay=1`;
  $iframe.title = "YouTube video player";
  $iframe.setAttribute("frameborder", "0");
  $iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  );
  $iframe.setAttribute("allowfullscreen", "");
  $e.appendChild($iframe);
  document.body.appendChild($e);
};

const showPanhandle = () => {
  if (document.getElementById("just-the-tip")) return;
  const $i = new Image();
  $i.id = "just-the-tip";
  $i.src = "tipping-is-wage-theft.png";
  document.body.appendChild($i);
};

const hidePanhandle = () => {
  document.getElementById("just-the-tip") &&
    document.body.removeChild(document.getElementById("just-the-tip"));
};

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
  let bulletTimeout = null;
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

  const reason = () => {
    console.log("reason");
  };

  const run = () => {
    console.log("run");
  };

  const replicate = () => {
    console.log("replicate");
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

    const $fpsInput = document.getElementById("fps-input");
    $fpsInput.value = TARGET_FPS;
    const onFpsInput = (e) => {
      TARGET_FPS = Number(e.target.value);
    };

    $fpsInput.addEventListener("input", onFpsInput);

    const $mudaInput = document.getElementById("muda-input");
    const onMudaInput = (e) => {
      MUDA_MUDA_god_mode = e.target.checked;
    };
    $mudaInput.addEventListener("input", onMudaInput);
  };

  const KEYBINDS = {
    _removeAllBut: (key) => {
      Object.keys(KEYBINDS).forEach((k) => {
        if (k !== key && !k.includes("_")) {
          delete KEYBINDS[k];
        }
      });
    },
    _deleteSeries: (keys) => {
      keys.forEach((k) => {
        delete KEYBINDS[k];
      });
    },
    _KeyLToggled: false,
    _KeyHToggled: false,
    _KeyCToggled: false,
    _Digit4Toggled: false,
    KeyL: () => {
      KEYBINDS._KeyLToggled = !KEYBINDS._KeyLToggled;
      if (KEYBINDS._KeyLToggled) {
        KEYBINDS["KeyC"] = () => {
          KEYBINDS._KeyCToggled = !KEYBINDS._KeyCToggled;
          if (KEYBINDS._KeyCToggled) {
            document.getElementById("controls").classList.remove("hidden");
            KEYBINDS["Digit1"] = () => {
              reason();
            };
            KEYBINDS["Digit2"] = () => {
              run();
            };
            KEYBINDS["Digit3"] = () => {
              replicate();
            };
            KEYBINDS["Digit4"] = () => {
              // runDiagnostic();
              KEYBINDS._Digit4Toggled = !KEYBINDS._Digit4Toggled;
              if (KEYBINDS._Digit4Toggled) {
                document
                  .getElementById("diagnostic")
                  .classList.remove("hidden");
                KEYBINDS["KeyF"] = () => {
                  fpsEnabled = !fpsEnabled;
                };
                KEYBINDS["KeyW"] = () => {
                  window.open("https://www.linkedin.com/in/alex-lanzoni/");
                };
                KEYBINDS["KeyH"] = () => {
                  window.open(
                    "https://media3.giphy.com/media/5xaOcLCp8sxC25mCwec/giphy.gif"
                  );
                };
                KEYBINDS["KeyU"] = () => {
                  window.open(
                    "https://letmegooglethat.com/?q=how+to+sue+a+stranger+for+wasting+my+time"
                  );
                };
              } else {
                document.getElementById("diagnostic").classList.add("hidden");
                KEYBINDS._deleteSeries(["KeyF"]);
              }
            };
          } else {
            document.getElementById("controls").classList.add("remove");
          }
        };
        KEYBINDS["KeyH"] = () => {
          KEYBINDS._KeyHToggled = !KEYBINDS._KeyHToggled;
          if (KEYBINDS._KeyHToggled) {
            document.getElementById("help").classList.remove("hidden");
            KEYBINDS["KeyG"] = () => {
              playYoutubeUrl(GIVE_BACK_HALLELLUJAH);
            };
            KEYBINDS["KeyM"] = () => {
              playYoutubeUrl(SOOTH);
            };
            KEYBINDS["KeyD"] = () => {
              playYoutubeUrl(METAL);
            };
            KEYBINDS["KeyO"] = () => {
              showPanhandle();
            };
            KEYBINDS["KeyE"] = () => {
              window.open(EMAIL_SUPPORT);
            };
          } else {
            KEYBINDS._deleteSeries(["KeyG", "KeyM", "KeyD", "KeyO", "KeyE"]);
            hidePanhandle();
            document.getElementById("help").classList.add("hidden");
          }
        };
        KEYBINDS["KeyR"] = () => {
          reset();
        };
        KEYBINDS["KeyT"] = () => {
          console.log("hit t");
        };
        document.getElementById("legend").classList.remove("hidden");
      } else {
        KEYBINDS._removeAllBut("KeyL");
        document.getElementById("legend").classList.add("hidden");
        document.getElementById("help").classList.add("hidden");
        destroyYoutube();
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

  fpsInterval = 1000 / TARGET_FPS;
  then = Date.now();
  startTime = then;

  const amIReallyDoingThis = () => {
    if (!bail) w.requestAnimationFrame(amIReallyDoingThis);
    fpsInterval = 1000 / TARGET_FPS;
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
    if (!bail) bulletTimeout = setTimeout(goBulletGo, 1000 / bps);
  };

  bulletTimeout = setTimeout(goBulletGo, 1000 / bps);

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
    clearTimeout(bulletTimeout);
    bulletTimeout = setTimeout(goBulletGo, 1000 / bps);
    amIReallyDoingThis();
  };
})(window);
