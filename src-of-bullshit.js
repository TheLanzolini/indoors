const __0x1 =
  "d2UndmUgYmVlbiB0cnlpbmcgdG8gcmVhY2ggeW91IGFib3V0IHlvdXIgY2FyJ3MgZXh0ZW5kZWQgd2FycmFudHk=";
const GIVE_BACK_HALLELLUJAH = "https://www.youtube.com/embed/GM205iK6rlg";
const SOOTH = "https://www.youtube.com/embed/5qap5aO4i9A";
const METAL = "https://www.youtube.com/embed/wPSWsz2R6Xc";
const COLE_TRAIN_I_GET_IT_NOW_OMG = "https://www.youtube.com/embed/yPk1LtESE-U";
const EMAIL_SUPPORT =
  "mailto:support@lanzo.tv?subject=I%20need%20help%20with%20indoors!&body=Please%20tell%20me%20the%20answer%20I%20do%20not%20know%20how%20to%20make%20progress%20in%20this%20%22game%22%20if%20you%20can%20even%20call%20it%20that.%20I%20probably%20have%20spent%20less%20than%205%20minutes%20trying%20shit%20and%20now%20since%20the%20digital%20information%20age%20has%20destroyed%20my%20natural%20ability%20to%20be%20patient%2C%20I%20need%20the%20gratification%20now%20or%20I%20will%20stop%20playing%20your%20game.";

const __1x0 = {
  "Rg==": "eW91IGRpZCBpdA==",
  "ZnVjayB5b3U=": "aGV5IGZ1Y2sgeW91IGJ1ZGR5",
  aG93IGRvIGkgd2lu: "aSdtIG5vdCBnb2luZyB0byBnaXZlIGl0IGF3YXk=",
  "aGVsbG8=": "aGV5",
  "aGVscA==": "bm8=",
  "aSBhbSBnb2luZyB0byBraWxsIG15c2VsZg==":
    "bm8gZG9uJ3QsIHBsZWFzZSByZWFjaCBvdXQgdG8gc29tZW9uZSB3aG8gbG92ZXMgeW91",
  "aSBoYXRlIHRoaXM=": "c2FtZQ==",
  "aSdtIGRlcHJlc3NlZA==":
    "bWVlIHRvbywgd2UgY2FuIGdldCB0aHJvdWdoIGl0IHRvZ2V0aGVyIGlmIHdlIHRyeS4=",
  aSdtIGdvaW5nIHRvIGtpbGwgbXlzZWxm:
    "bm8gZG9uJ3QsIHBsZWFzZSByZWFjaCBvdXQgdG8gc29tZW9uZSB3aG8gbG92ZXMgeW91",
  bm8gb25lIGxvdmVzIG1l: "amVzdXMgbG92ZXMgeW91",
  cGxlYXNl: "d2l0aCBzdWdhciBvbiB0b3A/",
  eWVz: "bm8=",
  "Z2VlIGkgaG9wZSBzb21lb25lIGRvZXNuJ3QgZGVjb2RlIHRoaXM=":
    "d2hhdCBraW5kIG9mIHBlcnNvbiB3b3VsZCBnbyB0aHJvdWdoIHRoYXQga2luZCBvZiBlZmZvcnQ=",
  "aGV3d28=": "Z3Rmbw==",
  "aGk=": "c3Vw",
  dXd1: "Z3Jvc3M=",
  "c3RvcA==": "c3RvcCB3aGF0",
};

const encode = (c) =>
  Object.entries(c).reduce((acc, [k, v]) => {
    acc[btoa(k)] = btoa(v);
    return acc;
  }, {});

const __0x2 = "Z3VucyBjYW4ndCB0YWxrIGlkaW90";
const __0x3 = "Z3VucyBzdGlsbCBjYW4ndCB0YWxr";
const __0x4 = "Z3VucyBzdGlsbCBjYW4ndCB0YWxrIGlkaW90";
const __0x5 = "ZnVjayB5b3Ugc3RvcCBjYWxsaW5n";
const __0x6 = "Y29uZ3JhdHVsYXRpb25z";

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

const main = (w, $c) => {
  let DEFAULT_LIFE_COUNTER = 1;
  let bail = false;
  let frames = 0;
  let fps = 0;
  let fpsEnabled = false;
  let startTime, now, then, elapsed;
  let reasonEnabled = false;
  let messages = 0;
  let reasonTimeout = null;
  let keybindsDisabled = false;
  let currentMessage = "";
  let reasons = 0;
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

  class Bullet {
    constructor(x, y, d, xSpeed, ySpeed) {
      this.x = x;
      this.y = y;
      this.d = d;
      this.width = bulletWidth;
      this.height = 5;
      this.ySpeed = ySpeed ?? 5; // 5 per tick
      this.color = "white";
      this.hit = false;

      // i had to do math for this next time im using a library
      const h = this.ySpeed / Math.cos((this.d * Math.PI) / 180);
      // also had to relearn wtf a radian was.

      this.xSpeed =
        xSpeed ||
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

  const $colorInput = document.getElementById("color-input");
  const onColorInput = (e) => {
    console.log("asd");
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

  const $chatInput = document.getElementById("chat-input");
  const onChatInput = (e) => {
    currentMessage = e.target.value;
  };

  $chatInput.addEventListener("input", onChatInput);

  const onChatFocus = (e) => {
    keybindsDisabled = true;
  };

  $chatInput.addEventListener("focus", onChatFocus);

  const onChatBlur = (e) => {
    keybindsDisabled = false;
  };

  $chatInput.addEventListener("blur", onChatBlur);

  const quarterLifeCrisis = () => {
    const b = new Bullet(LENS_WIDTH, LENS_HEIGHT - 50, 0, -0.65, 0);
    bullets.push(b);
    playYoutubeUrl(COLE_TRAIN_I_GET_IT_NOW_OMG);
    setTimeout(() => {
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, LENS_WIDTH, LENS_HEIGHT);
      ctx.fillStyle = "green";
      ctx.textAlign = "center";
      ctx.font = "18px Courier New";
      ctx.fillText(atob(__0x6), LENS_MID_W, LENS_MID_H);
      bail = true;
      ctx.textAlign = "left";
    }, 10000);
  };

  const sendMessage = (msg) => {
    messages++;
    const $d = document.createElement("div");
    $d.textContent = `Me: ${msg}`;
    document.getElementById("chat-log").appendChild($d);
    if (__1x0[btoa(msg)]) {
      const $dd = document.createElement("div");
      $dd.textContent = `Game: ${atob(__1x0[btoa(msg)])}`;
      document.getElementById("chat-log").appendChild($dd);
    }
    if (messages > 7 && messages < 9) {
      const $dd = document.createElement("div");
      $dd.textContent = `Game: just so you know this thing has a limited number of responses its not a fucking ai`;
      document.getElementById("chat-log").appendChild($dd);
    }
    if (btoa(msg) === btoa("__F__".replace(/__/g, ""))) {
      quarterLifeCrisis();
    }
  };

  $chatInput.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      sendMessage(e.target.value);
      e.target.value = "";
    }
  });

  const paintItBlack = () => {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, LENS_WIDTH, LENS_HEIGHT);
    ctx.fillStyle = "white";
    ctx.font = "16px Courier New";
    if (fpsEnabled) ctx.fillText(`FPS: ${fps}`, LENS_WIDTH - 80, 20);
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
    x: LENS_MID_W - 12.5,
    y: LENS_HEIGHT - 50,
    width: 25,
    height: 25,
    ySpeed: 0,
  };

  const paintPlayer = () => {
    ctx.fillStyle = "blue";
    playerInfo.y = playerInfo.y + playerInfo.ySpeed;
    ctx.fillRect(
      playerInfo.x,
      playerInfo.y,
      playerInfo.width,
      playerInfo.height
    );
    ctx.lineWidth = 2;
    ctx.strokeRect(
      playerInfo.x,
      playerInfo.y,
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
    reasons++;
    reasonEnabled = true;
    clearTimeout(reasonTimeout);
    reasonTimeout = setTimeout(() => {
      reasonEnabled = false;
    }, 5000);
  };

  const run = () => {
    playerInfo.ySpeed = -0.2;
  };

  let ccc = 0;
  const replicate = () => {
    const $c = document.getElementById("container");
    const $cc = $c.cloneNode(true);
    $cc.id = `container-${ccc}`;
    document.querySelector("main").appendChild($cc);
    main(w, $cc.querySelector("canvas"));
    ccc++;
  };

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
  };

  const closeAdmin = () => {
    const $admin = document.getElementById("admin");
    $admin.classList.add("hidden");
  };

  const KEYBINDS = {
    _removeAllBut: (...keys) => {
      Object.keys(KEYBINDS).forEach((k) => {
        if (!keys.includes(k) && !k.includes("_")) {
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
    _BackquoteToggled: false,
    _KeyTToggled: false,
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
              window.open(window.location);
            };
            KEYBINDS["Digit4"] = () => {
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
                KEYBINDS["KeyY"] = () => {
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
            document.getElementById("controls").classList.add("hidden");
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
          KEYBINDS._KeyTToggled = !KEYBINDS._KeyTToggled;
          if (KEYBINDS._KeyTToggled) {
            document.getElementById("chat").classList.remove("hidden");
          } else {
            document.getElementById("chat").classList.add("hidden");
          }
        };
        document.getElementById("legend").classList.remove("hidden");
      } else {
        KEYBINDS._removeAllBut("KeyL", "Backquote");
        document.getElementById("legend").classList.add("hidden");
        document.getElementById("help").classList.add("hidden");
        destroyYoutube();
      }
    },
    Backquote: () => {
      KEYBINDS._BackquoteToggled = !KEYBINDS._BackquoteToggled;
      if (KEYBINDS._BackquoteToggled) {
        openAdmin();
      } else {
        closeAdmin();
      }
    },
  };

  w.addEventListener("keydown", (e) => {
    if (KEYBINDS[e.code] && !keybindsDisabled) {
      KEYBINDS[e.code]();
    } else {
      console.log("miss", e.code);
    }
    console.log(KEYBINDS);
  });

  const paintReason = () => {
    if (!reasonEnabled) return;
    ctx.fillStyle = "silver";
    ctx.font = "28px Courier New";
    console.log(reasons);
    if (reasons > 3 && reasons <= 10) {
      ctx.fillText(atob(__0x3), LENS_MID_W, 200);
    } else if (reasons > 10 && reasons <= 20) {
      ctx.fillText(atob(__0x4), LENS_MID_W, 200);
    } else if (reasons > 20) {
      ctx.fillText(atob(__0x5), LENS_MID_W, 200);
    } else {
      ctx.fillText(atob(__0x2), LENS_MID_W, 200);
    }
  };

  const mainSourceOfOurProblems = () => {
    paintItBlack();
    paintGun();
    paintLives();
    paintBullets();
    paintPlayer();
    paintShotsCounter();
    paintLegend();
    paintReason();
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
    playerInfo.ySpeed = 0;
    playerInfo.y = LENS_HEIGHT - 50;
    shots = 0;
    bullets = [];
    clearTimeout(bulletTimeout);
    bulletTimeout = setTimeout(goBulletGo, 1000 / bps);
    amIReallyDoingThis();
  };
};

const $c = document.getElementById("myopic-lens-of-my-own-self-actualization");

main(window, $c);
