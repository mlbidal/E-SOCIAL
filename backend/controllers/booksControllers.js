import Book from "../models/Book.js";
import Category from "../models/Category.js"

const obtenerBooks = async (req, res) => {
    const books = await Book.find().where("creador").equals(req.usuario);
    res.json(books)
};

const nuevoBook = async (req, res) => {
    const book = new Book(req.body)
    book.creador = req.usuario._id

    try {
        const bookAlmacenado = await book.save()
        res.json(bookAlmacenado);
    } catch (error) {
        console.log(error)
    }
};

const obtenerBook = async (req, res) => {
    const { id } = req.params;

    const book = await Book.findById(id);

    if(!book) {
        const error = new Error("No Enctontrado el Book");
        return res.status(404).json({msg: error.message});
    }

    if (book.creador.toString() !== req.usuario._id.toString() ) {
        const error = new Error("Accion No Valida");
        return res.status(401).json({msg: error.message});
    }
    res.json(book)
};

const editarBook = async (req, res) => {
    try {
        const { id } = req.params
        const bookId = await Book.findById(id)
        if(bookId){
            const {
                nombre,
                descripcion,
                colection,
                category,
                price,
                rating
            } = req.body;

            await Book.updateOne({nombre, descripcion, colection, category, price, rating}) 
        } else {
            console.log("no hay libro con dicho ID")
        }     
        res.send("Libro modificado")
    
    } catch (error) {
        console.log(error)
    }
};

const eliminarBook = async (req, res) => {
    
};

const getCategory = async (req, res) => {
    const category = new Category(req.body)
    category.creador = req.usuario._id

    try {
        const categoryAlmacenado = await category.save()
        res.json(categoryAlmacenado);
    } catch (error) {
        console.log(error)
    }
}; 
export {
    obtenerBook,
    obtenerBooks,
    nuevoBook,
    editarBook,
    eliminarBook,
    getCategory
}