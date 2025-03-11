const blogPosts = [
    {
      id: 1,
      title: "A blog post",
      content: "This is the content!.",
    },
    {
      id: 2,
      title: "Another blog post",
      content: "Lorem Ipsum.",
    },
  ];

  export const getBlog = (req, res) => {
      res.json(blogPosts);
      if(blogPosts.length === 0){
        res.send("No user found");
      }
    }
  
    export const getBlogById = (req, res) => {
      const { id } = req.params;
      const blog = blogPosts.find((blog) => blog.id === parseInt(id));
      if (blog) {
        res.json(blog);
      } else {
        res.status(404).send("Blog not found");
      }
    }