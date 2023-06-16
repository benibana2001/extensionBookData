import { beniBook } from 'benibana_bookdata';

(async () => {
  const isbn = '9784837987499';
  console.log(`bookCover: ${await beniBook.searchBookCoverURL(isbn)}`);

  console.log(`bookTItle: ${await beniBook.searchBookTitle(isbn)}`);

  const CALIL_KEY = '46a2412f4ceb07b72a251150f2533c74';
  const systemid = 'Tokyo_Setagaya';
  const pollingDuration = 500;

  console.log(
    `libraryStock: ${JSON.stringify(
      await beniBook.searchLibraryStock({
        appkey: CALIL_KEY,
        isbn,
        systemid,
        pollingDuration
      })
    )}`
  );
})();
