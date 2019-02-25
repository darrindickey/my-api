const { addFragmentToInfo } = require('graphql-binding')
const { prisma } = require('prisma-binding')

async function fetchUser(parent, args, context, info) {
  return context.db.query.user(
    {}, `{id first_name last_name username}`
  )
}

function users(parent, args, context, info) {
  return context.db.query.users(
    {
      where:{
        id: args.id,
        first_name: args.first_name,                
      },
      skip: args.skip,
      first: args.first,        
    },
    info
  );
}

function user(_, args, context, info) {
  return context.prisma.query.user(
    {
      where:{
        id: args.id,
        username: args.username,                
      },
      skip: args.skip,
      first: args.first,        
    },
    info
    );
}

module.exports = {
  fetchUser,
  users,
  user
}