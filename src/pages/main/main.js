import { AbstractPage } from "../../common/classes/page.js";
import onChange from 'on-change';
import { Header } from "../../components/header/header.js";

export class MainPage extends AbstractPage {
  constructor(appState) {
    super();
    this.setTitle("Главная страница");
    this.appState = appState
    this.appState = onChange(this.appState,this.appStateHook.bind(this))
  }

  state = {
    bookList: [],
    isloading: false,
    searchValue: "",
    offset: null,
  };

appStateHook(path) {
  if( path === "favorites")
     this.render()
}

  render() {
    const main = document.createElement("div");
    main.innerHTML = `Главная страинца `;
    this.app.innerHTML = "";
    this.app.append(main);
    this.renderHeader()
  }
  renderHeader () {
    const header = new Header(this.appState).render()
    this.app.prepend(header)
  }
}
