const currencies = [
	{
		code: "AZN",
		quantity: 1,
		rate: 1.6262,
		name: "აზერბაიჯანული მანათი",
		date: "2022-10-21T17:44:40.189Z",
		validFromDate: "2022-10-22T00:00:00.000Z",
	},
	{
		code: "USD",
		quantity: 1,
		rate: 2.7569,
		name: "აშშ დოლარი",
		date: "2022-10-21T17:44:40.189Z",
		validFromDate: "2022-10-22T00:00:00.000Z",
	},
	{
		code: "AED",
		quantity: 10,
		rate: 7.5059,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		date: "2022-10-21T17:44:40.189Z",
		validFromDate: "2022-10-22T00:00:00.000Z",
	},
	{
		code: "AMD",
		quantity: 1000,
		rate: 6.8303,
		name: "სომხური დრამი",
		date: "2022-10-21T17:44:40.189Z",
		validFromDate: "2022-10-22T00:00:00.000Z",
	},
];

const filteredArr = currencies.filter((el, index, arr) => {
	return el.rate > 5;
});

// console.log(filteredArr);

const firstEl = currencies.find((el) => {
	return el.rate > 5;
});

// console.log(firstEl);

const isSomeTrue = currencies.some((element) => {
	return element.rate > 10;
});

// console.log(isSomeTrue);

const isEveryTrue = currencies.every((currency) => {
	return currency.rate > 1;
});

const mappedArr = currencies.map((currency) => {
	return {
		name: currency.name,
		rate: currency.rate,
	};
});

console.log(mappedArr);

// console.log(isEveryTrue);

if (isEveryTrue) {
	console.log(" run this code");
}

const myArr = [2, 3, 4];
let arrSum = 0;
myArr.forEach((el, index) => {
	if (index > 5) {
		console.log("is greater than 5");
	}
	arrSum += el;
	// console.log(`arr[i]`, "i", i, "el", el);
});

console.log(arrSum);

// currencies.forEach(myFunction);

// const myArrFunct = (element) => {};

// {
// 	let y = 0;

// 	var x = 0;
// 	b = 9
// }

// console.log(x);

// const a = 10;

// if (1) {
// 	const a = 20;

// 	if (1) {
// 		const a = 30;
// 	}
// 	if (1) {
// 		console.log(a);
// 	}
// }

function logUserInfo() {
	console.log(`user name is alina, user age is 26`);
}

// logUserInfo();

let name = "tea";
let age = 20;
let userName = "giorgi";
let userAge = 28;

function logPassedUserInfo(name, age) {
	age += 5;
	console.log(`user name is ${name}, user age is ${age}`);
	logUserInfo();
}

// logPassedUserInfo(userName, userAge);

// logPassedUserInfo("levani", "text");

// console.log(age);

function createUserObj(userName, userAge) {
	let myObj = {
		name: userName,
		age: userAge,
	};

	let myArr = [];

	return myObj;
	console.log("after return");
}

// let ab = sum(2, 3);
// let ab2 = sum(3, 5);

const user1 = createUserObj("alina", 20);
const user2 = createUserObj("nino", 30);
// console.log(user1);

const users = [user1, user2];

// const user3 = {
// 	name: "gio",
// 	age: 24,
// };
// const user4 = {
// 	name: "gio",
// 	age: 24,
// };
const myFunction2 = createUserObj;

// createUserObj("nika", 30);

// sum(2, 5);

function sum(a, b) {
	console.log(a + b);
}

const mySum = function (a, b) {
	console.log(a + b);
};

const arrowFunction = (a, b) => {
	console.log(a + b);
};

function callFunction(functionAsArg) {
	console.log(functionAsArg);

	functionAsArg(2, 4);
}

function sumWithReturn(a, b) {
	return a + b;
}

// callFunction(sum);

// arrowFunction(sumWithReturn(1, 3), 5);

// mySum(2, 4);
