import React, { useCallback, useState, useEffect } from "react";
import { mainAPI } from "../../../api";
import { useAsyncData } from "../../../hooks/useAsyncData";
import { IBannerData, IBlogData } from "../../../models/models";
import { Pagination } from "react-bootstrap";
import Banner from "../../common/Banner";
import BlogCard from "./BlogCard";

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<IBlogData[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [searchedBlogs, setSearchedBlogs] = useState<IBlogData[]>([]);
  const [blogCount] = useAsyncData<number>("Blog/getBlogsCount");
  const [banner] = useAsyncData<IBannerData>("Blog/getBlogBanner");
  const [page, setPage] = useState<number>(1);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (search.trim() === "") {
      setIsSearching(false);
      setCount(blogCount.data ?? 0);
    } else {
      setIsSearching(true);
      let resultCount: number = searchedBlogs.length / 4;
      setCount(Number(resultCount.toFixed()));
    }

    const getBlogs = async () => {
      await mainAPI
        .get<IBlogData[]>(`Blog/getBlogs`, {
          params: {
            page: page,
          },
        })
        .then((response) => setBlogs(response.data))
        .catch(() => setBlogs([]));
    };

    getBlogs();
  }, [search, blogCount, page, searchedBlogs]);

  const handleChangeSearch = useCallback((e) => {
    setSearch(e.target.value);
    const getSearch = async () => {
      await mainAPI
        .get<IBlogData[]>(
          `Blog/search?search=${e.target.value.trim().toLowerCase()}`
        )
        .then((response) => {
          setSearchedBlogs(response.data);
          setCount(response.data.length);
        })
        .catch(() => setSearchedBlogs([]));
    };

    if (e.target.value.trim() !== "") {
      getSearch();
    }
  }, []);

  let items = [];
  if (count !== 0) {
    for (let item = 1; item <= count; item++) {
      items.push(
        <React.Fragment key={item}>
          {item === page ? (
            <Pagination.Item disabled>{item}</Pagination.Item>
          ) : (
            <Pagination.Item onClick={() => setPage(item)}>
              {item}
            </Pagination.Item>
          )}
        </React.Fragment>
      );
    }
  }

  return (
    <div className='blog-wrapper'>
      <Banner
        title={banner.data?.title}
        description={banner.data?.description}
        image={banner.data?.image}
      />
      <div className='blog-content-wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8'>
              {!isSearching
                ? blogs.map((blog) => (
                    <BlogCard
                      key={blog.id}
                      id={blog.id}
                      title={blog.title}
                      content={blog.content}
                      image={blog.image}
                      lastModificationDate={blog.lastModificationDate}
                      author={blog.appUserDto}
                    />
                  ))
                : searchedBlogs.map((blog) => (
                    <BlogCard
                      key={blog.id}
                      id={blog.id}
                      title={blog.title}
                      content={blog.content}
                      image={blog.image}
                      lastModificationDate={blog.lastModificationDate}
                      author={blog.appUserDto}
                    />
                  ))}
              <div className='pagination-box'>
                <Pagination>{items}</Pagination>
              </div>
            </div>
            <div className='col-md-4 order-first order-md-last'>
              <div className='search-box'>
                <form>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      placeholder='Search...'
                      value={search}
                      onChange={(e) => handleChangeSearch(e)}
                    />
                    <div className='icon-box'>
                      <i className='fas fa-search'></i>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
