const extractInfo = (res) => {
  const {items} = res;

  if (!items) return [];
  const dummyImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Placeholder_book.svg/2000px-Placeholder_book.svg.png';
  
  return items.map((book) => {
    const info = book.volumeInfo;
    
    const {
      title, 
      publisher,
      pageCount,
    } = info;
    const link = info.previewLink;
    const imgLink = info.imageLinks.thumbnail || dummyImg;
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

export function fetchBooks (query){
  const url = 'https://www.googleapis.com/books/v1/volumes?q=' + query;
  return fetch(url)
          .then((res) => res.json())
          .then(extractInfo)
          .catch(console.log)
}