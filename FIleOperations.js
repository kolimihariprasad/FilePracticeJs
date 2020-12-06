const fs = require('fs');
const prompt = require('prompt-sync')();
const linkedList = require('../DataStructures/DataStructure/LinkedList')
function unOrderedFileOperation() {
    let names = new Array()
    let list
    let listAfterRemovingName = new Array()
    let data =fs.readFileSync('./Files/unorderedReadName.txt', 'utf8',)
    names = data.split('\r\n')
    
    for(let i=0; i< names.length; i++) {
        if(i == 0)
            list = new linkedList(names[i])
        else
            list.append(names[i])
    }

    console.log(JSON.stringify(list))
    let name = prompt("Eenter Name to search: ")
    if(list.searchElement(name)){
        listAfterRemovingName = list.remove(name)
    } else {
        listAfterRemovingName = list.printList()
    }
    console.log(listAfterRemovingName)
    let writeString =""
    for(let i=0; i< listAfterRemovingName.length; i++) {
        writeString += listAfterRemovingName[i]+"\r\n"
    }
    fs.writeFileSync('./Files/unorderedWriteName.txt', writeString,'utf8',)
}
//unOrderedFileOperation()

function OrderedFileOperation() {
    let numbers = new Array()
    let list
    let listAfterRemovingNum = new Array()
    let data =fs.readFileSync('./Files/orderedReadNumbers.txt', 'utf8',)
    numbers = data.split('\r\n')
    
    for(let i=0; i< numbers.length; i++) {
        if(i == 0)
            list = new linkedList(numbers[i])
        else
            list.sortedInsert(numbers[i])
    }

    console.log(JSON.stringify(list))
    let name = prompt("Eenter Number to search: ")
    if(list.searchElement(name)){
        listAfterRemovingNum = list.remove(name)
    } else {
        listAfterRemovingNum = list.printList()
    }
    console.log(listAfterRemovingNum)
    let writeString =""
    for(let i=0; i< listAfterRemovingNum.length; i++) {
        writeString += listAfterRemovingNum[i]+"\r\n"
    }
    fs.writeFileSync('./Files/orderedWriteNumbers.txt', writeString,'utf8',)
}

OrderedFileOperation();