function examEligibility(attendance, feesPaid) {

    if (attendance >= 75 && feesPaid === true) {
        console.log("Allowed for Exam");
    } else {
        console.log("Not Allowed");
    }

}

examEligibility(80, true);

let password = "Abc12345";

let hasUppercase = false;
let hasNumber = false;

for (let char of password) {

    if (char >= "A" && char <= "Z") {
        hasUppercase = true;
    }

    if (char >= "0" && char <= "9") {
        hasNumber = true;
    }
}

if (password.length >= 8 && hasUppercase && hasNumber) {
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}

let numbers = [10, 50, 80, 20, 90, 70];

let largest = numbers[0];
let secondLargest = numbers[0];

for (let num of numbers) {

    if (num > largest) {
        secondLargest = largest;
        largest = num;
    }

    else if (num > secondLargest && num < largest) {
        secondLargest = num;
    }
}

console.log("Second Largest:", secondLargest);

let seats = [false, false, false, false, false, false, false, false, false, false];

let seatNumber = 4;

if (seats[seatNumber] === true) {

    console.log("Seat Already Booked");

} else {

    seats[seatNumber] = true;

    console.log("Seat Booked Successfully");
}

function withdraw(balance, amount) {

    if (amount > balance) {

        return "Insufficient Balance";

    }

    else if ((balance - amount) < 1000) {

        return "Minimum Balance Should Maintain 1000";

    }

    else {

        return "Withdraw Successful";

    }
}

console.log(withdraw(10000, 9500));

let products = ["iphone", "samsung", "realme", "oppo"];

let searchProduct = "realme";

let found = false;

for (let product of products) {

    if (product === searchProduct) {

        found = true;
        break;

    }
}

if (found) {

    console.log("Product Found");

} else {

    console.log("Product Not Found");

}

let age = 20;
let hasVoterId = true;
let citizenship = "Indian";

if (age >= 18) {

    if (hasVoterId === true && citizenship === "Indian") {

        console.log("Eligible to Vote");

    } else {

        console.log("Not Eligible");

    }

} else {

    console.log("Not Eligible");

}

function calculateBill(foodPrice, gst, deliveryCharge, discount) {

    let gstAmount = (foodPrice * gst) / 100;

    let total = foodPrice + gstAmount + deliveryCharge - discount;

    console.log("Total Bill : ₹" + total);
}

calculateBill(400, 5, 50, 20);

let word = "javascript";

let reversedWord = "";

for (let i = word.length - 1; i >= 0; i--) {

    reversedWord += word[i];

}

console.log(reversedWord);

let totalLikes = 0;

function likePost(isLiked) {

    totalLikes = isLiked ? totalLikes + 1 : totalLikes;

    console.log(isLiked ? "Liked ❤️" : "Like 🤍");

    console.log("Total Likes:", totalLikes);
}

likePost(true);
likePost(false);