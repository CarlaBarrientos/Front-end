alert(null || 2 || undefined);//1. alert 2
alert(alert(1) || 2 || alert(3));//2. alert 1, alert 2
alert(alert(1) && alert(2));//3. alert 1, alert undefined
alert(null || 2 && 3 || 4);//4. alert 3
//5.
const age1 = 50;
if (age1 >= 14 && age1 <= 90)
    console.log('The age is between 14 and 90.')
else
    console.log('The age is not between 14 and 90.')
alert(alert(null) ?? null ?? 2 ?? alert(3));//6. alert null, alert 2
//7. Sentences that will prompt are the first and third, the first one is first
if (-1 || 0) alert('first')
if (-1 && 0) alert('second')
if (null || -1 && 1) alert('third')
//8. alert Anonymous
let user;
alert(user ?? "Anonymous");
//9. alert Supercoder
let firstName = null;
let lastName = null;
let nickName = "Supercoder";
alert(firstName ?? lastName ?? nickName ?? "Anonymous");
//10. alert Greetings!
let age = prompt('age?', 18);
let message = (age < 3) ? 'Hi, baby!' :
    (age < 18) ? 'Hello' :
        (age < 100) ? 'Greetings!' :
            'What an unusual age!';
alert(message);
//11.
5 > 4;//true
"aplle" > "pineapple";//false
"2" > "12";//true
undefined == null;//true
undefined === null;//false
null == "\n0\n";//false
null === +"\n0\n";//false

