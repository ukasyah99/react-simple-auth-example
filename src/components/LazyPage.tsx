import { Suspense } from 'react';

interface LazyPageProps {
  children: any;
}

const LazyPage = ({ children }: LazyPageProps) => (
  <Suspense fallback={<h1>...</h1>}>
    {children}
  </Suspense>
);

export default LazyPage;
