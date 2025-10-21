import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [formErrors, setFormErrors] = useState({
    title: "",
    content: "",
    post: "",
  });

  const submitBlog = async (event: React.FormEvent) => {
    event.preventDefault();

    let hasErrors = false;

    // validation
    if (!title) {
      setFormErrors({ ...formErrors, title: "Missing title" });
      hasErrors = true;
    }

    if (!content) {
      setFormErrors({ ...formErrors, content: "Missing content" });
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
      });

      if (result.ok) {
        setSuccessMsg("Post Created!");
      }
    } catch (error) {
      setFormErrors({
        ...formErrors,
        post: (error as Error).message ?? "Unknown submit error",
      });
    }
  };

  return (
    <>
      <div id="header">
        <p>CreatePost</p>
      </div>
      {successMsg && <div>{successMsg}</div>}
      {formErrors.post && <div>{formErrors.post}</div>}
      <div
        id="formContainer"
        style={{
          width: 600,
          margin: "auto",
          border: "solid 4px",
          borderRadius: 10,
        }}
      >
        <form onSubmit={submitBlog}>
          <label htmlFor="title">Post Title</label>
          <input
            className="input"
            style={{
              width: "inherit",
            }}
            name="title"
            type="text"
            onChange={(event) => {
              setTitle(event.target.value ?? "");
            }}
          />
          {formErrors.title && <p>{formErrors.title}</p>}
          <label htmlFor="content">Content</label>
          <textarea
            className="input"
            style={{
              width: "inherit",
            }}
            name="content"
            onChange={(event) => {
              setContent(event.target.value ?? "");
            }}
          />
          {formErrors.content && <p>{formErrors.content}</p>}
          <button type="submit">Submit Post</button>
        </form>
      </div>
    </>
  );
};

export default CreatePost;
