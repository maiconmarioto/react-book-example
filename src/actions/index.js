export function selectBook(book)  {
   //selectBook is an actionCreator, it need to retunr an action,
   //an object with a type property
   return {
      type: 'BOOK_SELECTED',
      payload: book
   };
}
