const speed = 20;
const duration = 2000;
const textAnim = (id, text, index = 0) => {
    let i = index;
    const element = document.getElementById(id);
    element.innerHTML += text.charAt(i);
    i++;
    if (i > text.length) {
        i = 0;
        setTimeout(() => {
            element.innerHTML = '';
            textAnim(id, text);
        }, duration);
    } else {
        setTimeout(() => textAnim(id,text,i), speed);
    }
};
// element animation 
textAnim("text_Anim", "“We do not remember days, we remember moments.” (Cesare Pavese)");

