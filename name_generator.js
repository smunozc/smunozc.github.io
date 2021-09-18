let pButton = document.getElementById('pButton');
let count = 0;

pButton.addEventListener('click', () => {
    let realName = document.getElementById('nameGenerator_realName').value;

    if (realName.length > 1) {
        let display = document.getElementById('nameGenerator_display');
        let nameType = document.getElementById('nameGenerator_nameType').value;
        let endName = "";

        if (realName != null && realName.length > 0) {
            count++;
        }

        // A little joke
        if (count == 10) {
            if (confirm("You're bored too, right " + realName + "?")) {
                alert("Keep it going then :)");
            } else {
                alert("Sure...");
            }
        }

        let RUS_endings = ['nik', 'sko', 'mir'];
        let ESP_endings = ['ez', 'oz', 'ro'];
        let vocals = ['a', 'e', 'i', 'o', 'u'];

        let RUS_selector = Math.floor(Math.random() * (RUS_endings.length - 0)) + 0;
        let ESP_selector = Math.floor(Math.random() * (ESP_endings.length - 0)) + 0;
        let isFinished = false;

        switch (nameType) {
            case 'rus':
                for (let i = 0; i < realName.length && !isFinished; i++) {
                    if (i >= (realName.length / 2) - 1) {
                        for (let j = 0; j < vocals.length; j++) {
                            if (realName.charAt(i) == vocals[j]) {
                                endName = realName.substring(0, i + 1);
                                endName += RUS_endings[RUS_selector];
                                isFinished = true;
                            }
                        }
                    }
                }
                break;

            case 'esp':
                for (let i = 0; i < realName.length && !isFinished; i++) {
                    if (i >= (realName.length / 2) - 1) {
                        for (let j = 0; j < vocals.length; j++) {
                            if (realName.charAt(i) == vocals[j]) {
                                endName = realName.substring(0, i + 1);
                                endName += ESP_endings[ESP_selector];
                                isFinished = true;
                            }
                        }
                    }
                }
                break;

            default:
                endName = "WTF";
                break;
        }

        display.innerHTML = endName;
    } else {
        alert("Name must be at least 2 characters long");
    }

});