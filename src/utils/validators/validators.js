export const required = value => {
  if (value) return undefined
  return 'Обязательное поле' 
}

export const maxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength) return `Максимальная длина ${maxLength} символов`
  return undefined
}
