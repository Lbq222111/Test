const asset = (path) => encodeURI(path);

const assets = {
  backgrounds: {
    opening: asset("背景图片/开场背景.png"),
    door: asset("背景图片/敲门背景.png"),
  },
  sprites: {
    normal: asset("立绘/平常.png"),
    surprised: asset("立绘/惊讶.png"),
    angry: asset("立绘/生气.png"),
  },
  music: {
    opening: asset("音乐/开头音乐.mp3"),
    tense: asset("音乐/紧张音乐.mp3"),
    calm: asset("音乐/轻松音乐.mp3"),
  },
};

const uiCopy = {
  zh: {
    htmlLang: "zh-CN",
    documentTitle: "第七次敲门",
    spriteAlt: "角色立绘",
    titleEyebrow: "视觉小说",
    titleHeading: "第七次敲门",
    titleSummary: "那扇门始终没有回应。<br>可只要站在它面前，就会想把手再一次抬起来。",
    startButton: "开始",
    titleHint: "建议佩戴耳机。点击文本框或按空格、回车推进剧情。",
    advanceContinue: "点击继续",
    advanceTyping: "正在显示",
    advanceChoose: "做出选择",
  },
  en: {
    htmlLang: "en",
    documentTitle: "The Seventh Knock",
    spriteAlt: "Character portrait",
    titleEyebrow: "Visual Novel",
    titleHeading: "The Seventh Knock",
    titleSummary: "The door never answers.<br>And yet, the moment she stands before it, she wants to raise her hand one more time.",
    startButton: "Start",
    titleHint: "Headphones recommended. Click the dialogue box, or press Space / Enter to continue.",
    advanceContinue: "Continue",
    advanceTyping: "Displaying",
    advanceChoose: "Make a choice",
  },
};

const localizedEndings = {
  en: {
    seventhKnock: {
      eyebrow: "Ending A",
      title: "The Seventh Knock",
      summary: "The door finally opened. What waited beyond it was not an exit.",
      button: "Knock Again",
    },
    stillness: {
      eyebrow: "Ending B",
      title: "Still at the Threshold",
      summary: "She never raised her hand again. For the first time, the hall fell quiet, as if nothing had ever happened.",
      button: "Return to the Beginning",
    },
  },
};

const localizedScenes = {
  en: {
    intro_1: {
      text: (state) => (
        state.loopCount === 0
          ? "When she wakes, she is already standing in the center of the hall.\nThe vaulted ceiling rises so high it feels unreal, and the cold climbs slowly off the stone beneath her feet.\nThe place is too quiet, as if no one has come here for a very long time."
          : `She wakes once more in the center of the hall.\nThe ceiling, the cold, the hollow echo, all of it exactly as before.\nThis is the ${formatOrdinal(state.loopCount + 1)} time.`
      ),
    },
    intro_2: {
      text: (state) => (
        state.loopCount === 0
          ? "She slowly lifts her gaze.\nHer eyes pass over empty tables and hanging shadows, then stop at the door at the far end.\nThat door is too conspicuous, as if the whole hall exists only to wait beside it."
          : "She barely looks anywhere else.\nHer gaze is drawn straight to the door at the end of the hall.\nIt still stands there in silence, as if nothing has ever happened."
      ),
    },
    intro_3: {
      speaker: "Nock",
      text: (state) => (
        state.loopCount === 0
          ? "(Something is wrong with this place.)"
          : "(I've been back here before.)\n(No. This place simply never let me leave.)"
      ),
    },
    door_1: {
      text: (state) => (
        state.loopCount === 0
          ? "The red carpet runs all the way to the door.\nIt waits there in silence, like the final piece of some unfinished ceremony."
          : "The red carpet still runs straight to the door.\nShe knows she will walk toward it again, just like last time."
      ),
    },
    door_2: {
      speaker: "Nock",
      text: (state) => (
        state.loopCount === 0
          ? "(Why am I here?)\n(My memory is cut off.)"
          : "(The memory break is gone.)\n(I'm only being sent back here again.)"
      ),
    },
    knock_1: {
      text: "She steps up to the door, raises her hand, and gives it a light knock.",
    },
    no_response: {
      text: "Nothing answers.\nHer fingertips still rest against the wood, as if some belated wrongness has only just brushed past her.",
    },
    thought_normal: {
      speaker: "Nock",
      text: (state) => (
        state.loopCount === 0 ? "(...That's normal.)" : "(I know what happens next.)"
      ),
    },
    deja_vu: {
      text: "She draws her hand back, but her brow tightens a little.\nThat last knock felt too familiar.",
    },
    thought_done: {
      speaker: "Nock",
      text: "(It's like I've done this before.)",
    },
    knock_2: {
      text: "She knocks again.\nThis time the echo is clearer, and emptier.",
    },
    thought_wrong: {
      speaker: "Nock",
      text: "(...No.)\n(Didn't I already knock just now?)",
    },
    hall_watch: {
      text: "She whips around.\nThe hall looks unchanged, and yet the shadows seem to have stretched a little farther.\nSomething is approaching in perfect silence.",
    },
    thought_watch: {
      speaker: "Nock",
      text: "(Something was watching me just now.)",
    },
    rush_knock: {
      text: "She stops thinking.\nShe knocks again.\nOnce, then once more, and the rhythm starts to quicken on its own.",
    },
    knock_345: {
      text: "Third.\nFourth.\nFifth.\nThe door still does not open.",
    },
    compulsion: {
      speaker: "Nock",
      text: "(I can't stop.)\n(It's not that I want to continue. I have to.)",
    },
    hear_sound: {
      text: "At some point she suddenly freezes.\nShe hears something.\nNot behind the door, but deeper in the hall.",
    },
    dont_turn: {
      speaker: "Nock",
      text: "(Don't turn around.)",
    },
    knock_6: {
      text: "She knocks a sixth time.\nThe sound is heavy now, no longer like a human hand at all.\nHer breathing breaks with it.",
    },
    last_once: {
      speaker: "Nock",
      text: "(Only one left.)",
    },
    choice_final: {
      text: (state) => (
        state.loopCount === 0
          ? "Her hand stops halfway in the air.\nThe door is close enough that one more movement will bring the seventh answer."
          : "Her hand halts in midair again.\nShe has seen this moment before.\nThe door is waiting for her, and so is the hall behind her."
      ),
      choices: (state) => {
        const list = [
          {
            label: "Knock the seventh time",
            note: "Force the door to answer",
            sfx: "knockSoft",
            effect: ["sprite"],
            next: "final_knock",
          },
          {
            label: "Turn and leave",
            note: "Refuse whatever waits behind the door and try to go elsewhere",
            sfx: "stepSoft",
            effect: ["focus"],
            action: (currentState) => {
              currentState.loopCount += 1;
            },
            next: "leave_1",
          },
        ];

        if (state.loopCount > 0) {
          list.push({
            label: "Close your eyes and stay",
            note: "Neither knock nor leave",
            sfx: "airSoft",
            effect: ["focus"],
            next: "still_1",
          });
        }

        return list;
      },
    },
    leave_1: {
      text: "She jerks her hand back and turns away.\nShe does not look at the door, and she does not listen for whatever might answer behind it.",
    },
    leave_2: {
      text: "The floor beneath her suddenly turns soft.\nIn the instant the next step loses its weight, the whole hall flips back like a page.",
    },
    leave_3: {
      text: "When she opens her eyes again, she is standing in the center of the hall once more.",
    },
    final_knock: {
      text: "She raises her hand again.\nThe motion stalls for half a second, as if resisting some unseen force.\nThen she brings down the seventh knock.",
    },
    door_open: {
      text: "The door opens.",
    },
    system_module: {
      text: "Current module: choice and loop validation\nVoluntary departure path logged\nThis segment confirms whether the player still returns to the door",
    },
    white_void: {
      text: "She stands still.\nThere is nothing behind the door.\nOnly a blank expanse of white.",
    },
    realize_test: {
      speaker: "Nock",
      text: "(...A test?)\n(So everything I just did...)\n(Even leaving was just part of the flow.)",
    },
    system_reply: {
      text: "Yes.\nYou performed very well.",
    },
    acceptance: {
      text: "She stays silent for a long time.\nAt last, she lets out a very quiet breath.",
    },
    acceptance_2: {
      speaker: "Nock",
      text: "(Then let's continue.)\n(The door already knows I'll come back.)",
    },
    still_1: {
      text: "She does not raise her hand again.\nShe does not turn away, either.\nShe simply lets her hand fall and remains in front of the door.",
    },
    still_2: {
      text: "No sound comes from behind the door.\nFor the first time, the hall does not urge her onward.\nEven the force that had been pushing her to continue ebbs away like a retreating tide.",
    },
    still_3: {
      speaker: "Nock",
      text: "(So refusing it is a choice too.)",
    },
  },
};

const endings = {
  seventhKnock: {
    eyebrow: "结局 A",
    title: "第七次敲门",
    summary: "门终于开了。可门后等着她的，并不是出口。",
    button: "再次敲门",
  },
  stillness: {
    eyebrow: "结局 B",
    title: "停在原地",
    summary: "她没有再抬手。大厅第一次安静下来，像是什么都没有发生过。",
    button: "回到开头",
  },
};

const scenes = {
  intro_1: {
    speaker: "",
    mode: "narration",
    background: "opening",
    sprite: "normal",
    sfx: "ambient",
    music: "opening",
    text: (state) => (
      state.loopCount === 0
        ? "她醒来时，已经站在大厅中央。\n穹顶高得惊人，冷意从石面缓慢往上爬。\n这里安静得过分，像是很久都没有人来过。"
        : `她又一次在大厅中央醒来。\n穹顶、冷意、空旷的回声，全都和刚才一模一样。\n这是第 ${state.loopCount + 1} 次。`
    ),
    next: "intro_2",
  },
  intro_2: {
    speaker: "",
    mode: "narration",
    background: "opening",
    sprite: "surprised",
    effect: ["focus", "sprite"],
    sfx: "air",
    text: (state) => (
      state.loopCount === 0
        ? "她慢慢抬眼。\n视线掠过空着的长桌、垂落的灯影，最后停在尽头那扇门上。\n那扇门太显眼了，像是整个大厅只剩它还在等人。"
        : "她甚至没有多看别处。\n目光像被牵引一样，径直落到尽头那扇门上。\n它仍旧安静地立在那里，像什么都没有发生。"
    ),
    next: "intro_3",
  },
  intro_3: {
    speaker: "诺克",
    mode: "thought",
    background: "opening",
    sprite: "normal",
    text: (state) => (
      state.loopCount === 0
        ? "（这里不对。）"
        : "（我回来过。）\n（不，是这里根本没有让我离开。）"
    ),
    next: "door_1",
  },
  door_1: {
    speaker: "",
    mode: "narration",
    background: "door",
    sprite: "normal",
    transition: "sprite",
    sfx: "step",
    text: (state) => (
      state.loopCount === 0
        ? "红色地毯一直铺到门前。\n门静静立在那里，像某种仪式最后保留下来的部分。"
        : "红色地毯仍旧一直铺到门前。\n她知道自己还会走过去，就像上一次那样。"
    ),
    next: "door_2",
  },
  door_2: {
    speaker: "诺克",
    mode: "thought",
    background: "door",
    sprite: "surprised",
    effect: "sprite",
    text: (state) => (
      state.loopCount === 0
        ? "（我为什么会在这里？）\n（记忆断掉了。）"
        : "（记忆没有断。）\n（我只是被送回来了。）"
    ),
    next: "knock_1",
  },
  knock_1: {
    speaker: "",
    mode: "narration",
    background: "door",
    sprite: "normal",
    effect: ["shake", "focus"],
    sfx: "knockSoft",
    text: "她走到门前，抬手，轻轻敲了一下。",
    next: "no_response",
  },
  no_response: {
    speaker: "",
    mode: "narration",
    background: "door",
    sprite: "surprised",
    effect: "sprite",
    sfx: "air",
    text: "没有回应。\n她的指尖还贴在门板上，像是被一丝迟来的异样感轻轻碰了一下。",
    next: "thought_normal",
  },
  thought_normal: {
    speaker: "诺克",
    mode: "thought",
    background: "door",
    sprite: "normal",
    text: (state) => (
      state.loopCount === 0 ? "（这很正常。）" : "（我知道接下来会发生什么。）"
    ),
    next: "deja_vu",
  },
  deja_vu: {
    speaker: "",
    mode: "narration",
    background: "door",
    sprite: "surprised",
    effect: "focus",
    sfx: "air",
    text: "她把手收回来，眉头却一点点皱起。\n刚才那一下，熟悉得没有理由。",
    next: "thought_done",
  },
  thought_done: {
    speaker: "诺克",
    mode: "thought",
    background: "door",
    sprite: "surprised",
    text: "（像是已经做过了。）",
    next: "knock_2",
  },
  knock_2: {
    speaker: "",
    mode: "narration",
    background: "door",
    sprite: "surprised",
    music: "tense",
    effect: ["shake", "sprite"],
    sfx: "knock",
    text: "她又敲了一次。\n这一次，回响更清楚，也更空。",
    next: "thought_wrong",
  },
  thought_wrong: {
    speaker: "诺克",
    mode: "thought",
    background: "door",
    sprite: "angry",
    effect: "sprite",
    sfx: "stinger",
    text: "（不对。）\n（我刚才，是不是已经敲过了？）",
    next: "hall_watch",
  },
  hall_watch: {
    speaker: "",
    mode: "narration",
    background: "door",
    sprite: "surprised",
    effect: "focus",
    sfx: "air",
    text: "她猛地回头。\n大厅看起来没有变化，可灯影像被悄悄拉长了一截。\n有什么东西正安静地靠近。",
    next: "thought_watch",
  },
  thought_watch: {
    speaker: "诺克",
    mode: "thought",
    background: "door",
    sprite: "angry",
    effect: "sprite",
    text: "（刚才，有东西在看我。）",
    next: "rush_knock",
  },
  rush_knock: {
    speaker: "",
    mode: "narration",
    background: "door",
    sprite: "angry",
    effect: ["shake", "sprite"],
    sfx: "knockRush",
    text: "她没有再想下去。\n她又敲了一次。\n一下，又一下，节奏开始自己变快。",
    next: "knock_345",
  },
  knock_345: {
    speaker: "",
    mode: "narration",
    background: "door",
    sprite: "angry",
    effect: "shake",
    sfx: "knockHeavy",
    text: "第三次。\n第四次。\n第五次。\n门始终没有开。",
    next: "compulsion",
  },
  compulsion: {
    speaker: "诺克",
    mode: "thought",
    background: "door",
    sprite: "angry",
    text: "（停不下来。）\n（不是我想继续，是我必须继续。）",
    next: "hear_sound",
  },
  hear_sound: {
    speaker: "",
    mode: "narration",
    background: "door",
    sprite: "surprised",
    effect: ["focus", "sprite"],
    sfx: "air",
    text: "某一刻，她忽然停住。\n她听见了声音。\n声音不在门后，而在大厅更深的地方。",
    next: "dont_turn",
  },
  dont_turn: {
    speaker: "诺克",
    mode: "thought",
    background: "door",
    sprite: "angry",
    effect: "sprite",
    text: "（不要回头。）",
    next: "knock_6",
  },
  knock_6: {
    speaker: "",
    mode: "narration",
    background: "door",
    sprite: "angry",
    effect: ["shake", "focus"],
    sfx: "knockHeavy",
    text: "她第六次敲门。\n这一声很重，已经不像是人手敲出来的。\n她的呼吸也乱了。",
    next: "last_once",
  },
  last_once: {
    speaker: "诺克",
    mode: "thought",
    background: "door",
    sprite: "surprised",
    effect: "sprite",
    text: "（只剩最后一次。）",
    next: "choice_final",
  },
  choice_final: {
    speaker: "",
    mode: "narration",
    background: "door",
    sprite: "surprised",
    effect: "focus",
    sfx: "air",
    text: (state) => (
      state.loopCount === 0
        ? "她的手停在半空。\n那扇门近得只要再往前一点，就会迎来第七次回响。"
        : "她的手又一次停在半空。\n这一幕她已经见过。\n门在等她，身后的大厅也在等她。"
    ),
    choices: (state) => {
      const list = [
        {
          label: "敲下第七次",
          note: "让这扇门给出回应",
          sfx: "knockSoft",
          effect: ["sprite"],
          next: "final_knock",
        },
        {
          label: "转身离开",
          note: "拒绝门后的东西，试着回到别处",
          sfx: "stepSoft",
          effect: ["focus"],
          action: (currentState) => {
            currentState.loopCount += 1;
          },
          next: "leave_1",
        },
      ];

      if (state.loopCount > 0) {
        list.push({
          label: "闭上眼，停在原地",
          note: "既不敲门，也不离开",
          sfx: "airSoft",
          effect: ["focus"],
          next: "still_1",
        });
      }

      return list;
    },
  },
  leave_1: {
    speaker: "",
    mode: "narration",
    background: "door",
    sprite: "surprised",
    effect: ["focus", "sprite"],
    sfx: "air",
    text: "她猛地把手收回来，转身离开。\n她不去看门，也不去听门后会不会传来声音。",
    next: "leave_2",
  },
  leave_2: {
    speaker: "",
    mode: "narration",
    background: "opening",
    sprite: "normal",
    transition: "sprite",
    effect: ["flash", "focus"],
    sfx: "systemSoft",
    music: "calm",
    text: "脚下的地毯忽然变得很轻。\n下一步落空的瞬间，整座大厅像纸一样被翻回了第一页。",
    next: "leave_3",
  },
  leave_3: {
    speaker: "",
    mode: "narration",
    background: "opening",
    sprite: "surprised",
    effect: ["focus", "sprite"],
    sfx: "ambient",
    text: "她再次睁开眼时，自己又站在大厅中央。",
    next: "intro_2",
  },
  final_knock: {
    speaker: "",
    mode: "narration",
    background: "door",
    sprite: "surprised",
    effect: ["flash", "focus", "sprite"],
    sfx: "knockFinal",
    text: "她再次抬手。\n动作停了半秒，像是在和什么无形的力量僵持。\n然后，她敲下了第七次。",
    next: "door_open",
  },
  door_open: {
    speaker: "",
    mode: "narration",
    background: "door",
    sprite: "angry",
    effect: ["shake", "sprite"],
    sfx: "doorOpen",
    text: "门开了。",
    next: "system_log",
  },
  system_log: {
    speaker: "SYSTEM",
    mode: "system",
    backgroundColor: "#05080d",
    sprite: null,
    music: "stop",
    sfx: "systemAlert",
    text: (state) => (
      `>>> SYSTEM LOG <<<\nSubject behavior: stable\nInput sequence: 7/7\nReset count: ${state.loopCount}\nTest case passed`
    ),
    next: "system_module",
  },
  system_module: {
    speaker: "SYSTEM",
    mode: "system",
    backgroundColor: "#0d1117",
    sprite: null,
    music: "calm",
    sfx: "system",
    text: "当前模块：选择与回环验证\n已记录主动离开路径\n本段用于确认玩家是否仍会回到门前",
    next: "white_void",
  },
  white_void: {
    speaker: "",
    mode: "narration",
    backgroundColor: "#f4f2ec",
    sprite: "surprised",
    sfx: "airSoft",
    text: "她站在原地。\n门后什么都没有。\n只有一整片发白的空。",
    next: "realize_test",
  },
  realize_test: {
    speaker: "诺克",
    mode: "thought",
    backgroundColor: "#f4f2ec",
    sprite: "surprised",
    effect: "sprite",
    text: "（测试？）\n（所以我刚才做的那些事……）\n（连离开，也只是被算进流程里。）",
    next: "system_reply",
  },
  system_reply: {
    speaker: "SYSTEM",
    mode: "system",
    backgroundColor: "#f4f2ec",
    sprite: null,
    sfx: "systemSoft",
    text: "是的。\n你执行得很好。",
    next: "acceptance",
  },
  acceptance: {
    speaker: "",
    mode: "narration",
    backgroundColor: "#f4f2ec",
    sprite: "normal",
    sfx: "stepSoft",
    text: "她沉默了很久。\n最后只是很轻地吐出一口气。",
    next: "acceptance_2",
  },
  acceptance_2: {
    speaker: "诺克",
    mode: "thought",
    backgroundColor: "#f4f2ec",
    sprite: "normal",
    text: "（那就继续吧。）\n（反正门已经知道我会回来。）",
    next: "ending_true",
  },
  ending_true: {
    ending: "seventhKnock",
  },
  still_1: {
    speaker: "",
    mode: "narration",
    background: "door",
    sprite: "normal",
    effect: ["focus", "sprite"],
    sfx: "airSoft",
    music: "calm",
    text: "她没有再抬手。\n也没有转身。\n只是把手慢慢放下，任由自己停在门前。",
    next: "still_2",
  },
  still_2: {
    speaker: "",
    mode: "narration",
    background: "opening",
    sprite: "normal",
    transition: "sprite",
    effect: ["focus"],
    sfx: "ambient",
    text: "门后的声音没有出现。\n大厅也第一次没有催促她。\n连那股逼着人继续的力量，都像潮水一样慢慢退了下去。",
    next: "still_3",
  },
  still_3: {
    speaker: "诺克",
    mode: "thought",
    background: "opening",
    sprite: "normal",
    text: "（原来不去选它，也是一种选择。）",
    next: "ending_still",
  },
  ending_still: {
    ending: "stillness",
  },
};

const ui = {
  background: document.getElementById("background"),
  flash: document.getElementById("flash"),
  stage: document.getElementById("stage"),
  sprite: document.getElementById("sprite"),
  pageTitle: document.querySelector("title"),
  titleEyebrow: document.getElementById("title-eyebrow"),
  titleHeading: document.getElementById("title-heading"),
  titleSummary: document.getElementById("title-summary"),
  titleHint: document.getElementById("title-hint"),
  titleScreen: document.getElementById("title-screen"),
  dialogueUi: document.getElementById("dialogue-ui"),
  endingScreen: document.getElementById("ending-screen"),
  endingEyebrow: document.getElementById("ending-eyebrow"),
  endingTitle: document.getElementById("ending-title"),
  endingSummary: document.getElementById("ending-summary"),
  speakerRow: document.querySelector(".speaker-row"),
  speaker: document.getElementById("speaker"),
  mood: document.getElementById("mood"),
  textBox: document.getElementById("text-box"),
  dialogueText: document.getElementById("dialogue-text"),
  choiceList: document.getElementById("choice-list"),
  advanceHint: document.getElementById("advance-hint"),
  startButton: document.getElementById("start-button"),
  restartButton: document.getElementById("restart-button"),
  languageButtons: [...document.querySelectorAll(".language-button")],
  bgm: document.getElementById("bgm"),
};

const supportedLocales = ["zh", "en"];
const savedLocale = (() => {
  try {
    return window.localStorage.getItem("seventh-knock-locale");
  } catch (error) {
    return null;
  }
})();

const initialLocale = supportedLocales.includes(savedLocale) ? savedLocale : "zh";

const state = {
  currentSceneId: null,
  currentScene: null,
  displayedText: "",
  currentText: "",
  typingTimer: null,
  isTyping: false,
  started: false,
  musicKey: null,
  musicFadeFrame: null,
  musicToken: 0,
  currentSprite: null,
  audioContext: null,
  sfxMaster: null,
  noiseBuffer: null,
  audioReady: false,
  loopCount: 0,
  awaitingChoice: false,
  displayCompleted: false,
  locale: initialLocale,
  advanceHintKey: "advanceContinue",
};

const typingSpeed = 36;

function formatOrdinal(value) {
  const remainder10 = value % 10;
  const remainder100 = value % 100;

  if (remainder10 === 1 && remainder100 !== 11) {
    return `${value}st`;
  }

  if (remainder10 === 2 && remainder100 !== 12) {
    return `${value}nd`;
  }

  if (remainder10 === 3 && remainder100 !== 13) {
    return `${value}rd`;
  }

  return `${value}th`;
}

function getLocaleCopy() {
  return uiCopy[state.locale] || uiCopy.zh;
}

function getLocalizedEnding(endingKey) {
  const override = localizedEndings[state.locale]?.[endingKey];
  return override || endings[endingKey] || endings.seventhKnock;
}

function updateLanguageButtons() {
  ui.languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === state.locale;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function renderStaticCopy() {
  const copy = getLocaleCopy();
  const defaultEnding = getLocalizedEnding("seventhKnock");
  document.documentElement.lang = copy.htmlLang;
  document.title = copy.documentTitle;
  ui.pageTitle.textContent = copy.documentTitle;
  ui.sprite.alt = copy.spriteAlt;
  ui.titleEyebrow.textContent = copy.titleEyebrow;
  ui.titleHeading.textContent = copy.titleHeading;
  ui.titleSummary.innerHTML = copy.titleSummary;
  ui.startButton.textContent = copy.startButton;
  ui.titleHint.textContent = copy.titleHint;
  ui.endingEyebrow.textContent = defaultEnding.eyebrow;
  ui.endingTitle.textContent = defaultEnding.title;
  ui.endingSummary.textContent = defaultEnding.summary;
  ui.restartButton.textContent = defaultEnding.button;

  if (!state.started) {
    setAdvanceHint("advanceContinue", true);
  }
}

function refreshCurrentSceneCopy() {
  if (!state.started || !state.currentSceneId) {
    return;
  }

  const resolved = resolveScene(state.currentSceneId);
  state.currentScene = resolved;

  if (resolved.ending) {
    showEnding(resolved.ending);
    return;
  }

  updateSpeaker(resolved);
  state.currentText = resolved.text || "";

  if (state.displayCompleted) {
    ui.dialogueText.textContent = state.currentText;

    if (resolved.choices?.length) {
      showChoices(resolved.choices);
      return;
    }

    setAdvanceHint(state.advanceHintKey, true);
    return;
  }

  clearTyping();
  ui.dialogueText.textContent = state.currentText;
  completeSceneDisplay();
}

function setLanguage(locale, { persist = true } = {}) {
  if (!supportedLocales.includes(locale) || state.locale === locale) {
    updateLanguageButtons();
    renderStaticCopy();
    return;
  }

  state.locale = locale;

  if (persist) {
    try {
      window.localStorage.setItem("seventh-knock-locale", locale);
    } catch (error) {
      // Ignore storage failures and continue with the in-memory locale.
    }
  }

  updateLanguageButtons();
  renderStaticCopy();
  refreshCurrentSceneCopy();
}

function updateViewportMetrics() {
  const viewportHeight = window.visualViewport?.height || window.innerHeight;
  document.documentElement.style.setProperty("--app-height", `${viewportHeight}px`);
  document.documentElement.style.setProperty("--app-vh", `${viewportHeight * 0.01}px`);
}

function clearTyping() {
  if (state.typingTimer) {
    window.clearTimeout(state.typingTimer);
    state.typingTimer = null;
  }

  state.isTyping = false;
}

function runClassAnimation(element, className, duration) {
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
  window.setTimeout(() => element.classList.remove(className), duration);
}

function setBackground(scene) {
  if (scene.background) {
    ui.background.style.backgroundImage = `url("${assets.backgrounds[scene.background]}")`;
    ui.background.style.backgroundColor = "transparent";
  } else {
    ui.background.style.backgroundImage = "none";
    ui.background.style.backgroundColor = scene.backgroundColor || "#090b10";
  }

  const usesLightBackground = scene.backgroundColor?.toLowerCase() === "#f4f2ec";
  ui.background.style.filter = usesLightBackground
    ? "brightness(0.98) contrast(1) saturate(0.85)"
    : "brightness(0.72) contrast(1.04) saturate(0.92)";
}

function setSprite(key, transition) {
  if (!key) {
    state.currentSprite = null;
    ui.sprite.classList.add("hidden");
    ui.sprite.removeAttribute("src");
    ui.sprite.removeAttribute("data-expression");
    return;
  }

  const changed = state.currentSprite !== key;
  state.currentSprite = key;
  ui.sprite.src = assets.sprites[key];
  ui.sprite.dataset.expression = key;
  ui.sprite.classList.remove("hidden");

  if (changed || transition === "sprite") {
    runClassAnimation(ui.sprite, "entering", 440);
  }
}

function cancelMusicFade() {
  if (state.musicFadeFrame) {
    window.cancelAnimationFrame(state.musicFadeFrame);
    state.musicFadeFrame = null;
  }
}

function fadeAudioTo(targetVolume, duration) {
  cancelMusicFade();

  return new Promise((resolve) => {
    const startVolume = ui.bgm.volume;
    const startedAt = performance.now();

    const step = (now) => {
      const elapsed = now - startedAt;
      const progress = Math.min(elapsed / duration, 1);
      ui.bgm.volume = startVolume + (targetVolume - startVolume) * progress;

      if (progress >= 1) {
        state.musicFadeFrame = null;
        resolve();
        return;
      }

      state.musicFadeFrame = window.requestAnimationFrame(step);
    };

    state.musicFadeFrame = window.requestAnimationFrame(step);
  });
}

async function setMusic(musicKey) {
  if (!musicKey || state.musicKey === musicKey) {
    return;
  }

  const token = ++state.musicToken;

  if (musicKey === "stop") {
    if (ui.bgm.src) {
      await fadeAudioTo(0, 240);
    }

    if (token !== state.musicToken) {
      return;
    }

    state.musicKey = "stop";
    ui.bgm.pause();
    ui.bgm.currentTime = 0;
    ui.bgm.removeAttribute("src");
    return;
  }

  const targetVolume = musicKey === "calm" ? 0.42 : 0.34;

  if (ui.bgm.src) {
    await fadeAudioTo(0, 260);
    if (token !== state.musicToken) {
      return;
    }
  }

  state.musicKey = musicKey;
  ui.bgm.pause();
  ui.bgm.currentTime = 0;
  ui.bgm.src = assets.music[musicKey];
  ui.bgm.volume = 0;

  try {
    await ui.bgm.play();
    if (token !== state.musicToken) {
      return;
    }
    await fadeAudioTo(targetVolume, 420);
  } catch (error) {
    console.warn("BGM blocked by browser:", error);
  }
}

function ensureAudio() {
  if (state.audioContext) {
    return state.audioContext;
  }

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) {
    return null;
  }

  const context = new AudioContextClass();
  const master = context.createGain();
  master.gain.value = 0.34;
  master.connect(context.destination);

  const noiseBuffer = context.createBuffer(1, context.sampleRate * 0.5, context.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) {
    data[i] = Math.random() * 2 - 1;
  }

  state.audioContext = context;
  state.sfxMaster = master;
  state.noiseBuffer = noiseBuffer;

  return context;
}

async function unlockAudio() {
  const context = ensureAudio();
  if (!context) {
    return;
  }

  if (context.state === "suspended") {
    try {
      await context.resume();
    } catch (error) {
      console.warn("Audio resume blocked by browser:", error);
    }
  }

  state.audioReady = context.state === "running";
}

function getAudioTime() {
  const context = ensureAudio();
  if (!context || !state.sfxMaster) {
    return null;
  }

  return { context, master: state.sfxMaster, now: context.currentTime };
}

function createEnvelope(context, master, now, attack, hold, release, peak) {
  const gain = context.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.linearRampToValueAtTime(peak, now + attack);
  gain.gain.exponentialRampToValueAtTime(Math.max(peak * 0.82, 0.0001), now + attack + hold);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + attack + hold + release);
  gain.connect(master);
  return gain;
}

function playTone({ type = "sine", frequency = 440, duration = 0.16, volume = 0.2, attack = 0.005, hold = 0.02, detune = 0, start = 0, endFrequency = null }) {
  const audio = getAudioTime();
  if (!audio || !state.audioReady) {
    return;
  }

  const { context, master, now } = audio;
  const oscillator = context.createOscillator();
  const envelope = createEnvelope(context, master, now + start, attack, hold, Math.max(duration - attack - hold, 0.02), volume);

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now + start);
  oscillator.detune.setValueAtTime(detune, now + start);

  if (endFrequency) {
    oscillator.frequency.exponentialRampToValueAtTime(endFrequency, now + start + duration);
  }

  oscillator.connect(envelope);
  oscillator.start(now + start);
  oscillator.stop(now + start + duration + 0.02);
}

function playNoise({ duration = 0.18, volume = 0.12, attack = 0.004, hold = 0.02, filterFrequency = 1200, start = 0, playbackRate = 1 }) {
  const audio = getAudioTime();
  if (!audio || !state.audioReady || !state.noiseBuffer) {
    return;
  }

  const { context, master, now } = audio;
  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const envelope = createEnvelope(context, master, now + start, attack, hold, Math.max(duration - attack - hold, 0.02), volume);

  source.buffer = state.noiseBuffer;
  source.playbackRate.setValueAtTime(playbackRate, now + start);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(filterFrequency, now + start);

  source.connect(filter);
  filter.connect(envelope);
  source.start(now + start);
  source.stop(now + start + duration + 0.02);
}

function playKnock({ frequency = 170, volume = 0.24, noise = 0.14, start = 0, heavy = false }) {
  playTone({
    type: "triangle",
    frequency,
    endFrequency: heavy ? frequency * 0.58 : frequency * 0.72,
    duration: heavy ? 0.24 : 0.16,
    volume,
    attack: 0.003,
    hold: 0.012,
    start,
  });

  playNoise({
    duration: heavy ? 0.18 : 0.12,
    volume: noise,
    attack: 0.002,
    hold: 0.008,
    filterFrequency: heavy ? 980 : 1350,
    playbackRate: heavy ? 0.72 : 0.9,
    start,
  });
}

function playSystemSequence({ soft = false, alert = false }) {
  const base = soft ? 660 : 780;
  const accent = alert ? 1220 : 1040;
  const volume = soft ? 0.07 : 0.11;

  playTone({ type: "square", frequency: base, duration: 0.09, volume, start: 0 });
  playTone({ type: "square", frequency: accent, duration: 0.08, volume: volume * 0.92, start: 0.09 });
  playTone({ type: "square", frequency: base * 0.92, duration: 0.11, volume: volume * 0.88, start: 0.18 });

  if (alert) {
    playTone({ type: "triangle", frequency: 180, endFrequency: 90, duration: 0.24, volume: 0.08, start: 0 });
  }
}

function playAir({ soft = false }) {
  playNoise({
    duration: soft ? 0.26 : 0.36,
    volume: soft ? 0.05 : 0.08,
    attack: 0.01,
    hold: 0.03,
    filterFrequency: soft ? 1600 : 2100,
    playbackRate: soft ? 1.3 : 1,
    start: 0,
  });
}

function playSfx(name) {
  if (!name) {
    return;
  }

  switch (name) {
    case "ambient":
      playAir({ soft: true });
      playTone({ type: "sine", frequency: 140, endFrequency: 118, duration: 0.42, volume: 0.045, attack: 0.01, hold: 0.06 });
      break;
    case "step":
      playKnock({ frequency: 130, volume: 0.12, noise: 0.08 });
      break;
    case "stepSoft":
      playKnock({ frequency: 110, volume: 0.08, noise: 0.05 });
      break;
    case "air":
      playAir({ soft: false });
      break;
    case "airSoft":
      playAir({ soft: true });
      break;
    case "stinger":
      playTone({ type: "sawtooth", frequency: 420, endFrequency: 240, duration: 0.18, volume: 0.08, attack: 0.003, hold: 0.02 });
      break;
    case "knockSoft":
      playKnock({ frequency: 160, volume: 0.18, noise: 0.11 });
      break;
    case "knock":
      playKnock({ frequency: 176, volume: 0.24, noise: 0.14 });
      break;
    case "knockRush":
      playKnock({ frequency: 178, volume: 0.2, noise: 0.12, start: 0 });
      playKnock({ frequency: 186, volume: 0.18, noise: 0.12, start: 0.15 });
      break;
    case "knockHeavy":
      playKnock({ frequency: 132, volume: 0.3, noise: 0.18, heavy: true });
      break;
    case "knockFinal":
      playKnock({ frequency: 124, volume: 0.34, noise: 0.2, heavy: true });
      playTone({ type: "sine", frequency: 90, endFrequency: 62, duration: 0.34, volume: 0.08, attack: 0.01, hold: 0.02, start: 0.03 });
      break;
    case "doorOpen":
      playNoise({ duration: 0.44, volume: 0.11, attack: 0.01, hold: 0.04, filterFrequency: 980, playbackRate: 0.6 });
      playTone({ type: "sawtooth", frequency: 240, endFrequency: 86, duration: 0.42, volume: 0.1, attack: 0.005, hold: 0.05 });
      break;
    case "system":
      playSystemSequence({ soft: false, alert: false });
      break;
    case "systemSoft":
      playSystemSequence({ soft: true, alert: false });
      break;
    case "systemAlert":
      playSystemSequence({ soft: false, alert: true });
      break;
    default:
      break;
  }
}

function triggerEffect(effect) {
  const effects = Array.isArray(effect) ? effect : effect ? [effect] : [];

  effects.forEach((item) => {
    if (item === "shake") {
      runClassAnimation(ui.textBox, "scene-shake", 420);
    }

    if (item === "flash") {
      runClassAnimation(ui.flash, "active", 650);
    }

    if (item === "focus") {
      runClassAnimation(ui.stage, "scene-focus", 700);
    }

    if (item === "sprite" && !ui.sprite.classList.contains("hidden")) {
      runClassAnimation(ui.sprite, "react", 360);
    }
  });
}

function updateSpeaker(scene) {
  const hasSpeaker = Boolean(scene.speaker);
  ui.speaker.textContent = scene.speaker || "";
  ui.mood.textContent = hasSpeaker ? scene.mood || "" : "";
  ui.speakerRow.classList.toggle("hidden", !hasSpeaker);
  ui.textBox.classList.toggle("name-hidden", !hasSpeaker);
}

function setAdvanceHint(key, isReady = false) {
  const copy = getLocaleCopy();
  state.advanceHintKey = key;
  ui.advanceHint.textContent = copy[key] || key;
  ui.advanceHint.classList.toggle("ready", isReady);
}

function hideChoices() {
  ui.choiceList.innerHTML = "";
  ui.choiceList.classList.add("hidden");
  state.awaitingChoice = false;
}

async function handleChoice(choice) {
  await unlockAudio();
  hideChoices();
  if (choice.sfx) {
    playSfx(choice.sfx);
  }
  if (choice.effect) {
    triggerEffect(choice.effect);
  }
  if (typeof choice.action === "function") {
    choice.action(state);
  }
  jumpToScene(choice.next);
}

function showChoices(choices) {
  hideChoices();
  choices.forEach((choice, index) => {
    const button = document.createElement("button");
    const label = document.createElement("span");
    const note = document.createElement("span");

    button.type = "button";
    button.className = "choice-button";
    label.className = "choice-button-label";
    label.textContent = `${index + 1}. ${choice.label}`;
    note.className = "choice-button-note";
    note.textContent = choice.note || "";
    button.append(label, note);
    button.addEventListener("click", () => {
      handleChoice(choice);
    });
    ui.choiceList.appendChild(button);
  });
  ui.choiceList.classList.remove("hidden");
  state.awaitingChoice = true;
  setAdvanceHint("advanceChoose", false);
}

function resolveValue(value) {
  return typeof value === "function" ? value(state) : value;
}

function resolveScene(sceneId) {
  const scene = scenes[sceneId];
  if (!scene) {
    throw new Error(`Unknown scene: ${sceneId}`);
  }

  const localizedScene = localizedScenes[state.locale]?.[sceneId] || {};
  const resolvedScene = {
    ...scene,
    ...localizedScene,
  };

  return {
    ...resolvedScene,
    id: sceneId,
    speaker: resolveValue(resolvedScene.speaker),
    mood: resolveValue(resolvedScene.mood),
    text: resolveValue(resolvedScene.text),
    next: resolveValue(resolvedScene.next),
    choices: resolvedScene.choices ? resolveValue(resolvedScene.choices) : null,
  };
}

function getTypeDelay(character) {
  if (character === "\n") {
    return typingSpeed + 70;
  }

  if (/^[\uFF0C\u3002\u3001\u3010\u3011\uFF1B\uFF1A\uFF1F\uFF01,.;:!?]$/.test(character)) {
    return typingSpeed + 90;
  }

  if (/^[\u2026\u2014]$/.test(character)) {
    return typingSpeed + 140;
  }

  return typingSpeed;
}

function completeSceneDisplay() {
  if (state.displayCompleted) {
    return;
  }

  state.displayCompleted = true;
  clearTyping();

  if (state.currentScene?.choices?.length) {
    showChoices(state.currentScene.choices);
    return;
  }

  setAdvanceHint("advanceContinue", true);
}

function typeText(text) {
  clearTyping();
  state.currentText = text || "";
  state.displayedText = "";
  ui.dialogueText.textContent = "";
  setAdvanceHint("advanceTyping", false);

  let index = 0;
  state.isTyping = true;

  const step = () => {
    const nextCharacter = state.currentText[index];
    index += 1;
    state.displayedText = state.currentText.slice(0, index);
    ui.dialogueText.textContent = state.displayedText;

    if (index <= state.currentText.length) {
      state.typingTimer = window.setTimeout(step, getTypeDelay(nextCharacter));
      return;
    }

    completeSceneDisplay();
  };

  step();
}

function revealFullText() {
  clearTyping();
  ui.dialogueText.textContent = state.currentText;
  completeSceneDisplay();
}

function applyScene(scene) {
  hideChoices();
  state.currentScene = scene;
  state.currentSceneId = scene.id;
  state.displayCompleted = false;
  setBackground(scene);
  setSprite(scene.sprite, scene.transition);
  ui.textBox.className = `panel text-box mode-${scene.mode || "narration"}`;
  updateSpeaker(scene);
  runClassAnimation(ui.textBox, "entering", 320);

  if (scene.music) {
    setMusic(scene.music);
  }

  playSfx(scene.sfx);
  triggerEffect(scene.effect);

  if (scene.ending) {
    showEnding(scene.ending);
    return;
  }

  typeText(scene.text || "");
}

function showEnding(endingKey) {
  const ending = getLocalizedEnding(endingKey);
  ui.dialogueUi.classList.add("hidden");
  ui.endingScreen.classList.remove("hidden");
  ui.endingEyebrow.textContent = ending.eyebrow;
  ui.endingTitle.textContent = ending.title;
  ui.endingSummary.textContent = ending.summary;
  ui.restartButton.textContent = ending.button;
}

function jumpToScene(sceneId) {
  const resolved = resolveScene(sceneId);
  applyScene(resolved);
}

function nextScene() {
  const next = state.currentScene?.next;
  if (!next) {
    showEnding("seventhKnock");
    return;
  }
  jumpToScene(next);
}

function advanceStory() {
  if (!state.started || state.awaitingChoice) {
    return;
  }

  if (state.isTyping) {
    revealFullText();
    return;
  }

  nextScene();
}

function resetRunState() {
  state.currentSceneId = null;
  state.currentScene = null;
  state.currentText = "";
  state.displayedText = "";
  state.currentSprite = null;
  state.loopCount = 0;
  state.awaitingChoice = false;
  state.displayCompleted = false;
  hideChoices();
}

async function startGame() {
  await unlockAudio();
  resetRunState();
  state.started = true;
  clearTyping();
  ui.titleScreen.classList.add("hidden");
  ui.endingScreen.classList.add("hidden");
  ui.dialogueUi.classList.remove("hidden");
  jumpToScene("intro_1");
}

async function restartGame() {
  await unlockAudio();
  state.musicKey = null;
  state.musicToken += 1;
  cancelMusicFade();
  ui.bgm.pause();
  ui.bgm.currentTime = 0;
  ui.bgm.removeAttribute("src");
  startGame();
}

updateViewportMetrics();
updateLanguageButtons();
renderStaticCopy();
window.addEventListener("resize", updateViewportMetrics);
window.visualViewport?.addEventListener("resize", updateViewportMetrics);

ui.startButton.addEventListener("click", startGame);
ui.restartButton.addEventListener("click", restartGame);
ui.languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang || "zh");
  });
});
ui.textBox.addEventListener("click", (event) => {
  if (event.target instanceof HTMLElement && event.target.closest(".choice-button")) {
    return;
  }
  advanceStory();
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) {
    return;
  }

  if (target.closest("button") || target.closest(".text-box")) {
    return;
  }

  if (ui.dialogueUi.classList.contains("hidden")) {
    return;
  }

  advanceStory();
});

document.addEventListener("keydown", async (event) => {
  if (ui.dialogueUi.classList.contains("hidden")) {
    return;
  }

  if (["1", "2", "3"].includes(event.key) && state.awaitingChoice) {
    const buttons = [...ui.choiceList.querySelectorAll(".choice-button")];
    const button = buttons[Number(event.key) - 1];
    if (!button) {
      return;
    }
    await unlockAudio();
    event.preventDefault();
    button.click();
    return;
  }

  if (event.key !== " " && event.key !== "Enter") {
    return;
  }

  await unlockAudio();
  event.preventDefault();
  advanceStory();
});
