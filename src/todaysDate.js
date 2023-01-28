
export function displayToday() {

  //let meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro',
  //'novembro', 'dezembro'];

  // function addZero(dia) {
  //   return dia < 10 ? '0' + dia : dia;
  // }

  //let hoje = addZero(new Date().getDate()) + ' de ' + meses[new Date().getMonth()] + ', ' + new Date().getFullYear();

  document.querySelector('.today').textContent = new Date().toDateString();

  //console.log('.. Hoje é ' + hoje + ' ..');

}

displayToday();

