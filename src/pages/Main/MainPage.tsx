import { productTypes } from '../../@types/enums';
import CategoriesPreview from '../../components/CategoriesPreview/CategoriesPreview';
import Intro from '../../components/Intro/Intro';
import ProductsPreview from '../../components/ProductsPreview/ProductsPreview';
import Slider from '../../components/Slider/Slider';
import Subscription from '../../components/Subscription/Subscription';
import styles from './Main.module.css'

const MainPage = () => {
  return (
    <div className={styles.page}>
      <Slider />
      <Intro />
      <CategoriesPreview />
      <ProductsPreview type={productTypes.furniture} />
      <ProductsPreview type={productTypes.accessories} />
      <Subscription />
    </div>
  );
}
 
export default MainPage;