import styles from '@/styles/components/pageTitle/pageTitle.module.css';

interface pageProps {
  title: string
}

const PageTitle = (props: pageProps) => {
  return (
    <div className={`${styles.pageTitle}`}>
      <h1 className={`title`}>{ props.title }</h1>
    </div>
  );
}

export default PageTitle;