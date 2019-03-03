const extractInfo = (res) => {
  const {items} = res;
  
  return items.map((book) => {
    const info = book.volumeInfo;
    
    const {
      title, 
      publisher,
      pageCount,
    } = info;
    const link = info.previewLink;
    const imgLink = info.imageLinks.thumbnail;
    const author = info.authors;
    const published = info.publishedDate;
    const desc = info.subtitle;

    return {
      title,
      link,
      imgLink,
      author,
      publisher,
      published,
      desc,
      pageCount
    };
  });
}

export function fetchBooks (){
  const url = 'https://www.googleapis.com/books/v1/volumes?q=chingu';
  return fetch(url)
          .then((res) => res.json())
          .then(extractInfo)
          .catch(console.log)
}