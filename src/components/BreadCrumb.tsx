import React from 'react';
import Link from 'next/link';
import '@/styles/components/breadcrumb.css';

interface BreadcrumbItem {
  href?: string;
  label: string;
  active?: boolean;
}

interface BreadcrumbProps {
  backgroundImage?: string;
  title: string;
  subtitle?: string;
  items: BreadcrumbItem[];
  className?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  backgroundImage = '/img/bg/04.jpg',
  title,
  subtitle = 'INN TOWN HOTEL',
  items,
  className = ''
}) => {
  return (
    <section 
      className={`breadcrumb-area ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container">
        <div className="breadcrumb-text">
          <span>{subtitle}</span>
          <h2 className="page-title">{title}</h2>

          <ul className="breadcrumb-nav">
            {items.map((item, index) => (
              <li key={index} className={item.active ? 'active' : ''}>
                {item.href && !item.active ? (
                  <Link href={item.href}>
                    {item.label}
                  </Link>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;