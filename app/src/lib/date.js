 export const padTo2Digits = (num) => {
  return num.toString().padStart(2, '0');
}
export const formatDate = (date) => {
  console.log(date);
  if (date){
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()),
  ].join('-');
}
}



