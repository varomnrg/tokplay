const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const User = require("../models/users");

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = process.env.JWT_SECRET;

module.exports = new JwtStrategy(jwtOptions, async (jwt_payload, next) => {
    const id = jwt_payload.id;
    let user = await User.findById(id);

    if (user) {
        next(null, user);
    } else {
        next(null, false);
    }
});
