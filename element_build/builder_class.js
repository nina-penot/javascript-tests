class Drawer {
    /**
     * About mode: select only between "img" or "css"
     * @param {*} links_obj 
     * @param {*} mode img || css
     */
    constructor(links_obj, mode = "css") {
        this.fileamount = links_obj.length;
        this.links = links_obj;
        this.mode = mode;
        this.colorlist = ["red", "orange", "yellow", "green", "cyan", "blue", "purple"];

        this.drawerfront = "";
        this.drawerback = "";

        this.drawer_file = "";

        this.drawer = "";
    }

    add_link(link, textcontent) {
        this.links_obj[textcontent] = link;
    }

    append_drawer(parent) {
        parent.appendChild(this.drawer);
    }

    //Maybe should have an image use mode and a css use mode
    //it's possible to just create a whole style sheet for this
    /**
     * var style = document.createElement("style")
    * style.appendChild(document.createTextNode(""))
    * document.head.appendChild(style);
     */

    //style.sheet.insertRule('.first{ color:red }', style.sheet.cssRules.length);
    //style sheets can be checked with document.styleSheets
}