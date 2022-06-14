import {createApp} from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
//let id = 2883616949; 

const appConfig = {
    data(){
        return {
            inputValue:'',
            birtdate:'',
            zodiacSign:['Овен', 'Телець','Близнюки','Рак','Лев','Діва','Терези','Скорпіон','Стрілець','Козоріг','Водолій'],
            chineseYearSign: ['Щура', 'Бика', 'Тигра', 'Кролика', 'Дракона', 'Змії', 'Коня', 'Вівці', 'Мавпи', 'Півня', 'Собаки', 'Свині'],
            gender:['чоловік', 'жінка'],
            maincheck: [-1, 5, 7, 9, 4, 6, 10, 5, 7]
            
        }
    },
methods:{
   onSubmit(){
        console.log(`inputValue`, this.inputValue);
    }
   },

computed:{
    inputArray(){
        let inputArray = this.inputValue.toString().split('');
        console.log(inputArray);
    }
    ,
    ivLength(){
        let ivl = this.inputArray.length
        return ivl;
    }
   }
   
   }

   


   
    const app = createApp(appConfig);

    app.mount('#app'); 


   
        
      /* gender (){
        this.inputValue[8]  % 2 == 0 ? 'Жінка' : 'Чоловік'
        console.log (this.inputValue);*/

    
    /*computed() {

        function IDcheck(){
            //let inputcode = document.getElementById("idnumber").value.split("")

            let s = this.inputIDnumber.value.split("")

            console.log(s);

//            let result = 0;
/*for (let i = 0; i < inputcode.length - 1; i++) {
  result += (inputcode[i] * maincheck[i]);
}

let ControlNumber = result - (Math.floor(result / 11) * 11);
console.dir(ControlNumber);

if (ControlNumber == inputcode[9]) {
  
  let gender = inputcode[8] % 2 == 0 ? 'female' : 'male';
  console.log (gender);
 
  let startday = new Date(1899, 12, 31);
  startday.setDate(inputcode.splice(0, 5).join(""));
  
  let now = new Date();
  let diff = 0;
  diff = now.getFullYear() - startday.getFullYear();
  

  if (now.getMonth() < startday.getMonth()) 
  {
      console.log(diff -= 1);
  }
  else if (now.getMonth() == startday.getMonth()) 
  {
      if (now.getDate() < startday.getDate()) 
      {
          console.log(diff -= 1);
      }
  }

  return alert(`The ID is valid. The Birtdate of ID owner is ${startday}.The full age is ${diff}. The Gender is ${gender} ` ); //
}
else {
return alert(`The ID is not valid`);

}

}
*/




