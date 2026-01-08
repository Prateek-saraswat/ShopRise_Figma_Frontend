import MainNavBar from '@/components/MainNavBar'
import MainFooter from '@/components/MainFooter'
import FooterFullWidth from '@/components/Footerr'
import FooterResponsive from '@/components/Footerr'
import Footer from '@/components/Footer'
import Footer02 from '@/components/Footer02'

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <MainNavBar />
      {children}
      {/* <MainFooter /> */}
      <Footer02 />
      {/* <FooterResponsive /> */}
      {/* <FooterFullWidth /> */}

    </>
  )
}