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
var age = ['6-11 rokov',
    '12-15 rokov',
    '15-18 rokov',
    '19-25 rokov',
    '25-45 rokov',
    '45-65 rokov',
    '65-80 rokov',
    'nad 80 rokov'
];
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
ctx.font = "18pt Arial";
ctx.textAlign = "center";

var questionSetIndex = 0;

var correctWordsCount = 0;
var regularDistractorsCount = 0;
var specialDistractorsCount = 0;

var timeInterval = 1000;


$(document).ready(function () {
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

function finishExperiment() {
    hideButtons();
    $('#canvas').hide();
    $('#graph').fadeIn('fast');
    // $('#afterTestMargin').show();
    showAndScrollToElement($('#thankYou'));
    $('#startExperiment').hide();

    var c = document.getElementById("resultGraph").getContext("2d");

    var data = {
        labels: ['Správne zopakované slová', 'Normálne distraktory', 'Špeciálne distraktory'],
        datasets: [
            {
                fillColor: "rgba(52,40,255,1)",
                strokeColor: "rgba(52,40,255,1)",
                pointColor: "rgba(52,40,255,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [
                    (Math.round((correctWordsCount * 100.0 / correctRepeatedWords.flat().length) * 100) / 100).toFixed(2),
                    (Math.round((regularDistractorsCount * 100.0 / regularDistractors.flat().length) * 100) / 100).toFixed(2),
                    (Math.round((specialDistractorsCount * 100.0 / specialDistractors.flat().length) * 100) / 100).toFixed(2)
                ]
            }
        ]
    };

    var newopts = {
        responsive: true,
        inGraphDataShow: true,
        datasetFill: true,
        scaleLabel: "<%=value%>",
        scaleTickSizeRight: 5,
        scaleTickSizeLeft: 5,
        scaleTickSizeBottom: 5,
        scaleTickSizeTop: 5,
        scaleFontSize: 16,
        scaleOverride: true,
        scaleSteps: 10,
        scaleStepWidth: 10,
        scaleStartValue: 0,
        canvasBorders: true,
        canvasBordersWidth: 3,
        canvasBordersColor: "black",
        graphTitle: "Falošná pamäť",
        graphTitleFontFamily: "'Arial'",
        graphTitleFontSize: 24,
        graphTitleFontStyle: "bold",
        graphTitleFontColor: "#666",
        legend: true,
        legendFontFamily: "'Arial'",
        legendFontSize: 12,
        legendFontStyle: "normal",
        legendFontColor: "#666",
        yAxisLabel: "Úspešnosť v %",
        yAxisFontFamily: "'Arial'",
        yAxisFontSize: 16,
        yAxisFontStyle: "normal",
        yAxisFontColor: "#666"
    };

    new Chart(c).Bar(data, newopts);
    sendResults();
}

function sendResults() {
    var formData = {};
    formData.sex = $('input[name=sex]:checked').val();
    formData.age = $('input[name=age]:checked').val();
    formData.education = $('input[name=education]:checked').val();
    formData.correct = `${(Math.round((correctWordsCount * 100.0 / correctRepeatedWords.flat().length) * 100) / 100).toFixed(2)}%`;
    formData.normal = `${(Math.round((regularDistractorsCount * 100.0 / regularDistractors.flat().length) * 100) / 100).toFixed(2)}%`;
    formData.special = `${(Math.round((specialDistractorsCount * 100.0 / specialDistractors.flat().length) * 100) / 100).toFixed(2)}%`;
    formData.formDataNameOrder = '["sex","age","education", "correct", "normal", "special"]';
    formData.formGoogleSheetName = 'responses';
    formData.formGoogleSendEmail = 'false.memory@test.com';

    console.log(formData);

    var url = 'https://script.google.com/macros/s/AKfycbyN2TZHPRxM2sxVr7vr2Dh-IJXPVsgYlbEYUuyXLJMRZCnyHIA/exec';
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    // xhr.withCredentials = true;
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        console.log(xhr.status, xhr.statusText);
        console.log(xhr.responseText);
        $('#sendingSuccess').fadeIn('slow');
        return;
    };
    // url encode form data for sending as post data
    var encoded = Object.keys(formData).map(function (k) {
        return encodeURIComponent(k) + "=" + encodeURIComponent(formData[k]);
    }).join('&');
    xhr.send(encoded);
    document.getElementById('startExperiment').disabled = true;
}

function beginExperiment() {
    if (questionSetIndex === keywords.length) {
        finishExperiment();
        questionSetIndex += 1;
        return;
    }

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
        setTimeout(showWord.bind(null, index + 1, setIndex), timeInterval);

    }
}

function showButtons(setIndex) {
    if (questionSetIndex === keywords.length) {
        setTextToCanvas("Označte slová a ukončite tlačidlom KONIEC");
        document.getElementById('startExperiment').innerHTML = 'KONIEC'
    } else {
        setTextToCanvas("Označte slová a kliknite na tlačidlo ŠTART");
    }

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

    correctRepeatedWords[questionSetIndex - 1].forEach(word => {
        if (word === buttonValue) {
            correctWordsCount++;
        }
    });
    regularDistractors[questionSetIndex - 1].forEach(word => {
        if (word === buttonValue) {
            regularDistractorsCount++;
        }
    });
    specialDistractors[questionSetIndex - 1].forEach(word => {
        if (word === buttonValue) {
            specialDistractorsCount++;
        }
    });
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
