import React from 'react'
import { Homepage } from './page/home/Homepage';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { LoginPage } from './page/Auth/LoginPage';
import { NavBarLogin } from './components/uitilty/NavBarLogin';
import Footer from './components/uitilty/Footer';
import RegisterPage from './page/Auth/RegisterPage ';
import { AllCategory } from './page/Auth/Category/AllCategory';
import { AllbrendPage } from './page/Brand/AllbrendPage';
import { ShopProductPage } from './page/Product/ShopProductPage';
import { ProductDetailsPage } from './page/Product/ProductDetailsPage';
import { CartPage } from './page/cart/CartPage';
import { ChoosePayMethoudPage } from './page/Checkout/ChoosePayMethoudPage';
import { AdminAllProductsPage } from './page/Admin/AdminAllProductsPage';
import AdminAllOrdersPage from './page/Admin/AdminAllOrdersPage';
import AdminOrderDetalisPage from './page/Admin/AdminOrderDetalisPage';
import AdminAddBrandPage from './page/Admin/AdminAddBrandPage';
import AdminAddCategoryPage from './page/Admin/AdminAddCategoryPage';
import AdminAddSubCategoryPage from './page/Admin/AdminAddSubCategoryPage';
import AdminAddProductsPage from './page/Admin/AdminAddProductsPage';
import UserAllOrdersPage from './page/User/UserAllOrdersPage';
import UserFavoriteProductsPage from './page/User/UserFavoriteProductsPage';
import UserAllAddresPage from './page/User/UserAllAddresPage';
import UserAddAddressPage from './page/User/UserAddAddressPage';
import UserEditAddressPage from './page/User/UserEditAddressPage';
import UserProfilePage from './page/User/UserProfilePage';
export const App = () => {
  return (
    <>
      <NavBarLogin />
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/AllCategory' element={<AllCategory />} />
          <Route path='/AllBrand' element={<AllbrendPage />} />
          <Route path='/Products' element={<ShopProductPage />} />
          <Route path='/Products' element={<ShopProductPage />} />
          <Route path='/Products/:id' element={<ProductDetailsPage />} />
          <Route path='/Cart' element={<CartPage />} />
          <Route path='/order/paymethoud' element={<ChoosePayMethoudPage />} />
          <Route path='/Admin/allproducts' element={<AdminAllProductsPage />} />
          <Route path='/admin/allorders' element={<AdminAllOrdersPage />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetalisPage />} />
          <Route path="/admin/addbrand" element={<AdminAddBrandPage />} />
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage />} />
          <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage />} />
          <Route path="/admin/addproduct" element={<AdminAddProductsPage />} />
          <Route path="/user/allorders" element={<UserAllOrdersPage />} />
          <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage />} />
          <Route path="/user/addresses" element={<UserAllAddresPage />} />
          <Route path="/user/add-address" element={<UserAddAddressPage />} />
          <Route path="/user/edit-address" element={<UserEditAddressPage />} />  
          <Route path="/user/profile" element={<UserProfilePage />} />  

        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}
