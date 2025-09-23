'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Breadcrumb from '../../components/BreadCrumb';

export default function AboutPage() {
  const breadcrumbItems = [
        { href: '/', label: 'Hakkımızda' },
        { label: 'Hakkımızda', active: true }
    ];
  return (
    <>
      <Header />
      <Breadcrumb
                title="Hakkımızda"
                subtitle="INN TOWN HOTEL"
                backgroundImage="/img/bg/04.jpg"
                items={breadcrumbItems}
            />
      <Footer />
    </>
  )
}