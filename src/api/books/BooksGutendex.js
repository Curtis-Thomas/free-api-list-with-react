import { Box } from "@mui/material";
import BoxApiInfo from "../../core/main/BoxApiInfo";
import Endpoints from "../../components/Endpoints";
import NavBar from "../../navigation/NavBar";
import BoxTestCrud from "../../tools/components/BoxTestCrud";
import ApiPageInfo from "../../core/main/ApiPageInfo";

const BooksGutendex = () => {
  return (
    <Box>
      <NavBar link="/BooksDash" route2="/Gutendex" />
      <ApiPageInfo
        title={"Gutendex"}
        linkUrl={"https://gutendex.com/"}
        description={"JSON web API for Project Gutenberg ebook metadata"}
      />
      <Box>
        <BoxTestCrud />
        <BoxApiInfo baseEndpoint="https://gutendex.com" />
        <Endpoints
          header="GET"
          endpoint="/books"
          description="Lists of book information in the database are queried using this API endpoint"
        />
        <Endpoints
          header="GET"
          endpoint="/books?languages=en,fr"
          description="This API endpoint is used to find books in any list of languages. 
          [/books?languages={language1},{language2}] languages are written in short just like 'en' for english"
        />
        <Endpoints
          header="GET"
          endpoint="/books?search=dickens%20great"
          description="This API endpoint is used to search author names and book titles with given words. 
          [/books?languages={Author name}%20{Book title}]"
        />
        <Endpoints
          header="GET"
          endpoint="/books?topic=horror"
          description="This API endpoint is used to search for key-phrase in books' bookshelves or subjects. 
          [/books?topic={subject}] subjects can be 'children', 'horror', etc."
        />
      </Box>
    </Box>
  );
};

export default BooksGutendex;
