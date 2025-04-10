import { Children } from "react";
import PropTypes from "prop-types";

function ArticleComponent({ children }) {
  ArticleComponent.propTypes = {
    children: PropTypes.any,
  };
  const childrenArray = Children.toArray(children);
  return (
    <div className=" desktop1:flex desktop1:flex-row desktop1:items-center desktop1:justify-between desktop1:gap-[10%]">
      <div className=" gap-[10px] phone1:w-[100%] ">
        {childrenArray}
      </div>
    </div>
  );
}
export default ArticleComponent;