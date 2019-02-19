function fetchUser(parent, args, context, info) {
  return context.prisma.user()
}

module.exports = {
  fetchUser,
}