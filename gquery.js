
class gquery{
    constructor(el){
        
        if(el.indexOf('.' >= -1)){
            el = el.replace(".","");
            console.log(el);
            this.elements = document.getElementsByClassName(el);
        }else if (el.indexOf('#') > -1){
            el = el.replace("#", "");
            this.elements = [document.getElementById(el)];
        }else{
            this.elements = document;
        }
        this.elements = document.getElementsByClassName(el);

    }
    addClass(cl){
        var count = 0;
        while(count < this.elements.length){
            this.elements[count].className +=" "+  cl;
            count++;
        }
    }

}function gQuery(el){
    var element = new gquery(el);
    return element;


}
