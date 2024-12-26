class LibraryItem {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        this.publishedYear = publishedYear;
    }

    getDetails() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Published Year: ${this.publishedYear}`);
    }
}

class Book extends LibraryItem {
    constructor(title, author, publishedYear, genre) {
        super(title, author, publishedYear); 
        this.genre = genre;
    }

    getDetails() {
        super.getDetails(); 
        console.log(`Genre: ${this.genre}`);
    }
}

class Magazine extends LibraryItem {
    constructor(title, author, publishedYear, issueNumber) {
        super(title, author, publishedYear); 
        this.issueNumber = issueNumber;
    }

    getDetails() {
        super.getDetails(); 
        console.log(`Issue Number: ${this.issueNumber}`);
    }
}

const book1 = new Book("1984", "George Orwell", 1949, "Fiction");
book1.getDetails();

const magazine1 = new Magazine("A Clockwork Orange", "Anthony Burgess", 1962, 200);
magazine1.getDetails();