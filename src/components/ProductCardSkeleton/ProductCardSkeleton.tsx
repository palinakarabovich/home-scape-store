import React from "react"
import ContentLoader from "react-content-loader"

const ProductCardSkeleton = () => (
  <ContentLoader
    speed={2}
    width={350}
    height={600}
    viewBox="0 0 350 600"
    backgroundColor="#f6f4f4"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="5" width="350" height="400" />
    <rect x="0" y="430" rx="5" ry="5" width="200" height="30" />
    <rect x="0" y="470" rx="5" ry="5" width="300" height="50" />
    <rect x="0" y="530" rx="5" ry="5" width="70" height="30" />
    <rect x="0" y="570" rx="5" ry="5" width="120" height="30" />
  </ContentLoader>
)

export default ProductCardSkeleton