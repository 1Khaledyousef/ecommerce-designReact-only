import React from 'react'
import { Slideree } from '../../components/Home/Slider'
import { HomeCategory } from '../../components/Home/HomeCategory'
import { ProductCardContainer } from '../../components/Products/ProductCardContainer'
import { DiscontSection } from '../../components/Home/discontsection'
import { BrandFeatured } from '../../components/brand/BrandFeatured'

export function Homepage() {


    return (
        <div>
            <Slideree />
            <HomeCategory title='التصنيفات ' btntitle='المزيد' linktext='/AllCategory' />
            <ProductCardContainer title='الاكثر مبيعا' btntitle='المزيد' linktext='Products' />
            <DiscontSection />
            <ProductCardContainer title='الاعلى تقيما' btntitle='المزيد' linktext='Products' />
            <BrandFeatured title='الماركات ' btntitle='المزيد' linktext='AllBrand' />

        </div>

    )
}
