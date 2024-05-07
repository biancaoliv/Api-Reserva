const User = require('../models/User')

const syncLocalDatabase = async () => {
    try {
        await User.sync({ force: true })
    } catch (error) {
        console.error('Failed to sync database', error)
    }
}

syncLocalDatabase()