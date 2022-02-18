const mongoose = require ('mongoose');

const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://HungTK:28102001@nodejs.ee6hu.mongodb.net/Project1?retryWrites=true&w=majority");
        console.log(process.env.MONGODB_URL)
        console.log('connect successfuly');
    }
    catch(error) {
        console.log('connect faile');
        console.log(error);
    }

}

module.exports = { connect };