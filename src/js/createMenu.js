import menuTemplate from '../../templates/menuByArray.handlebars'
import menu from '../menu.json'
import refs from './refs'
const { menuList } = refs;
const finalMenu = menuTemplate(menu)
menuList.insertAdjacentHTML('beforeend', finalMenu)