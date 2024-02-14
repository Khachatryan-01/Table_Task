const wrapper = document.createElement("div");
wrapper.classList.add("wrapper")
document.body.append(wrapper);

const button = document.createElement("button");
button.classList.add("tableButton");
button.innerText = "Table";
wrapper.append(button);

const hoverDisplay = document.createElement("div");
hoverDisplay.classList.add("hoverDisplay");
wrapper.append(hoverDisplay);

const matrix = [];

for (let y = 0; y < 5; y++) {
    const rowElement = document.createElement("div");
    rowElement.classList.add("row");

    matrix[y] = [];

    for (let x = 0; x < 5; x++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.backgroundColor = "#a68a64";

        matrix[y][x] = box

        box.y = y;
        box.x = x;

        box.addEventListener("mouseover", (e) => {
            for (let y = 0; y < box.y + 1; y++) {
                for (let x = 0; x < box.x + 1; x++) {
                    matrix[y][x].style.backgroundColor = "#936639";
                }
            }
        })

        box.addEventListener("mouseleave", (e) => {
            for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                    matrix[y][x].style.backgroundColor = "#a68a64";
                }
            }
        })

        box.addEventListener("click", (e) => {
            console.log(box.x + 1 + "x");
            console.log(box.y + 1 + "y");

            if (window.table) {
                window.table.remove();
            }

            const table = document.createElement("table");

            for (let tr = 0; tr < box.y + 1; tr++) {
                const tr = document.createElement("tr");

                for (let td = 0; td < box.x + 1; td++) {
                    const td = document.createElement("td");

                    tr.append(td);
                }

                table.append(tr);
            }

            wrapper.append(table);
            window.table = table;
        });

        rowElement.append(box);
    }
    hoverDisplay.append(rowElement);
}