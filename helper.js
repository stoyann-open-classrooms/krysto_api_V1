    exports.success = (message, data) => {
      return(message,data)
    }

    exports.getUniqueId = (users) => {
      const usersIds = users.map(user => user.id)
      const maxId = usersIds.reduce((a,b) => Math.max(a, b))
      const uniqueId = maxId + 1
        
      return uniqueId
    }