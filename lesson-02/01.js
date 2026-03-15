/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и 
наличия разрешений.
* Полученное булевое значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) 
или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = false;
const isVerifiedUser = true;
const hasSpecialPermission = true;
const hasTemporaryPass = false;

let isAccess;

// your code

isAccess =
  (isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass);

if (isAccess) {
  console.log("Доступ разрешен.");
} else {
  console.log(
    "Доступ запрещен: необходимы права администратора или подтвержденный статус.",
  );
}
