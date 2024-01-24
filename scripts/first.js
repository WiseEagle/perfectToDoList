const numberOfToDos = prompt("How many to do's do you have?");

const toDoList = {
    numberOfToDos: numberOfToDos,
    toDos: [
        {
            title: 'Get out of bed',
            status: 'done'
        },
    ],
    addToDo: function (toDo) {
        let toDoObject = {
            title: toDo,
            status: 'open'
        };
        this.toDos.push(toDoObject);
    },
    showToDos: function () {
        console.log(`You have ${this.numberOfToDos} to do's`);
        this.toDos.forEach((toDo, index) => {
            console.log(`${index + 1}. ${toDo['title']} - ${toDo['status']}`);
        });
    },
    changeStatus: function (index, status) {
        this.toDos[index]['status'] = status;
    }


};

while (toDoList.toDos.length < numberOfToDos) {
    const toDo = prompt("What do you need to do?");

    toDoList.addToDo(toDo);
}
//const toDo = prompt("What do you need to do?");

//toDoList.addToDo(toDo);
toDoList.showToDos();
/*toDoList.changeStatus(1, 'done');
toDoList.showToDos();*/
