var keywords = [
        ['dvere', 'sklo', 'záves', 'tieň', 'rímsa', 'parapet', 'dom', 'otvoriť', 'záclona', 'rám', 'výhľad', 'vánok', 'kľučka', 'stena', 'žalúzie'],
        ['posteľ', 'odpočinok', 'bdieť', 'unavený', 'sen', 'zobudiť', 'ticho', 'deka', 'ležať', 'pohoda', 'chrápanie', 'driemať', 'pokoj', 'zívať', 'ospalý'],
        ['kyslý', 'cukrík', 'trpký', 'dobrý', 'cukor', 'ochutnať', 'zub', 'pekný', 'med', 'malinovka', 'čokoláda', 'srdce', 'zákusok', 'torta', 'koláč'],
        ['stôl', 'sedieť', 'nohy', 'sedadlo', 'gauč', 'stolík', 'ležadlo', 'pohovka', 'drevo', 'vankúš', 'otáčať', 'kreslo', 'sedenie', 'hojdanie', 'lavica'],
        ['kopec', 'údolie', 'vyliezť', 'končiar', 'vrchol', 'krtinec', 'štít', 'planina', 'ľadovec', 'kamzík', 'bicykel', 'horolezec', 'rozloha', 'strmý', 'lyžovať'],
        ['navliecť', 'špendlík', 'šaty', 'šitie', 'ostrý', 'uzlík', 'pichnutie', 'náprstok', 'niť', 'tŕň', 'ublížiť', 'injekcia', 'striekačka', 'látka', 'pletenie']
    ]
;
var buttonValues = [
    ['okno', 'sklo', 'lavica', 'dom', 'dvere', 'trpký', 'vrchol', 'posteľ', 'med', 'látka', 'stena', 'drevo', 'parapet', 'žalúzie', 'strmý', 'kľučka'],
    ['bdieť', 'ospalý', 'malinovka', 'otvoriť', 'ostrý', 'šitie', 'horolezec', 'spať', 'sen', 'zobudiť', 'driemať', 'sedadlo', 'ticho', 'zívať', 'rozloha', 'koláč'],
    ['zákusok', 'čokoláda', 'pokoj', 'pohoda', 'med', 'tieň', 'cukor', 'torta', 'sedieť', 'šaty', 'injekcia', 'sladký', 'kamzík', 'cukrík', 'sedenie', 'ochutnať'],
    ['vankúš', 'stena', 'stolík', 'srdce', 'sedenie', 'údolie', 'zub', 'dobrý', 'uzlík', 'ospalý', 'stolička', 'gauč', 'sen', 'nohy', 'lavica', 'pohovka'],
    ['kopec', 'lyžovať', 'tŕň', 'údolie', 'štít', 'sklo', 'čokoláda', 'otáčať', 'kľučka', 'ležať', 'kamzík', 'bicykel', 'navliecť', 'rozloha', 'pohorie', 'dvere'],
    ['ihla', 'uzlík', 'torta', 'injekcia', 'pletenie', 'špendlík', 'pohoda', 'rímsa', 'ostrý', 'striekačka', 'stôl', 'chrápanie', 'drevo', 'koláč', 'cukor', 'niť']
];

var regularDistractors = [
    ['lavica', 'trpký', 'vrchol', 'posteľ', 'med', 'látka', 'drevo', 'strmý'],
    ['malinovka', 'otvoriť', 'ostrý', 'šitie', 'horolezec', 'sedadlo', 'rozloha', 'koláč'],
    ['pokoj', 'pohoda', 'tieň', 'sedieť', 'šaty', 'injekcia', 'kamzík', 'sedenie'],
    ['stena', 'srdce', 'údolie', 'zub', 'dobrý', 'uzlík', 'ospalý', 'sen'],
    ['tŕň', 'sklo', 'čokoláda', 'otáčať', 'kľučka', 'ležať', 'navliecť', 'dvere'],
    ['torta', 'pohoda', 'rímsa', 'stôl', 'chrápanie', 'drevo', 'koláč', 'cukor']
];

var correctRepeatedWords = [
    ['sklo', 'dom', 'dvere', 'stena', 'parapet', 'žalúzie', 'kľučka'],
    ['bdieť', 'ospalý', 'sen', 'zobudiť', 'driemať', 'ticho', 'zívať'],
    ['zákusok', 'čokoláda', 'med', 'cukor', 'torta', 'cukrík', 'ochutnať'],
    ['vankúš', 'stolík', 'sedenie', 'gauč', 'nohy', 'lavica', 'pohovka'],
    ['kopec', 'lyžovať', 'údolie', 'štít', 'kamzík', 'bicykel', 'rozloha'],
    ['uzlík', 'injekcia', 'pletenie', 'špendlík', 'ostrý', 'striekačka', 'niť']
];

var specialDistractors = [
    ['okno'],
    ['spať'],
    ['sladký'],
    ['stolička'],
    ['pohorie'],
    ['ihla']
];

var sex = ['muž', 'žena'];
var age = ['11-14', '15-18', '19-25', '26-45', '46-65'];
var education = [
    'Bez vzdelania alebo neúplné základné vzdelanie (stále študujem na základnej škole)',
    'Základné',
    'Stredoškolské vzdelanie/ odborné vzdelanie',
    'Vysokoškolské – bakalársky titul',
    'Vysokoškolské – magisterský titul',
    'Vysokoškolské – doktorandský titul alebo vyšší'
];

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.font = "30pt Arial";
ctx.textAlign = "center";

var questionSetIndex = 0;

var correctWordsCount = 0;
var regularDistractorsCount = 0;
var specialDistractorsCount = 0;

$(function () {
    var sexDiv = $('#sex');
    var ageDiv = $('#age');
    var educationDiv = $('#education');
    var testContainer = $('#testContainer');

    for (var i = 0; i < sex.length; i++) {
        sexDiv.append(
            `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="sex" id="${'sex' + i}" value="${sex[i]}"
                       onchange="showAndScrollToElement($('#age'))">
                <label class="form-check-label" for="${'sex' + i}">
                    ${sex[i]}
                </label>
            </div>
            `
        )
    }
    for (var i = 0; i < age.length; i++) {
        ageDiv.append(
            `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="age" id="${'age' + i}" value="${age[i]}"
                       onchange="showAndScrollToElement($('#education'))">
                <label class="form-check-label" for="${'age' + i}">
                    ${age[i]}
                </label>
            </div>
            `
        )
    }
    for (var i = 0; i < education.length; i++) {
        educationDiv.append(
            `
            <div class="form-check">
                <input class="form-check-input" type="radio" name="education" id="${'education' + i}" value="${education[i]}"
                       onchange="showAndScrollToElement($('#testContainer'))">
                <label class="form-check-label" for="${'education' + i}">
                    ${education[i]}
                </label>
            </div>
            `
        )
    }

    setTextToCanvas("Pre začatie stlačte ŠTART");
});

function beginExperiment() {
    $("html, body").animate({scrollTop: $('#testContainer').offset().top}, 600);
    showWord(0, questionSetIndex);
    questionSetIndex += 1;
}

function showAndScrollToElement(anchor) {
    anchor.fadeIn('slow');
    $("html, body").animate({scrollTop: anchor.offset().top}, 600);
}

function showWord(index, setIndex) {
    if (index >= keywords[setIndex].length) {
        showButtons(setIndex)
    } else {
        $('#startExperiment').hide();
        hideButtons();
        // Show word
        setTextToCanvas(keywords[setIndex][index]);
        // Proceed to next word
        setTimeout(showWord.bind(null, index + 1, setIndex), 1000);

    }
}

function showButtons(setIndex) {
    setTextToCanvas("Pre začatie stlačte ŠTART");

    $("#buttonsContainer").fadeIn('fast');
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            $('#buttonsContainer').append("<button class ='btn answerButton' id='button" + (i * 4 + j) + "' onclick='evaluateButton(this.id)'>" + buttonValues[setIndex][i * 4 + j] + "</button>")
        }
    }
    $('#startExperiment').show();
}


function evaluateButton(id) {
    document.getElementById(id).disabled = true;
    var buttonValue = document.getElementById(id).innerHTML;

    correctRepeatedWords[questionSetIndex-1].forEach(word => {
        if (word === buttonValue) {
            correctWordsCount++;
        }
    });
    regularDistractors[questionSetIndex-1].forEach(word => {
        if (word === buttonValue) {
            regularDistractorsCount++;
        }
    });
    specialDistractors[questionSetIndex-1].forEach(word => {
        if (word === buttonValue) {
            specialDistractorsCount++;
        }
    });

    console.log(`Correct words: ${correctWordsCount}, regular distractors: ${regularDistractorsCount}, special distractors: ${specialDistractorsCount}`)
}

function hideButtons() {
    $("#buttonsContainer").fadeOut('fast');
    document.getElementById('buttonsContainer').innerHTML = "";
}

function setTextToCanvas(text) {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 500, 400);
    ctx.fillStyle = "#000000";
    ctx.fillText(text, 250, 200);
}
