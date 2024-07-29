import blogs from "../../data";
import "./Home.css";
import BlogCard from "../../components/BlogCard/BlogCard";

function Home() {
  return (
    <>
      <h1 className="heading">Product Blog</h1>
      <div className="blog-card-conatiner">
        {blogs.map((blogObject, i) => {
          const {
            id,
            title,
            image,
            price,
            discount,
            mrp,
            rating,
            description,
            offers,
          } = blogObject;

          return (
            <BlogCard
              id={id}
              key={i}
              title={title}
              image={image}
              price={price}
              discount={discount}
              mrp={mrp}
              rating={rating}
              description={description}
              offers={offers}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
