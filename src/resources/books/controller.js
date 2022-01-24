const Book = require("./model");

async function createOne(req, res) {
    const bookToCreate = {
        ...req.body
    };

    const createOne = Book().createOneBook;
    const thisRes = await createOne(bookToCreate, res);
    return res.json({ data: thisRes });
};

async function getAllFiction(req, res) {
    const allFiction = Book().getAllFiction;
    const thisRes = await allFiction(res);
    return res.json({ data: thisRes });
}

module.exports = { 
    createOne,
    getAllFiction
};