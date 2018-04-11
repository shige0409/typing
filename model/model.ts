class Model {
    public lang: string;
    constructor(lang:string) {
        this.lang = lang;
    }

    getWords(){
        let xml = new XMLHttpRequest();
        xml.onreadystatechange = function(){
            if(xml.readyState === 4) {
                
            }
        }
        xml.open('GET', `ajax.php?lang=${this.lang}`, true);
    }
}