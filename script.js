class Book { 
    constructor(title, author, year) { 
        this.title = title; 
        this.author = author; 
        this.year = year; 
    } 

    getInfo() { 
        return ` 
        Название: '${this.title}' 
        Автор: '${this.author}' 
        Год: '${this.year}' 
        `; 
    } 

    set newTitle(newTitle) { 
        this.title = newTitle; 
    } 

    set newYear(newYear) { 
        this.year = newYear; 
    } 
} 

class EBook extends Book { 
    constructor(title, author, year, format = "PDF", size) { 
        super(title, author, year); 
        this.format = format; 
        this.size = size; 
    } 

    getInfo() { 
        return super.getInfo() + ` 
        Формат: '${this.format}' 
        Размер: '${this.size}' Мб
        `; 
    }

    changeSize(newSize) {
        this.size = newSize;
    }
} 

let book1 = new Book("1984", "Дж. Оруэлл", 1984); 
let book2 = new Book("Преступление и наказание", "Ф.М.Достоевский", 1880); 
let ebook1 = new EBook("Код да Винчи", "Дэн Браун", 2003, "PDF", 1.5); 

console.log(book1.getInfo()); 
console.log(book2.getInfo()); 
console.log(ebook1.getInfo());

ebook1.changeSize(2.0);
console.log("После изменения размера:");
console.log(ebook1.getInfo());

book2.newTitle = "Идиот"; 
book2.newYear = 1885; 
console.log(book2.getInfo());