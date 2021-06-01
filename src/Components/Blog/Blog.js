import React from 'react'
import {
    BlogSection,
    BlogContainer,
    LatestBlog,
    LaterBlogs,
    SeeMoreBlogs,
    SeeMoreBlogsButton

} from './Blog.elements';
import BlogCard from '../BlogCard/BlogCard';

function Blog() {
    return (
        <>
            <BlogSection>
                <BlogContainer>
                    <LatestBlog>
                        <BlogCard />
                    </LatestBlog>
                    <LaterBlogs>
                        <BlogCard />
                        <BlogCard />
                    </LaterBlogs>
                    <SeeMoreBlogs>
                        <SeeMoreBlogsButton>
                            See More
                        </SeeMoreBlogsButton>
                    </SeeMoreBlogs>
                </BlogContainer>
            </BlogSection>
            
        </>
    )
}

export default Blog
