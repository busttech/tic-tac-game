let a = document.querySelectorAll(".box");
let re = document.querySelector("#re");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let count =0;
// playerc playerd
let c =true;
const disableBoxes=()=>{
    for(let box of a){
        box.disabled = true;

    }
}
const showwinner=(nm)=>{
    msg.innerText = `Congratulations, Winner is ${nm}`;
    msgContainer.classList.remove("hide");
    disableBoxes();   
}
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];
a.forEach((box)=>{
    box.addEventListener("click",()=>{
        count++;
        console.log("clicked");
        if(c){
            box.innerText="X";
            c=false;
        }
        else{
            box.innerText="O";
            c=true;
        }
        box.disabled = true;
        let wi = check();
        if (count === 9 && !wi) {
            gameDraw();
        }

    })
    
}
);
const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
  };
const check=()=>{
    for(let p of winPatterns){

        let pos1Val =a[p[0]].innerText;
        let pos2Val =a[p[1]].innerText;
        let pos3Val =a[p[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner");
                showwinner(pos1Val);
                return true;
            }
        }
    };


}
const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
  };
const enableBoxes = () => {
    for (let box of a) {
      box.disabled = false;
      box.innerText = "";
    }
  };
   
re.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);