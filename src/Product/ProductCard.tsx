import styles from './ProductList.module.css';
interface ProductCardProps {
    key: number;
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
  }
const ProductCard: React.FC<ProductCardProps> = ({
    id,
    title,
    price,
    category,
    description,
    image,
  }) => {
    return (
        <div className={styles.product}>
        <div className={styles['product-category']}  key={id}>
            <h3>{category}</h3>
        </div>
        <div className='imageContainer'>
            <img src={image} alt={title} className={styles['product-image']}/>
        </div>
        <div className={styles['product-title']}>
            <h2>{title}</h2>
        </div>
        <hr />
        <div className={styles['product-price']}>
            <h4>${price}</h4>
        </div>
        <hr />
        <div className={styles['product-description']}>
            <p>{description}</p>
        </div>
       
    </div>
    );
  };

export default ProductCard