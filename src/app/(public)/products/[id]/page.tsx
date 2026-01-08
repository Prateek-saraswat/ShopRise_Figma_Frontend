import BreadcrumbStyled from '@/components/BreadCrum2';
import Breadcrumb from '@/components/Breadcrum'
import ProductDetail from '@/components/ProductDetails';

export default async function ProductDetails({
    params,
  }: {
    params: Promise<{ id: string }>;
  }) {
    const { id } = await params;
  
    return (
      <div className="my-0">
   <BreadcrumbStyled items={[
    { label: 'All listing', href: '/' },
    { label: 'Products' }
  ]} />
        
        <ProductDetail />
      </div>
    );
  }