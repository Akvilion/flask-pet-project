var i = 0;

var element = {
    i:0,
    t:0,
    addRow(){

        var array = ["Adress","Index","Phone","Zip"];

        let a = document.getElementById("container");
        let newElem = document.createElement("input");
        newElem.setAttribute("type", "text");
        newElem.setAttribute("id", "z"+`${this.i++}`);

        var elem = document.createElement("p");

        let text = document.createTextNode('Ім\`я стовпця');
        let text1 = document.createTextNode('Тип даних');

        var selectList = document.createElement("select");
        selectList.setAttribute("id", "S"+`${this.t++}`);
        

        for (var i = 0; i < array.length; i++) {
            var option = document.createElement("option");
            option.setAttribute("value", array[i]);
            option.text = array[i];
            selectList.appendChild(option);
        }      

        elem.appendChild(text);
        elem.appendChild(newElem);
        elem.appendChild(text1);
        elem.appendChild(selectList);
        a.appendChild(elem)

    },
    delRow(){
        let a = document.getElementById("container");
        a.removeChild(a.childNodes[a.childNodes.length-1]);
        this.i--;
        this.t--;

    },
    send: function(){
        return('hello')
    }
};





