const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        trim: true,
        minlength:5,
        unique:true,
        validate:{
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: "{VALUE} is not a valid email",

        }
    },
    password:{
        type:String,
        required:true,
        trim: true,
        minlength:5
    },
    tokens: [{
        token:{
            type:String,
            required:true
        }
    }]
});

userSchema.methods.generateAuthToken = async function(){
    const user = this;
    const token = jwt.sign({_id:user._id},process.env.JWTSECRET);
    user.tokens.concat({ token });
    await user.save();
    return token;
};

userSchema.statics.findByCredentials = async (email,password) => {
  const user = await User.findOne({ 'email': email});

    if(!user){
        throw new Error('Unable to login');
    }

    const isMatch = await bcrypt.compare(password,user.password);

    if(!isMatch){
        throw new Error('Unable to login');
    }

    return user;
};


userSchema.pre('save', async function(next) {
    const user = this;

    if(user.isModified('password'))
    {
        user.password = await bcrypt.hash(user.password,8);
    }

    next();
});

const User = mongoose.model('User', userSchema)

module.exports = User;