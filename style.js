// const toggles = document.querySelectorAll('.toggle')
// const good = document.querySelector('#good')
// const cheap = document.querySelector('#cheap')
// const fats = document.querySelector('#fast')

// toggles.forEach(toggle => toggle.addEventListner('change', (e) => doTheTrick(e.target)))

// function doTheTrick(theClickedOne){
//     if(good.checked && cheap.checked && fats.checked){
//         if(good === theClickedOne){
//             fast.checked = false
//         }
//         if(cheap === theClickedOne){
//             good.checked = false
//         }
//         if(fast === theClickedOne){
//             cheap.checked = false
//         }
//     }
// }

const toggles = document.querySelectorAll('.toggle');
const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)));

function doTheTrick(theClickedOne) {
    if (good.checked && cheap.checked && fast.checked) {
        if (good === theClickedOne) {
            fast.checked = false;
        }
        if (cheap === theClickedOne) {
            good.checked = false;
        }
        if (fast === theClickedOne) {
            cheap.checked = false;
        }
    }
}
