import './header.css';
import { DivComponent } from "../../common/classes/div-component.js";

export class Header extends DivComponent{
    constructor (appState) {
        super() 
        this.appState = appState
    } 
    render() {
        this.element.innerHTML = "";
        this.element.classList.add("header")
        this.element.innerHTML = `
        <a href ="/">
        <img src = "../../../static/logo.svg" alt = "Логотип">
        </a>
        <div class = "menu">
        <a class = "menu__link" href = "#saerch">
        <img src = "../../../static/search.svg" alt = "Поиск иконка ">
        Поиск книг
        </a>
        <a class = "menu__link" href = "#favorites">
        <img src = "../../../static/favorites.svg" alt = "Избранное иконка">
        Избранное
        </a>
        <div class ="menu__counter">
        ${this.appState.favorites.length + 10}
        </div>
        </div>
        `
        return this.element
    }
}