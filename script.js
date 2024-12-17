const hourFont = document.querySelector('#font-card>h1');
const minFont = document.querySelector('#font-card1>h1');
const secFont = document.querySelector('#font-card2>h1');
let settingDropCard = document.querySelector('.option1').value;
let oldsecond,currentSeconds,oldmin,currentmin,oldhour,currenthour;
let dlhour,dlmin;
let drop = 1;
let openst = 0;
let openbg = 0;

const bgsetRadio = document.querySelector('#option1-bg');
const colorsetRadio = document.querySelector('#option2-bg');
const fileInput = document.getElementById('fileInput');
const colorInput = document.getElementById('colorInput');
const background = document.body;


setInterval(() => {
    currentSeconds = String(new Date().getSeconds()).padStart(2, '0');
    currentmin = String(new Date().getMinutes()).padStart(2, '0');
    currenthour = String(new Date().getHours()).padStart(2, '0');

    settingDropCard = document.querySelector('.option1').value

    oldsecond = currentSeconds ;
    dlmin = parseInt(currentmin)+30 % 60;
    dlhour = parseInt(currentmin)+30 %60;

    hourFont.textContent = currenthour;
    minFont.textContent = currentmin;
    secFont.textContent = currentSeconds;


    function dropcard(){
        function createnewdrop() {
            const newSecDiv = document.createElement('div');
            newSecDiv.id = 'sub-card' + drop;
            newSecDiv.className = 'sub-card1';
            document.getElementById('second').appendChild(newSecDiv);
    
            const newSech1 = document.createElement('h1');
            newSech1.textContent = oldsecond;
            newSecDiv.appendChild(newSech1);
    
            if(parseInt(currentmin) > oldmin){
                const newMinDiv = document.createElement('div');
                newMinDiv.id = 'sub-cardm' + drop;
                newMinDiv.className = 'sub-card1';
                document.getElementById('minute').appendChild(newMinDiv);
        
                const newSech2 = document.createElement('h1');
                newSech2.textContent = oldmin;
                newMinDiv.appendChild(newSech2);
            }
            if(parseInt(currenthour) > oldhour){
                const newHourDiv = document.createElement('div');
                newHourDiv.id = 'sub-cardh' + drop;
                newHourDiv.className = 'sub-card1';
                document.getElementById('hour').appendChild(newMinDiv);
        
                const newSech3 = document.createElement('h1');
                newSech3.textContent = oldmin;
                newHourDiv.appendChild(newSech3);
            }
    
        }
    
        createnewdrop();
    
        drop += 1;
        if (drop == 30) {
            for (let c = 1; c <= 30; c++) {
                const divToRemove = document.querySelector('#sub-card' + c);
                if (divToRemove) {
                    divToRemove.remove();
                }
            }
            if(parseInt(currentmin) == dlmin){
                for (let b = 1; b <= 30; i++) {
                    const divToRemove = document.querySelector('#sub-cardm' + b);
                    if (divToRemove) {
                        divToRemove.remove();
                    }
                }
            }
            if(parseInt(currenthour) == dlhour){
                for (let i = 1; i <= 30; i++) {
                    const divToRemove = document.querySelector('#sub-cardh' + i);
                    if (divToRemove) {
                        divToRemove.remove();
                    }
                }
            }
            drop = 1;
        };
    }
    if (settingDropCard == 1){
        dropcard()
    }
    oldmin = currentmin;
    oldhour = currenthour;
}, 1000);
function extend(){
    if(openst == 0){
        document.querySelector('#settings-card').style.display='flex';
        openst = 1
    }else if(openst ==1){
        document.querySelector('#settings-card').style.display='none';
        openst = 0
    }
}
let opendre = 0;
function extend1(){
    if (opendre == 0){
        document.querySelector('#dropcard-setting').style.height = '100px';
        opendre = 1;
    }else if(opendre == 1){
        document.querySelector('#dropcard-setting').style.height = '40px';
        opendre = 0;
    }
};
function extend3(){
    if (openbg== 0){
        document.querySelector('#bg-setting').style.height = '300px';
        openbg= 1;
    }else if(openbg == 1){
        document.querySelector('#bg-setting').style.height = '40px';
        openbg = 0;
    }
};

bgsetRadio.addEventListener('change', function() {
    if (bgsetRadio.checked) {
      fileInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function(e) {
            background.style.backgroundImage = `url('${e.target.result}')`;
            background.style.backgroundColor = '';
          };
          reader.readAsDataURL(file);
        }
      });
    }
  });

colorsetRadio.addEventListener('change', function() {
    if (colorsetRadio.checked) {
        colorInput.addEventListener('input', function(event) {
        background.style.backgroundColor = event.target.value;
        background.style.backgroundImage = '';
      });
    }
});