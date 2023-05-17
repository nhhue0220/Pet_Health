// import bcrypt from 'bcryptjs';
// import db from "../models/index"

// const salt = bcrypt.genSaltSync(10);

// let createNewUser = async (data) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let hashPasswordFromBcryptjs = await hashUserPassword(data.password);
//             await db.User.create({
//                 firstName: data.firstName,
//                 lastName: data.lastName,
//                 email: data.email,
//                 phone: data.phone,
//                 password: hashPasswordFromBcryptjs,
//                 address: data.address,
//                 gender: data.gender === '1' ? true : false,
//                 roleId: data.roleId,
//             })
//             resolve('Thành công!')
//         } catch (e) {
//             reject(e);
//         }
//     })
// }

// let hashUserPassword = (password) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             let hashPassword = await bcrypt.hashSync(password, salt);
//             resolve(hashPassword);
//         } catch (e) {
//             reject(e);
//         }
//     })
// }

// module.exports = {
//     createNewUser: createNewUser,
//     getAllUsers: getAllUsers,
// }