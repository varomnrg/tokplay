const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { Schema } = mongoose;
const saltRounds = 10;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minLength: [3, "Username too short"],
        maxLength: [30, "Username too long"],
    },
    email: {
        type: String,
        required: [true, "Please input your email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please input your password"],
    },
});

UserSchema.pre("save", async function (next) {
    try {
        const hashedPassword = await bcrypt.hash(this.password, saltRounds);
        console.log(hashedPassword);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

UserSchema.methods.comparePassword = async function (password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        return false;
    }
};

const User = mongoose.model("user", UserSchema);

module.exports = User;
