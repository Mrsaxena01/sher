let p = document.querySelector("p");
let btn = document.querySelector("button");
const api = "https://hindi-quotes.vercel.app/random";

btn.addEventListener("click", getQuote)

function getQuote(){
fetch(api)
  .then((data) => data.json())
  .then((item) => {
    if (item.type == "sad") {
     p.innerText = `"${item.quote}"`
    }else{
        getQuote()
    }
  });
}
