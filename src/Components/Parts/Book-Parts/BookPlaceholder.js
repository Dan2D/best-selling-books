import React from 'react'
import ContentLoader from "react-content-loader";

function BookPlaceholder(props) {
    return (
      <ContentLoader
      className="book-placeholder"
      height={550}
      width={300}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="0" y="0" rx="4" ry="4" width="40" height="39" />
      <rect x="0" y="515" rx="4" ry="4" width="250" height="13" />
      <rect x="0" y="50" rx="4" ry="4" width="300" height="450" />
      <rect x="0" y="535" rx="4" ry="4" width="150" height="13" />
      <rect x="0" y="555" rx="4" ry="4" width="100" height="13" />
    </ContentLoader>
    )
}

export default BookPlaceholder
