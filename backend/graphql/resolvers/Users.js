const bcrypt                = require('bcryptjs')
const User                  = require('../../models/User')
const getUserId             = require('../../helpers/getUserId')
const generateToken         = require('../../helpers/generateToken')
const hashPassword          = require('../../helpers/hashPassword')


const userResolver = {
    async createUser(args) {
        try {
            const data = args.data
            //console.log(data)
            const hashedPassword = await hashPassword(data.password)

            const emailInUse = await User.findOne({ email: data.email })

            if (emailInUse) {
                return { error: 'Email already in use!' }
            }

            let user = new User({
                name: data.name,
                email: data.email,
                password: hashedPassword,
            })

            const result = await user.save()
        
            return { //{ ...result._doc, password: null, _id: result.id },
                token: generateToken(user._id)
            }
            
        } catch(e) {
            console.log(e)
            throw e
        }
    },
    async login(args) {
        const { email, password, } = args.data

        const user = await User.findOne({ email: email })
        if (!user) {
            return { error: 'Unable to login' }
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return { error: 'Unable to login' }
        }

        return {
            token: generateToken(user.id)
        }
    },
    async updateUser(args, { headers }) {
        const userId = getUserId(headers.authorization)

        const emailStandard = /\S+@\S+\.\S+/
        const isEmail       = emailStandard.test(args.data.email)
        if (!isEmail) {
            return { message: 'Invalid email' }
        }

        const { name, email, }  = args.data
        const updatedFields     = { }

        if (name) updatedFields.name    = name
        if (email) updatedFields.email  = email


        try {
            let user = await User.findById(userId)
            
            if (!user) {
                return { message: 'User not found' }
            }

            user = await User.findByIdAndUpdate(
                userId,
                { $set: updatedFields },
                { new: true }
            )
            console.log(user)
            const { name, email, } = user

            return {
                user: {
                    name,
                    email,
                }, 
                message: 'Updated successfully' 
            }

        } catch (e) {
            console.log(e)
        }
    },
    async updateUserPassword(args, { headers }) {
        const userId = getUserId(headers.authorization)
        const { currentPassword, newPassword, } = args.data
        const user = await User.findById(userId)

        const isMatch = await bcrypt.compare(currentPassword, user.password)
        if (!isMatch) {
            return { message: 'Invalid credentials' }
        }

        const hashedPassword = await hashPassword(newPassword)
        const updatedField   = { password: hashedPassword, }

        try {
             const user = await User.findByIdAndUpdate(
                userId,
                { $set: updatedField },
                { new: true }
            )

            return { message: 'Password updated successfully' }

        } catch (e) {
            console.log(e)
        }

    }
}


module.exports = userResolver
