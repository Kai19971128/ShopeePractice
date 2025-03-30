import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const titles = {
            '/mall': '蝦皮商城 - 首頁',
            '/cart': '蝦皮商城 - 購物車',
            '/checkout': '蝦皮商城 - 結帳',
            '/product': '蝦皮商城 - 商品詳情',
            '/mall/category': '蝦皮商城 - 商品分類'
        };

        // 從路徑中提取基本路徑
        const basePath = location.pathname.split('/')[1];
        const title = titles[`/${basePath}`] || '蝦皮商城';

        document.title = title;
    }, [location]);

    return null;
};

export default PageTitle; 