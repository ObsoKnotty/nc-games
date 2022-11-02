import { useEffect } from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  

 
  useEffect(() => {
    fetch("https://obsoknotty-project.herokuapp.com/api/categories")
      .then((data) => {
        return data.json();
      })
      .then(({ categories }) => {
        setCategories(categories);
      });
  }, []);




    
  

  return (
    <ul>
      {categories.map((category) => {
        return (
          <>
          <Link to={`/category/${category.slug}`} state={category}>
            <li>  <button >{category.slug}</button> </li>
          </Link>
        
        
        </>
        );
      })}
      <Outlet/>
    </ul>
  );
};

export default CategoryList;
