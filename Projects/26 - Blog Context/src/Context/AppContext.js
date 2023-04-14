import React, { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    async function fetchBlogPosts(page = 1) {
        setLoading(true);
        const url = `${baseUrl}?page=${page}`;
        try {
            const output = await fetch(url);
            const data = await output.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (err) {
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }


    function handlerPageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlerPageChange,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
