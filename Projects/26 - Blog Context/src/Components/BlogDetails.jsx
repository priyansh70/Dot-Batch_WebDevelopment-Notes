import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({ post }) => {
    return (
        <div className="max-w-3xl mx-auto w-11/12">
            <NavLink to={`/blog/${post.id}`}>
                <p className="font-bold text-lg cursor-pointer hover:underline">{post.title}</p>
            </NavLink>
            <p className="text-sm my-1">
                By <span className="italic">{post.author}</span> on{"  "}
                <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                    <span className="font-semibold underline cursor-pointer">{post.category}</span>
                </NavLink>
            </p>
            <p className="text-sm">Posted On {post.date}</p>
            <p className="mt-4 mb-2">{post.content}</p>
            <div className="flex flex-wrap gap-x-2 items-center">
                {post.tags.map((tag,index) => (
                    <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                        <span className="text-blue-700 font-semibold text-xs underline cursor-pointer"> #{tag}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    )
}

export default BlogDetails