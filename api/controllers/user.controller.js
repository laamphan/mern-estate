import bcryptjs from 'bcryptjs'
import Listing from '../models/listing.model.js'
import User from '../models/user.model.js'
import { errorHandler } from '../utils/error.js'

export const test = (req, res) => {
  res.json({
    message: 'Api route working',
  })
}

export const updateUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, 'Invalid request'))
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10)
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    )

    const { password, ...rest } = updatedUser._doc

    res.status(200).json(rest)
  } catch (err) {
    next(err)
  }
}

export const deleteUser = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, 'Invalid request'))
  try {
    await User.findByIdAndDelete(req.params.id)
    res.clearCookie('access_token')
    res.status(200).json({ message: 'User deleted' })
  } catch (err) {
    next(err)
  }
}

export const getUserListings = async (req, res, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, 'Invalid request'))
  try {
    const listings = await Listing.find({ userRef: req.params.id })
    res.status(200).json(listings)
  } catch (err) {
    next(err)
  }
}

export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)

    if (!user) return next(errorHandler(404, 'User not found'))

    const { password, ...rest } = user._doc
    res.status(200).json(rest)
  } catch (err) {
    next(err)
  }
}
