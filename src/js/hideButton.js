((doc) => {

  const mergeOwner = () => {
    const elementAuthor = doc.querySelector('.author_link')
    return elementAuthor.getAttribute('href').substring(3)
  }
  
  const loggedUser = () => {
    return doc.querySelector('.username').textContent.trim()
  }

  const hideMergeButton = () => {
    doc.querySelector('.mr-widget-body').style.display = 'none'
  }
  
  if( mergeOwner() !== loggedUser() ) {
     hideMergeButton()
  }

})(document)