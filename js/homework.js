// დავალება:
// 1. გამოიყენეთ const currentDay = new Date().getDay(); ცვლადი;   currentDay ცვლადი გვაძლევს რეალურ კვირის დღეს რიცხვითი სახით 0 - არის კვირა, 1 - არის ორშაბათი და ასე შემდეგ.( 0 - 6 ამდე რიცხვს აბრუნებს სადაც 6 არის შაბათი) , დავწეროთ switch სადაც შევამოწმებთ currentDay-ს და 0 ის შემთხვევაში console.log ში გამოვიტანთ სიტყვას - კვირა, 1 ის შემთხვევაში - ორშაბათს და ასე შემდეგ 6 - შაბათი.
const currentDay = new Date().getDay();

console.log(currentDay);

let weekDays = ["sunday", "monday"];
let dayName;

// dayName = weekDays[currentDay]

switch (currentDay) {
	case 0:
		dayName = "კვირა";
		// dayName = weekDays[0]
		break;
	case 1:
		dayName = "ორშაბათი";
		break;
	case 2:
		dayName = "სამშაბათი";
		break;
	case 3:
		dayName = "ოთხშაბათი";
		break;
	case 4:
		dayName = "ხუთშაბათი";
		break;
	case 5:
		dayName = "პარასკევი";
		break;
	case 6:
		dayName = "შაბათი";
		break;

	default:
		break;
}

console.log(dayName);

// 2. დაწერეთ for ციკლი, 0 დან 50 - მდე console.log ში დაბეჭდეთ ინდექსი i
for (let i = 0; i < 50; i++) {
	// console.log(i);
}

// 3. დაწერეთ while ციკლი 0 დან 150 - მდე console.log ში დაბეჭდეთ ინდექსი i
let a = 0;
while (a < 150) {
	// console.log(a);
	a++;
}

// 4. დაწერეთ do while ციკლი 0 დან 100 - მდე console.log ში დაბეჭდეთ ინდექსი i
let b = 0;
do {
	// console.log(b);
	b++;
} while (b < 100);

// 5. შექმენით ცვლადი და მიანიჭეთ ცარიელი მასივი, შემდეგ დაწერეთ Loop ( for ან while ან do while ) 1 დან 100 - მდე ამ მასივში ჩაწერეთ ინდექსი გამრავლებული ინდექსზე (i * i); გამოიყენეთ  push მეთოდი

const myArr = [];

for (let i = 1; i <= 100; i++) {
	myArr.push(i * i);
}

// console.log(myArr);
