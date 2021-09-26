import refs from './refs'
import themes from './themes';
const { checkBoxBtn, bodyEl } = refs;
const { LIGHT, DARK } = themes;

checkBoxBtn.addEventListener('change', changeTheme)

function changeTheme(e) {
    const checkBoxStatus = e.target.checked;
    if (checkBoxStatus) {
        bodyEl.classList.remove(LIGHT);
        bodyEl.classList.add(DARK);
        localStorage.setItem('theme', 'dark');
    } else {
        bodyEl.classList.remove(DARK);
        bodyEl.classList.add(LIGHT);
        localStorage.removeItem('theme');
        localStorage.setItem('theme', 'light');
    }
}

let themeStatus = localStorage.getItem('theme')
if (themeStatus === 'dark') {
    // bodyEl.classList.remove(LIGHT);
    bodyEl.classList.add(DARK);
    localStorage.setItem('theme', 'dark');
    checkBoxBtn.checked = true;
} else {
    bodyEl.classList.remove(DARK);
    bodyEl.classList.add(LIGHT);
    localStorage.setItem('theme', 'light');
    checkBoxBtn.checked = false;
}
//============================== не рабочий вариант ===========

// function changeTheme(e) {
//     const checkBoxStatus = e.target.checked;
//     bodyEl.classList.toggle('dark-theme');
//     bodyEl.classList.toggle('light-theme');

//     let theme = checkBoxStatus ? 'dark-theme' : 'light-theme';    
//     localStorage.setItem('theme', theme);

// }

// let theme = localStorage.getItem('theme');
// console.log(theme)

// if (!theme) {
//     let theme = 'light-theme';
//     localStorage.setItem('theme', theme);
// }

// bodyEl.classList.add(theme);
// checkBoxBtn.checked = theme === 'light-theme' ? true : false;
//============================================


