import { AbstractPage } from "../../common/classes/page";

export class NotFoundPage extends AbstractPage {
    render() {
        const NotFound = document.createElement("div")
        NotFound.innerHTML = "Страницы не существует ошибка 404"
        this.app.innerHTML = ""
        this.app.append(NotFound)
    }
}