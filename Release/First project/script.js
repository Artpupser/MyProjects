var countChecker = document.querySelector('#checkCount');
var parentTree = document.querySelector('.tree');
var countOperations = 0;
var releseCount;

function check() {
    if(countChecker.value == '' || countChecker.value < 1) {
        countChecker.value = 1;
    }
    releseCount = countChecker.value;
}

function output(content)
{
    const newElement = document.createElement("li");
    newElement.innerText = `${content}`;
    parentTree.append(newElement);
}

function clear() {
    parentTree.innerHTML = "";
    countOperations = 0;
}

function result() {
    clear();
    check();
    while(true)
    {
        countOperations++;
        output(releseCount);
        if(releseCount % 2 !== 0){
            releseCount = (releseCount * 3) + 1;
        } else{
            releseCount = releseCount / 2;
        }
        if(releseCount == 1) {
            output(releseCount);
            output('Это число в цикле 3n + 1, то есть не бесконечное, ' + 'длина дерева состовляет = ' + countOperations);
            output('Если сайт завис скорее всего вы нашли бесконенчое число !');
            output('Подробнее здесь = ' + 'https://ru.wikipedia.org/wiki/Гипотеза_Коллатца');
            break;
        }
    }
}