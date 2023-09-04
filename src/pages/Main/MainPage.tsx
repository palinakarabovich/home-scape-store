import CategoriesPreview from '../../components/CategoriesPreview/CategoriesPreview';
import Intro from '../../components/Intro/Intro';
import ProductsPreview from '../../components/ProductsPreview/ProductsPreview';
import Slider from '../../components/Slider/Slider';
import Subscription from '../../components/Subscription/Subscription';
import { useAppSelector } from '../../hooks/useAppSelector';
import styles from './Main.module.css'

const MainPage = () => {

  const {categories} = useAppSelector((store) => store.categories)
  
  return (
    <div className={styles.page}>
      <Slider />
      <Intro />
      <CategoriesPreview />
      {
        categories.map((cat) => <ProductsPreview type={cat.name.toLowerCase()} key={cat.name}/> )
      }
      <Subscription />
    </div>
  );
}
 
export default MainPage;