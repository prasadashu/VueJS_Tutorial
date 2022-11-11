const app = Vue.createApp({
    data(){
        return {
            title: 'The Final Empire',
            author: 'Brandon Sanderson',
            age: 45,
            showBooks: true,
            // Declaring a list
            books: [
                {
                    title: 'The Final Empire',
                    author: 'Brandon Sanderson',
                    img: 'assets/1.jpg',
                    isFav: true
                },
                {
                    title: 'The Way of Kings',
                    author: 'Brandon Sanderson', 
                    img: 'assets/2.jpg',
                    isFav: false
                },
                {
                    title: 'Name of the wind',
                    author: 'Patrick Rothfuss', 
                    img: 'assets/3.jpg',
                    isFav: true
                }
            ],
            x: 0,
            y: 0,
            url: 'https://some_url.com'
        }
    },
    methods:{
        // Method accepting parameters and printing them
        changeTitle(title){
            console.log(title);
            this.title = title;
        },
        // Method to control the conditional
        toggleShowHideBooks(){
            this.showBooks = !this.showBooks;
        },
        // Handle mouse events
        handleEvent(e, data){
            console.log(e, e.type);
            if(data){
                console.log(data);
            }
        },
        handleMouseMove(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        },
        // Toggle fav class colour
        toggleFav(book){
            book.isFav = !book.isFav;
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    }
});

app.mount('#app');