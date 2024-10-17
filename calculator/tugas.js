const readline = require("readline-sync");

let history = [];

function mainMenu() {
  console.log("Menu Utama:");
  console.log("1. Kalkulasi");
  console.log("2. Lihat Riwayat");
  console.log("3. Keluar");
  const choice = readline.question("Pilih Menu: ");
  switch (choice) {
    case "1":
      calculationMenu();
      break;
    case "2":
      printHistory();
      mainMenu();
      break;
    case "3":
      exitConfirmation();
      break;
    default:
      console.log("Pilihan tidak tersedia. Silakan coba lagi.");
      mainMenu();
  }
}

function calculationMenu() {
  console.log("Menu Kalkulasi:");
  console.log("1. Pertambahan");
  console.log("2. Pengurangan");
  console.log("3. Perkalian");
  console.log("4. Pembagian");
  console.log("5. Modulus");
  console.log("6. Akar");
  console.log("7. Sinus");
  console.log("8. Cosinus");
  console.log("9. Tangens");
  const choice = readline.question("Pilih Operator: ");
  switch (choice) {
    case "1":
      performCalculation("+");
      break;
    case "2":
      performCalculation("-");
      break;
    case "3":
      performCalculation("*");
      break;
    case "4":
      performCalculation("/");
      break;
    case "5":
      performCalculation("%");
      break;
    case "6":
      performCalculation("akar");
      break;
    case "7":
      performCalculation("sin");
      break;
    case "8":
      performCalculation("cos");
      break;
    case "9":
      performCalculation("tan");
      break;
    default:
      console.log("Pilihan tidak tersedia. Silakan coba lagi.");
      calculationMenu();
  }
}

function performCalculation(operator) {
  let angkaPertama;
  while (true) {
    angkaPertama = readline.question("Masukkan Angka Pertama: ");
    while (angkaPertama === "" || isNaN(angkaPertama)) {
      console.log("Harus Memasukkan Angka, silakan coba lagi");
      angkaPertama = readline.question("Masukkan Angka Pertama: ");
    }
    angkaPertama = parseFloat(angkaPertama);
    break;
  }

  let angkaKedua;
  if (operator !== "akar") {
    while (true) {
      angkaKedua = readline.question("Masukkan Angka Kedua: ");
      while (angkaKedua === "" || isNaN(angkaKedua)) {
        console.log("Harus Memasukkan Angka, silakan coba lagi");
        angkaKedua = readline.question("Masukkan Angka Kedua: ");
      }
      angkaKedua = parseFloat(angkaKedua);
      break;
    }
  }

  let hasil;
  switch (operator) {
    case "+":
      hasil = angkaPertama + angkaKedua;
      break;
    case "-":
      hasil = angkaPertama - angkaKedua;
      break;
    case "*":
      hasil = angkaPertama * angkaKedua;
      break;
    case "/":
      if (angkaKedua === 0) {
        console.log("Angka kedua tidak boleh 0");
        performCalculation("/");
      } else {
        hasil = angkaPertama / angkaKedua;
      }
      break;
    case "%":
      hasil = angkaPertama % angkaKedua;
      break;
    case "akar":
      hasil = Math.sqrt(angkaPertama);
      break;
    case "sin":
      hasil = Math.sin((angkaPertama * Math.PI) / 180);
      break;
    case "cos":
      hasil = Math.cos((angkaPertama * Math.PI) / 180);
      break;
    case "tan":
      hasil = Math.tan((angkaPertama * Math.PI) / 180);
      break;
  }

  if (isNaN(hasil)) {
    console.log("Hasil tidak dapat dihitung");
  } else {
    console.log(`Hasil: ${hasil}`);
    history.push({ angkaPertama, angkaKedua, operator, hasil });
  }

  const response = readline.question(
    "Apakah Anda ingin melanjutkan perhitungan? (y/n): "
  );
  if (response.toLowerCase() === "y ") {
    calculationMenu();
  } else {
    mainMenu();
  }
}

function printHistory() {
  console.log("Riwayat Kalkulasi:");
  history.forEach((item, index) => {
    console.log(
      `#${index + 1}: ${item.angkaPertama} ${item.operator} ${
        item.angkaKedua
      } = ${item.hasil}`
    );
  });
}

function exitConfirmation() {
  const response = readline.question("Apakah Anda yakin ingin keluar? (y/n): ");
  if (response.toLowerCase() === "y") {
    console.log("Sampai jumpa lagi!");
    process.exit();
  } else {
    mainMenu();
  }
}

mainMenu();
