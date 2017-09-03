import User from '../db/models/user'
import Profile from '../db/models/profile'

export default {
  Mutation: {
    async createUser (_doc, args, _context, _info) {
      try {
        console.log(args)
        const newUser = await User.create(args)

        if (args.hasOwnProperty('profile')) {
          // Ladies and gentlemen we have a profile
          // Save the profile
          const newUserId = newUser.get('id')

          const newProfile = await Profile.create({
            ...args.profile,
            userId: newUserId
          })
        }


        return null
      } catch (e) {
        throw e
      }
    }
  }
}
