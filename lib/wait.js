export default async function wait(milisecond) {
  return new Promise((resolve) => {
    setTimeout(()=>{
        resolve()
    },milisecond)
  });
}
