import Header from "@/components/Header";
import Breadcrumb from "@/components/BreadCrumb";
import Footer from "@/components/Footer";
import ExelyBooking from '@/components/ExelyBooking';



export default function ReservationPage() {

  const breadcrumbItems = [
    { href: '/reservation', label: 'Rezervasyon' },
    { label: 'Rezervasyon', active: true }
  ];

  return (
    <>
      <Header />
      <Breadcrumb
        title="Rezervasyon"
        subtitle="INN TOWN HOTEL"
        backgroundImage="/img/bg/04.jpg"
        items={breadcrumbItems}
      />
      <ExelyBooking type="booking-form" />
      <Footer />
    </>
  );
}
