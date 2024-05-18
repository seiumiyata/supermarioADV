const gameData = {
    start: {
        text: "私は岸田首相。キノコ王国を乗っ取る計画を密かに進めている。\n\nキノコ王国はピーチ姫が統治しているが、彼女は精神を病んでおり、誰も信じられない状態にある。\n\n私の計画は、彼女の不安定な精神状態を利用することだ。\n\nある夜、私はキノコ王国の城に忍び込んだ。城内は暗く、冷たい空気が漂っている。廊下を進むと、キノピオが現れた。彼は表面上はピーチ姫に従っているが、実は私と手を組んでいる。",
        options: [
            { text: "計画は順調か？", next: "planProgress" },
            { text: "ピーチ姫の部屋へ向かう", next: "toPeachRoom" }
        ]
    },
    planProgress: {
        text: "「岸田首相、計画は順調ですか？」キノピオが囁く。\n\n「順調だ。ピーチ姫の信頼を完全に失わせるために、次のステップに進む必要がある。」私は答えた。\n\nキノピオは頷き、私たちはさらに奥へと進んだ。城の中は静まり返っており、ただ私たちの足音だけが響いていた。",
        options: [
            { text: "ピーチ姫の部屋へ向かう", next: "toPeachRoom" }
        ]
    },
    toPeachRoom: {
        text: "私たちはピーチ姫の部屋の前で立ち止まり、キノピオが鍵を開けた。\n\n部屋の中は薄暗く、ピーチ姫は窓辺に座って外を見つめていた。\n\n「ピーチ姫、私は岸田首相です。あなたの助けになりたい。」私は静かに声をかけた。\n\nピーチ姫は振り返り、その目には深い不安と疑念が浮かんでいた。「誰も信じられない…誰も…」彼女は呟いた。\n\n「大丈夫です、ピーチ姫。私はあなたの味方です。」私は優しく言った。\n\nピーチ姫はしばらく私を見つめていたが、やがて頷いた。「ありがとう、岸田首相…」",
        options: [
            { text: "デイジー姫と手を組む", next: "teamUpWithDaisy" },
            { text: "クッパの動向を探る", next: "investigateBowser" }
        ]
    },
    teamUpWithDaisy: {
        text: "計画の一環として、私はデイジー姫、ドンキーコング、くにおくんと手を組んだ。\n\n彼らもまたキノコ王国を乗っ取ろうと画策している。特にデイジー姫は、世界全体の滅亡を望んでいる狂気の持ち主だ。\n\n「ピーチ姫を追い詰めるために、次の手を打つ必要がある。」デイジー姫が冷たく言った。\n\n「その通りだ。だが、注意が必要だ。マリオとルイージが我々の計画を察知しているかもしれない。」私は答えた。",
        options: [
            { text: "ルイージの裏切りを確認する", next: "confirmLuigiBetrayal" },
            { text: "クッパの真の目的を探る", next: "investigateBowser" }
        ]
    },
    investigateBowser: {
        text: "クッパはピーチ姫を自分の手元に取り戻したいと考えているが、実は彼はピーチの母親と子供を作っていた。その子供がピーチ姫だったのだ。\n\n「クッパはピーチ姫を取り戻したいと考えているが、彼の真の目的は何だ？」私はデイジー姫に尋ねた。\n\n「彼の目的はピーチ姫を利用してキノコ王国を支配することだ。彼はピーチ姫の母親と子供を作ったが、その事実を隠している。」デイジー姫は冷たく答えた。\n\n「なるほど。では、我々の計画を進めるためには、クッパとルイージを排除する必要がある。」私は決意を固めた。",
        options: [
            { text: "マリオの動向を探る", next: "investigateMario" },
            { text: "ルイージの裏切りを確認する", next: "confirmLuigiBetrayal" }
        ]
    },
    confirmLuigiBetrayal: {
        text: "ルイージも裏切り者であり、クッパと手を組んでいることを知っていた。\n\nクッパはピーチ姫を自分の手元に取り戻したいと考えているが、実は彼はピーチの母親と子供を作っていた。その子供がピーチ姫だったのだ。",
        options: [
            { text: "マリオの動向を探る", next: "investigateMario" }
        ]
    },
    investigateMario: {
        text: "計画は順調に進んでいたが、マリオが私たちの陰謀に気づき始めた。\n\n彼は最強の戦士であり、ハイラル王国や熱血高校などすべての敵対国を潰してきた。\n\n「岸田首相、マリオが動き出した。」キノピオが緊張した声で報告した。\n\n「問題ない。彼を罠にかける準備はできている。」私は冷静に答えた。",
        options: [
            { text: "マリオを待ち伏せする", next: "ambushMario" }
        ]
    },
    ambushMario: {
        text: "マリオが城に侵入してきたとき、私は彼を待ち伏せしていた。暗い廊下で彼と対峙する。\n\n「岸田首相、あなたの計画はここで終わりだ。」マリオが言った。\n\n「そう思うか？だが、ルイージも裏切り者だ。彼はクッパと手を組んでいる。」私は笑った。その瞬間、ルイージが現れ、マリオに背後から攻撃を仕掛けた。マリオは驚き、倒れた。\n\n「兄さん、すまない。」ルイージが冷たく言った。",
        options: [
            { text: "マリオの最期を見る", next: "marioLastMoment" },
            { text: "マリオが反撃する", next: "marioRevenge" }
        ]
    },
    marioLastMoment: {
        text: "キノコ王国の城内は、冷たい闇に包まれていた。廊下の奥からは、かすかな足音が響いてくる。\n\nマリオはその音に耳を澄ませ、慎重に進んでいった。彼の心臓は激しく鼓動し、冷や汗が背中を伝う。彼は弟のルイージを救うためにここに来たが、何かが違う。何かが間違っている。\n\n突然、暗闇の中からクッパの巨大な影が現れた。彼の目は赤く輝き、口元には冷酷な笑みが浮かんでいた。\n\n「マリオ、ここまで来たか。しかし、ここで終わりだ。」クッパの声は低く、威圧的だった。マリオは拳を握りしめ、戦う準備を整えた。しかし、その瞬間、背後から冷たい刃が彼の背中に突き刺さった。マリオは驚きと痛みで叫び声を上げ、振り返るとそこにはルイージが立っていた。彼の目は冷たく、無表情だった。\n\n「ルイージ、なぜ…？」マリオは苦しげに問いかけた。\n\n「兄さん、すまない。これが運命なんだ。」ルイージの声は冷たく、感情が感じられなかった。マリオは膝をつき、血が床に広がっていくのを感じた。彼の視界は次第にぼやけ、意識が遠のいていく。クッパは冷酷な笑みを浮かべながら、マリオに近づいた。\n\n「これで終わりだ、マリオ。キノコ王国は我々のものだ。」クッパは勝ち誇ったように言った。マリオは最後の力を振り絞り、クッパに向かって拳を振り上げた。しかし、その拳は空を切り、彼の体は力なく倒れた。彼の目は閉じ、意識は完全に途絶えた。ルイージはその場に立ち尽くし、兄の最期を見届けた。彼の心には深い悲しみと後悔が渦巻いていたが、もう後戻りはできなかった。クッパは満足げに笑い、ルイージの肩に手を置いた。\n\n「よくやった、ルイージ。これで我々の計画は完璧だ。」クッパは言った。ルイージは無言で頷き、兄の冷たい体を見下ろした。彼の心には、兄を裏切った罪悪感が重くのしかかっていた。しかし、彼はその感情を押し殺し、クッパと共にキノコ王国の支配を進めることを決意した。",
        options: [
            { text: "結末を見る", next: "determineEnding" }
        ]
    },
    marioRevenge: {
        text: "マリオは背後からの攻撃を受けたが、すぐに反撃に転じた。\n\n「ルイージ、裏切り者め！」マリオは叫び、ルイージに向かって拳を振り下ろした。\n\nルイージは驚き、後退したが、マリオの攻撃を避けることはできなかった。マリオの拳がルイージに命中し、彼は倒れた。\n\n「クッパ、お前もだ！」マリオはクッパに向かって突進し、激しい戦いが始まった。\n\n最終的に、マリオはクッパを打ち倒し、キノコ王国を救った。",
        options: [
            { text: "マリオの勝利を見る", next: "marioVictory" }
        ]
    },
    marioVictory: {
        text: "マリオはクッパを倒し、キノコ王国を救った。\n\n「これで終わりだ、クッパ。キノコ王国は私たちのものだ。」マリオは勝ち誇ったように言った。\n\nピーチ姫はマリオに感謝し、キノコ王国は再び平和を取り戻した。",
        options: [
            { text: "後日譚を見る", next: "epilogue" }
        ]
    },
    ending1: {
        text: "ピーチ姫は完全に孤立し、精神的に崩壊した。キノコ王国は混乱に陥り、私たちの計画は成功したかに見えた。\n\nしかし、デイジー姫の狂気は止まらなかった。彼女は世界全体の滅亡を望んでいた。\n\n「これで終わりではない。世界全体を滅ぼすのだ。」デイジー姫が狂気の笑みを浮かべた。\n\n私は彼女の計画に恐怖を感じたが、もう後戻りはできなかった。キノコ王国は暗い未来へと突き進んでいった。",
        options: [
            { text: "後日譚を見る", next: "epilogue" }
        ]
    },
    ending2: {
        text: "デイジー姫の狂気は止まらなかった。彼女は世界全体の滅亡を望み、そのための計画を進め続けた。\n\n彼女の心には、かつての友情や愛情はもう存在しなかった。彼女はただ、破壊と混乱を求め、狂気の中で生き続けた。",
        options: [
            { text: "後日譚を見る", next: "epilogue" }
        ]
    },
    ending3: {
        text: "クッパはピーチ姫を取り戻すことに成功したが、彼の心には深い後悔が残った。\n\n彼はピーチ姫の母親と子供を作ったことを隠し続け、その事実が明るみに出ることを恐れていた。\n\n彼はピーチ姫を支配し続けたが、その支配は冷酷で無慈悲なものとなった。彼の心には、かつての愛情や優しさはもう存在しなかった。",
        options: [
            { text: "後日譚を見る", next: "epilogue" }
        ]
    },
    epilogue: {
        text: "岸田首相: キノコ王国を乗っ取る計画は成功したが、私の心には深い虚無感が残った。ピーチ姫の精神崩壊を利用したこと、マリオを倒したこと、そしてデイジー姫の狂気を止められなかったことが、私の心に重くのしかかっていた。私はキノコ王国の新たな統治者となったが、その支配は冷酷で無慈悲なものとなった。私の心には、かつての理想や希望はもう存在しなかった。\n\nピーチ姫: ピーチ姫は完全に孤立し、精神的に崩壊した。彼女は城の一室に閉じこもり、誰とも会わず、誰も信じられない状態に陥った。彼女の心には、かつての明るさや優しさはもう存在しなかった。彼女はただ、過去の記憶に囚われ、絶望の中で生き続けた。\n\nキノピオ: キノピオは岸田首相の側近として仕え続けたが、彼の心には常に不安と恐怖があった。彼はピーチ姫を裏切り、岸田首相と手を組んだことを後悔していた。しかし、もう後戻りはできなかった。彼はただ、岸田首相の命令に従い、冷酷な支配を続けるしかなかった。\n\nデイジー姫: デイジー姫の狂気は止まらなかった。彼女は世界全体の滅亡を望み、そのための計画を進め続けた。彼女の心には、かつての友情や愛情はもう存在しなかった。彼女はただ、破壊と混乱を求め、狂気の中で生き続けた。\n\nクッパ: クッパはピーチ姫を取り戻すことに成功したが、彼の心には深い後悔が残った。彼はピーチ姫の母親と子供を作ったことを隠し続け、その事実が明るみに出ることを恐れていた。彼はピーチ姫を支配し続けたが、その支配は冷酷で無慈悲なものとなった。彼の心には、かつての愛情や優しさはもう存在しなかった。\n\nルイージ: ルイージは兄を裏切り、クッパと手を組んだことを後悔していた。彼の心には深い罪悪感が重くのしかかっていた。彼はクッパと共にキノコ王国の支配を進めたが、その支配は冷酷で無慈悲なものとなった。彼の心には、かつての兄弟愛や友情はもう存在しなかった。",
        options: [
            { text: "最初からやり直す", next: "start" }
        ]
    }
};

const characterEmotions = {
    peach: 0,
    bowser: 0,
    luigi: 0,
    daisy: 0
};

const sprite = document.getElementById('sprite');
const characterName = document.getElementById('character-name');
const text = document.getElementById('text');
const optionsBox = document.getElementById('optionsbox');

function startGame() {
    showScene('start');
}

function showScene(sceneKey) {
    const scene = gameData[sceneKey];
    text.textContent = '';
    optionsBox.innerHTML = '';
    let i = 0;

    function typeWriter() {
        if (i < scene.text.length) {
            if (scene.text.charAt(i) === '\n') {
                text.innerHTML += '<br>';
            } else {
                text.textContent += scene.text.charAt(i);
            }
            i++;
            setTimeout(typeWriter, 50);
        } else {
            scene.options.forEach(option => {
                const button = document.createElement('div');
                button.className = 'option';
                button.textContent = option.text;
                button.onclick = () => {
                    updateEmotions(option.next);
                    showScene(option.next);
                };
                optionsBox.appendChild(button);
            });
        }
    }

    typeWriter();
}

function updateEmotions(nextScene) {
    switch (nextScene) {
        case 'planProgress':
            characterEmotions.peach -= 1;
            break;
        case 'toPeachRoom':
            characterEmotions.peach += 1;
            break;
        case 'teamUpWithDaisy':
            characterEmotions.daisy += 1;
            break;
        case 'investigateBowser':
            characterEmotions.bowser += 1;
            break;
        case 'confirmLuigiBetrayal':
            characterEmotions.luigi -= 1;
            break;
        case 'investigateMario':
            characterEmotions.mario += 1;
            break;
        case 'ambushMario':
            characterEmotions.mario -= 1;
            break;
        case 'marioLastMoment':
            characterEmotions.mario -= 2;
            break;
        case 'marioRevenge':
            characterEmotions.mario += 3;
            break;
        case 'ending':
            characterEmotions.peach -= 2;
            characterEmotions.daisy += 2;
            characterEmotions.bowser += 2;
            characterEmotions.luigi -= 2;
            break;
        case 'epilogue':
            // No emotion changes in the epilogue
            break;
    }
}

function determineEnding() {
    if (characterEmotions.mario >= 3) {
        showScene('marioVictory');
    } else if (characterEmotions.peach <= -2) {
        showScene('ending1');
    } else if (characterEmotions.daisy >= 2) {
        showScene('ending2');
    } else if (characterEmotions.bowser >= 2) {
        showScene('ending3');
    } else {
        showScene('epilogue');
    }
}

startGame();
