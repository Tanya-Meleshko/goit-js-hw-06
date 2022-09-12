// Напиши скрипт управления формой логина.

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
//     что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект,
//     где имя поля будет именем свойства, а значение поля - значением свойства.
//     Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.

const formEl = document.querySelector('.login-form');
// const buttonLoginEl = document.querySelector('button');

const onFormSubmit = event => {
  event.preventDefault();
  // const { elements } = event.currentTarget;
  // const { login, password } = elements;

  //   const {
  //     elements: { email, password },
  //   } = event.currentTarget;

  const elements = event.currentTarget.elements;
  const email = elements.email.value;
  const password = elements.password.value;
  //   if (email.value === '' || password.value === '') {
  //     alert('Please fill in all the fields!');
  //   }
  if (email === '' || password === '') {
    alert('Please fill in all the fields!');
  }
  //   const userData = { email: email.value, password: password.value };
  const userData = { email, password };

  console.log(userData);

  event.currentTarget.reset();
};

formEl.addEventListener('submit', onFormSubmit);
