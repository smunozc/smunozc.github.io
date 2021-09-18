let pButton = document.getElementById('pButton');
pButton.addEventListener('click',()=>{
    let realName = document.getElementById('nameGenerator_realName').value;
    let display = document.getElementById('nameGenerator_display');
    let nameType = document.getElementById('nameGenerator_nameType').value;
    let endName = "";

    let RUS_endings = ['nik','sko','mir'];
    let ESP_endings = ['ez','oz','ro'];
    let vocals = ['a','e','i','o','u'];

    let RUS_selector = Math.floor(Math.random() * (RUS_endings.length - 0)) + 0;
    let ESP_selector = Math.floor(Math.random() * (ESP_endings.length - 0)) + 0;

    switch (nameType) {
        case 'rus':
            for (let i = 0; i < realName.length; i++) {
                if(i >= realName.length/2) {
                    for (let j = 0; j < realName.length; j++) {
                        if(realName.charAt(i) == vocals[j]){
                            endName = realName.substring(0, i + 1);
                            endName += RUS_endings[RUS_selector];
                        }
                    }
                }
            }
            break;
    
        case 'esp':
            for (let i = 0; i < realName.length; i++) {
                if(i >= realName.length/2) {
                    for (let j = 0; j < realName.length; j++) {
                        if(realName.charAt(i) == vocals[j]){
                            endName = realName.substring(0, i + 1);
                            endName += ESP_endings[ESP_selector];
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
});