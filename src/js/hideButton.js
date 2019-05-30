((doc) => {

  const mergeOwner = () => {
    const elementAuthor = doc.querySelector('.author_link')
    return elementAuthor.getAttribute('href').substring(3)
  }
  
  const loggedUser = () => {
    return doc.querySelector('.username').textContent.trim()
  }

  const hideMergeButton = condition => {
    if( condition ) {
      doc.querySelector('.mr-widget-body').style.display = 'none'
    }
  }

  const quorum = () => {
    const amount = document.querySelector('.award .counter').textContent
    return parseInt(amount)
  }

  const main = () => {
    const youIsNotOwner = mergeOwner() !== loggedUser()
    const withoutQuorum = quorum() < 3

    hideMergeButton( youIsNotOwner || withoutQuorum )
  }

  main()

})(document)