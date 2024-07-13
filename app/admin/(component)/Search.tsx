import { SearchOutlined } from "@ant-design/icons";
import SearchStyle from "@/app/admin/(component)/Search.module.scss";

const Search = () => {
  return (
    <>
      <div className={SearchStyle.Search}>
        <input type="text"></input>
        <SearchOutlined className={SearchStyle.Glass} />
      </div>
    </>
  );
};

export default Search;
