let button = document.getElementById("baten");
        button.addEventListener("click", myFunction);
        function myFunction() {
            jumlahTable();

            var body = document.getElementsByTagName("body")[0];
            var toAdd = document.createDocumentFragment();
            let nomor = document.getElementById("nomor").value;

            for (var i = 0; i < 2; i++) {
                var table = document.createElement('table');
                var tBody = document.createElement("tbody");
                var spasi = document.createElement("br");
                var text  = document.createTextNode("Masukan nilai matrix " + i);
                var baten = document.createElement("button");
                for (var o = 0; o < nomor; o++) {
                    var row = document.createElement("tr");
                    for (var j = 0; j < nomor; j++) {
                        var cell = document.createElement("td");
                        var input = document.createElement("input");
                        input.id = "input" + j;
                        input.setAttribute("type", "number");
                        table.appendChild(text);
                        cell.appendChild(input);
                        row.appendChild(cell);
                    }
                    tBody.appendChild(row);
                    
                }

                table.appendChild(tBody);
                table.id = 'table' + i;
                table.setAttribute("border", "0");
                toAdd.appendChild(table);
                table.appendChild(spasi);
            }

            body.appendChild(toAdd);
            table.appendChild(baten);
        }

        function jumlahTable() {
            for (let m = 0; m < 2; m++) {
                let table = document.getElementById("table" + m);
                if (table != null) {
                    table.parentNode.removeChild(table);
                }
            }
        }