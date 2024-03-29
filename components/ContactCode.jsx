import styles from '../styles/ContactCode.module.css';

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;website:{' '}
        <a href="charnicetatumbchain.vercel.app" target="_blank" rel="noopener">
          charnicetatum.me
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;email:{' '}
        <a
          href="mailto:consult@charnicetatum.com"
          target="_blank"
          rel="noopener"
        >
          consult@charnicetatum.com
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;github:{' '}
        <a href="https://github.com/ctatum20" target="_blank" rel="noopener">
          ctatum20
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;linkedin:{' '}
        <a
          href="https://www.linkedin.com/in/charnice-tatum-0a9017111/"
          target="_blank"
          rel="noopener"
        >
          charnicetatum
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;twitter:{' '}
        <a
          href="https://www.twitter.com/charnicetatum_"
          target="_blank"
          rel="noopener"
        >
          charnicetatum_
        </a>
        ;
      </p>
      {/* <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;instagram:{' '}
        <a
          href="https://www.instagram.com/iamnitinr"
          target="_blank"
          rel="noopener"
        >
          iamnitinr
        </a>
        ;
      </p> */}
      {/* <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;polywork:{' '}
        <a
          href="https://www.polywork.com/nitinranganath"
          target="_blank"
          rel="noopener"
        >
          nitinranganath
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;telegram:{' '}
        <a href="https://t.me/iamnitinr" target="_blank" rel="noopener">
          iamnitinr
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;codepen:{' '}
        <a href="https://codepen.io/itsnitinr" target="_blank" rel="noopener">
          nitinranganath
        </a>
        ;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;codesandbox:{' '}
        <a
          href="https://codesandbox.io/u/itsnitinr"
          target="_blank"
          rel="noopener"
        >
          itsnitinr
        </a>
        ;
      </p> */}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
