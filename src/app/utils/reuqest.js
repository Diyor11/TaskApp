
export default function request(isSuccess, delay, content) {
  return new Promise((resolve, rej) => {
    setTimeout(() => {
      if(isSuccess) resolve(content || "Reuqested succes done!!!")
      else rej(content || "Reuqested failed  :( ???")
    }, delay)
  })
}