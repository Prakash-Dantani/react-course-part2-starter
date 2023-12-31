import { useState } from "react";
import usePosts from "../hooks/usePosts";
import useInfinit from "../hooks/useInfinit";
import React from "react";

const InfinitList = () => {
  const pageSize = 10;
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfinit({ pageSize });

  if (isLoading) return <p>Loading ...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts.pages.map((page) => (
          <React.Fragment>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        disabled={isFetchingNextPage}
        className="btn btn-primary my-3 ms-1"
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading ..." : "Load More"}
      </button>
    </>
  );
};

export default InfinitList;
