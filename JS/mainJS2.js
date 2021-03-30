// 1. --створити масив та вивести його в консоль:
//     - з 5 числових значень
//     - з 5 стічкових значень
//     - з 5 значень стрічкового, числового та булевого типу

    // let arrNumbers = [9, 45, 32, 3, 84];
    // console.log(arrNumbers);
    //
    // let arrStr = ["ice", "skate", "jump", "spin", "twizzle"];
    // console.log(arrStr);
    //
    // let arrSet = ['travel', 3, true, 'pleasure', 8,];
    // console.log(arrSet);
    //

// 2. -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
//     Вивести в консоль

    // let theater = [];
    // theater[0] = 'actor';
    // theater[1] = 'mask';
    // theater[2] = 'scene';
    // theater[3] = 'costume';
    // theater[4] = 'light';
    // console.log(theater);

// 3. - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

    // for (let i = 0; i < 10; i++) {
    //     document.write('<div> Hello world! </div>');
    // };

// 4. - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

    // for (let i=0; i < 10; i++) {
    //     document.write('<div> It is ' + i + ' wonderful! </div>');
    // }

// 5. - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

    // let i = 0;
    // while (i < 20) {
    //     document.write('<h1> life is Beautiful </h1>');
    //     i++;
    // }

// 6. - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

    // let i = 0;
    // while (i < 20) {
    //     document.write('<h1> life' + i + 'is Beautiful </h1>');
    //     i++;
    // }

// 7. - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

    // let arr1 = [1, 97, 111, 5, 44, 18, 3, 25, 72, 90]
    // for (let number of arr1) {
    //     console.log(arr1);
    // }

// 8. - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

    // let arr2 = ['apple', 'makeup', 'panama', 'rozetka', 'bread', 'world', 'travel', 'competition', 'work', 'winner'];
    // for (i=0; i < arr2.length; i++) {
    //     console.log(arr2);
    // }

// 9. - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

    // let set2 = ['luck', 'work', 3, 'study', true, 9, 'mind', false, 8, 'winner'];
    //
    // let i = 0;
    // while (i < set2.length) {
    //     console.log(set2);
    //     i++;
    // }

// 10. - Створити масив з 10 елементів числового, стрічкового і булевого типу.
//     За допомогою if та typeof вивести тільки булеві елементи

    // let arr2 = ['luck', 'work', 3, 'study', true, 9, 'mind', false, 8, 'winner'];
    // for (let arr2Element of arr2) {
    //     if (typeof arr2Element === 'boolean') {
    //         console.log(arr2Element);
    //     }
    // }

// 11. - Створити масив з 10 елементів числового, стірчкового і булевого типу.
//     За допомогою if та typeof вивести тільки числові елементи

    // let arr2 = ['luck', 'work', 3, 'study', true, 9, 'mind', false, 8, 'winner'];
    // for (let i = 0; i < arr2.length; i++) {
    //     if (typeof arr2 [i] === "number") {
    //         console.log(arr2[i]);
    //     }
    // }

// 12. - Створити масив з 10 елементів числового, стрічкового і булевого типу.
//     За допомогою if та typeof вивести тільки рядкові елементи

    // let arr2 = ['luck', 'work', 3, 'study', true, 9, 'mind', false, 8, 'winner'];
    // let i =0;
    // while (i < arr2.length) {
    //     if (typeof arr2 [i] === "string") {
    //         console.log(arr2[i]);
    //     }
    //  i++;
    // }

// 13. - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
//     Вивести в консоль всі його елементи в циклі.

    // let arrSet = [];
    // arrSet[0] = 'flowers';
    // arrSet[1] = 'life';
    // arrSet[2] = 'love';
    // arrSet[3] = 3;
    // arrSet[4] = true;
    // arrSet[5] = 'family';
    // arrSet[6] = 'green';
    // arrSet[7] = 4;
    // arrSet[8] = 'friendly';
    // arrSet[9] = 8;
    // for (let arrSetElement of arrSet) {
    // console.log(arrSet);
    // }

// 14. - Створити цикл for на 10  ітерацій з кроком 1.
//     Вивести поточний номер кроку через console.log та document.write

    // for (let i = 0; i < 10; i++) {
    //     console.log(i);
    //     document.write(i);
    // }

// 15. - Створити цикл for на 100 ітерацій з кроком 1.
//    Вивести поточний номер кроку через console.log та document.write

    // for (let i = 0; i < 100; i++) {
    //     console.log(i);
    //     document.write(i + '<br>');
    // }

// 16. - Створити цикл for на 100 ітерацій з кроком 2.
//    Вивести поточний номер кроку через console.log та document.write

    // for (let i = 1; i < 200; i+=2) {
    //     console.log(i);
    //     document.write(i + '<br>');
    // }

// 17. - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

    // for (let i = 1; i < 200; i++) {
    //     if (i % 2 === 0) {
    //         console.log(i);
    //         document.write(i + '<br>');
    //     }
    // }

// 18. - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

    // for (let i = 0; i < 200; i++) {
    //     if (i % 2 !== 0) {
    //         console.log(i);
    //         document.write(i + '<br>');
    //     }
    // }
    //
    // или

    // for (let i = 0; i < 200; i++) {
    //     if (i % 2 === 1) {
    //         console.log(i);
    //         document.write(i + '<br>');
    //     }
    // }

// 19. - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)

    // for (let minutes = 0; minutes < 2; minutes++) {
    //     for (let seconds = 0; seconds < 60; seconds++) {
    //         console.log(minutes, seconds);
    //     }
    // }

// 20. - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

    // for (let hours = 0; hours < 2; hours++) {
    //     for (let minutes = 0; minutes < 60; minutes++) {
    //         for (let seconds = 0; seconds < 60; seconds++) {
    //             console.log(hours, minutes, seconds);
    //         }
    //     }
    // }

// 21. - Відтворити роботу годинника,
//     відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

    // for (let hours = 0; hours < 3; hours++) {
    //     for (let minutes = 0; minutes < 60; minutes++) {
    //         for (let seconds = 0; seconds < 60; seconds++) {
    //             console.log(hours, minutes, seconds);
    //
    //             if (hours === 2 && minutes === 20 && seconds === 0) {
    //                     break;
    //             }
    //         }
    //         if (hours ===2 && minutes === 20 && seconds === 0) {
    //             break;
    //         }
    //     }
    // }


// Додатково

// 1. - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

    // let arr = [ 'a', 'b', 'c'];
    // let word = '';
    // for (let i = 0; i < arr.length; i++) {
    //     word = word + arr[i];
    // }
    // console.log(word);

// 2. - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

    // let arr2 = [ 'a', 'b', 'c'];
    // let word2 = '';
    // let i = 0;
    // while (i < arr2.length) {
    //     word2 = word2 + arr2[i];
    //     i++;
    // }
    // console.log(word2);

// 3. - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

    // let arr3 = [ 'a', 'b', 'c'];
    // let word3 = '';
    // for (let menuArr of arr3) {
    //     word3 = word3+menuArr;
    //
    // }
    // console.log(word3);

// CLASS

// 1. зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
//  a) перебрати його циклом while

    // let arr = [2,17,13,6,22,31,45,66,100,-18];

   // let i = 0;
    // while (i < arr.length) {
    //     i++;
    // }
    // console.log(arr);

// b) перебрати його циклом for

    // for (let i = 0; i < arr.length; i++) {
    // }
    // console.log(arr);

// КАК ПРАВИЛЬНО СДЕЛАТЬ В ЭТОМ ЗАДАНИИ НУЖНО ВЫВЕСТИ В КОНСОЛЬ ВНУТРИ ЦИКЛА ЧТОБЫ 10 РАЗ ВЫВЕСТИ
// ИЛИ ВСЕ ТАКИ КОНСОЛЬ ПОСЛЕ ЦИКЛА?

 // c) перебрати циклом while та вивести  числа тільки з непарним індексом

    // let i = 1;
    // while (i < arr.length) {
    //     console.log(arr[i]);
    //     i=i+2;
    // }


 // d) перебрати циклом for та вивести  числа тільки з непарним індексом

    // for (let i = 1; i < arr.length; i=i+2) {
    //     console.log(arr[i]);
    // }

 // e) перебрати циклом while та вивести  числа тільки парні  значення

    // let i = 0;
    // while (i < arr.length) {
    //     if (arr[i] % 2 === 0) {
    //         console.log(arr[i]);
    //     }
    //     i++
    // }

 // f) перебрати циклом for та вивести  числа тільки парні  значення

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 2 === 0) {
    //         console.log(arr[i]);
    //     }
    // }

 // g) замінити кожне число кратне 3 на слово "okten"

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] % 3 ===0) {
    //         arr[i] = 'okten';
    //     }
    // }
    // console.log(arr);

// h) вивести масив в зворотньому порядку.

    // for (let i = arr.length-1; i >= 0; i--) {
    //     console.log(arr[i]);
    // }

// i) перебрати масив циклом while в зворотньому порядку

    // let i = arr.length-1;
    // while (i >= 0) {
    //     console.log(arr[i]);
    //     i--;
    // }

// j) перебрати циклом for та вивести  числа тільки парні  значення в зворотньому порядку

    // for (let i = arr.length-1; i >= 0 ; i--) {
    //    if (arr[i] % 2 ===0) {
    //        console.log(arr[i]);
    //    }
    // }

// 2. створити пустий масив та :
//   - заповнити його 50 парними числами за допомоги циклу.

    // let arrPair = [];
    // for (let i = 0; i < 100; i++) {
    //     if (i % 2 === 0) {
    //         arrPair[i] = i;
    //     }
    // }
    // console.log(arrPair)

// - заповнити його 50 непарними числами за допомоги циклу.

    // let arrUnpair = [];
    // for (let i = 0; i < 100; i++) {
    //     if (i % 2 !==0) {
    //       arrUnpair[i] = i;
    //     }
    // }
    // console.log(arrUnp-air);

// 3 - используя Math.random заполнить массив из ???(сколько хотите) элементов.

    // let arrRandom = [];
    // for (let i = 0; i < 20; i++) {
    //     arrRandom[i] = Math.floor(Math.random()*20)+1;
    // }
    //
    // console.log(arrRandom);

// -вывести на консоль  каждый третий елемент

    // for (let i = 2; i < arrRandom.length; i=i+3) {
    //     console.log(arrRandom[i]);
    // }

// - вывести на консоль  каждый третий елемент но при условии что его значение является парным.

    // for (let i = 2; i < arrRandom.length; i=i+3) {
    //     if (arrRandom[i] % 2 ===0 ) {
    //         console.log(arrRandom[i]);
    //     }
    // }

// -вывести на консоль  каждый третий елемент но при условии что он имеет парное значение и
// записать их в другой массив.

    // let arrMy = [];
    // for (let i = 2; i < arrRandom.length; i=i+3) {
    //     if (arrRandom[i] % 2 ===0 ) {
    //         arrMy.push(arrRandom[i]);
    //     }
    // }
    // console.log(arrMy)

// - Вывести каждый елемент массива у которого соседний с права элемент - парный

    // for (let i = 0; i < arrRandom.length; i++) {
    //     if (arrRandom[i+1] % 2 ===0) {
    //         console.log(arrRandom[i]);
    //     }
    // }

// 4. створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому,
// і якщо об'єкт є числом, додати його в інший масив.

    // let arr =  ['luck', 'work', 3, 'study', true, 9, 'mind', false, 8, 'winner'];
    // let newArr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (typeof arr [i] === "number") {
    //         newArr.push(arr[i]);
    //     }
    // }
    // console.log(newArr);

// =========

// 1. Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

    // let arrA = ['a', 'b', 'c'];
    // for (let i = 1; i <= 3; i++) {
    //   arrA.push(i);
    // }
    //
    // console.log(arrA)

// 2. Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

    // let arrX = [1, 2, 3];
    // let newArrx = [];
    // for (let i = arrX.length; i > 0; i--) {
    //     newArrx.push(i);
    // }
    // console.log(newArrx);

// 3. Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

    // let arrY = [1, 2, 3];
    // for (let i = 4; i <= 6; i++) {
    //     arrY.push(i);
    // }
    //
    // console.log(arrY);

// 4. Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

    // let start = [1, 2, 3];
    // for (let i = 6; i >= 4; i--) {
    //    start.unshift(i);
    // }
    // console.log(start);

// 5.  Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

    // let arrShift = ['js', 'css', 'jq'];
    // console.log(arrShift.shift());

// 6. Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

    // let arrPop = ['js', 'css', 'jq'];
    // console.log(arrPop.pop());

// 7. Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

    // let arrSl = [1, 2, 3, 4, 5];
    // console.log(arrSl.slice(3));


// 8. Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

    // let arrSl = [1, 2, 3, 4, 5];
    // console.log(arrSl.slice(0, 2));

// 9. Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

    // let arrSplice = [1, 2, 3, 4, 5];
    // arrSplice.splice(1,2);
    // console.log(arrSplice);

// 10. Дан масив [1, 2, 3, 4, 5].
// За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

    // let arrSplice2 = [1, 2, 3, 4, 5];
    // arrSplice2.splice(3,0,'a', 'b', 'c',);
    // console.log(arrSplice2)

// 11. Дан масив [1, 2, 3, 4, 5].
// За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

    // let arrNum = [1, 2, 3, 4, 5];
    // arrNum.splice(1, 0, 'a', 'b');
    // arrNum.splice(6, 0, 'c');
    // arrNum.splice(8,0, 'e');
    // console.log(arrNum)


// 12. Взяти масив з 10 чисел або створити його.
// Вивести в консоль тільки ті елементи, значення яких є парними.

    // let num = [1,2,50,21,5,36,75,81,950,100];
    // for (let i = 0; i < num.length; i++) {
    //     if (num[i] % 2 === 0) {
    //         console.log(num[i]);
    //     }
    // }

// 13. Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

    // let num = [1,2,50,21,5,36,75,81,950,100];
    // let newNum = [];
    // for (let i = 0; i < num.length; i++) {
    //     newNum.push(num[i]);
    // }
    // console.log(newNum);

// 14. Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

    // let num = [1,2,50,21,5,36,75,81,950,100];
    // let newNum = [];
    // for (let i = 0; i < num.length; i++) {
    //     newNum[i] = num[i];
    // }
    // console.log(newNum);



 // - масив з числами [100,250,50,168,120,345,188],
 //    Які характеризують вартість окремої покупки. обрахувати середній чек.

    // let numArr = [100,250,50,168,120,345,188];
    // let summ = 0;
    // for (let i = 0; i < numArr.length; i++) {
    //     summ += numArr[i];
    // }
    //
    // let resultMiddle = summ / numArr.length;
    // console.log(resultMiddle);






