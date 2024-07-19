import React, { useEffect, useRef } from 'react';
import logo from './PNGtoSVG.svg';
import './App.css';
import styles from './App.module.css';

// Import the new images
import imagePath from './Aizen.png';
import newImage2 from './Hogyoku.png';
import newImage3 from './Kisuke.png';
import newImage4 from './Wonderweiss.png';

function App() {
  const bulletListRef = useRef(null);
  const textRef = useRef(null);
  const imageRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const iconRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          } else {
            entry.target.classList.remove(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = bulletListRef.current.querySelectorAll('li');
    items.forEach((item) => {
      observer.observe(item);
    });

    const textItems = textRef.current.querySelectorAll(`.${styles.middleText}, .${styles.middleTextLarge}`);
    textItems.forEach((item) => {
      observer.observe(item);
    });

    imageRefs.forEach((ref) => {
      observer.observe(ref.current);
    });

    iconRefs.forEach((ref) => {
      observer.observe(ref.current);
    });

    return () => {
      items.forEach((item) => {
        observer.unobserve(item);
      });
      textItems.forEach((item) => {
        observer.unobserve(item);
      });
      imageRefs.forEach((ref) => {
        observer.unobserve(ref.current);
      });
      iconRefs.forEach((ref) => {
        observer.unobserve(ref.current);
      });
    };
  }, [styles, imageRefs, iconRefs]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={styles.appBackground}>
      <div className={styles.banner}>
        <div className={styles.bannerContentWrapper}>
          <div className={styles.bannerContent}>
            <span>Buy Hogyokus!</span>
            <span>$HOKU</span>
            <span>Buy Hogyokus!</span>
            <span>$HOKU</span>
            <span>Buy Hogyokus!</span>
            <span>$HOKU</span>
            <span>Buy Hogyokus!</span>
          </div>
          <div className={styles.bannerContent}>
            <span>$HOKU</span>
            <span>Buy Hogyokus!</span>
            <span>$HOKU</span>
            <span>Buy Hogyokus!</span>
            <span>$HOKU</span>
            <span>Buy Hogyokus!</span>
            <span>$HOKU!</span>
          </div>
        </div>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="Hōgyoku logo" />
        <a
          className={styles.headerText}
          href="https://dexscreener.com/solana/evv3nemqdbjsfrpzucte2zkkremkuc3esjis1a8muehp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy hōgyokus!
        </a>
      </header>
      <div className={styles.scrollableContent} ref={textRef}>
        <div className={`${styles.middleText} ${styles.visible}`}>
          Discover the Power of Hogyokus!
        </div>
        <div className={`${styles.middleTextLarge} ${styles.visible}`}>
          How do you determine the desires you manifest?
        </div>
        <div className={styles.container}>
          <p>
            The Hōgyoku, much like a revolutionary crypto asset,
            possesses unparalleled potential. It transcends the ordinary boundaries,
            breaking down the divide between Hollows and Shinigami,
            thus granting unimaginable power.
            An investment in Hōgyokus is an investment in limitless potential and untapped power.
          </p>
          <img src={imagePath} alt="Hōgyoku" className={`${styles.image} ${styles.slideIn}`} ref={imageRefs[0]} />
        </div>
        <div className={`${styles.container} ${styles.alternate}`}>
          <p>
            The true power of the Hōgyoku lies in its rarity and the insatiable
            demand it creates. In the world of crypto, scarcity drives value.
            The Hōgyoku is a unique artifact, with only a limited number in existence.
            This inherent scarcity makes it an incredibly valuable asset,
            much like Bitcoin's limited supply.
          </p>
          <img src={newImage2} alt="Hōgyoku" className={`${styles.image} ${styles.specialImage} ${styles.slideIn}`} ref={imageRefs[1]} />
        </div>
        <div className={styles.container}>
          <p>
            The Hōgyoku is a game-changer, capable of transforming the very
            fabric of existence. This revolutionary potential mirrors that of
            blockchain technology, making Hōgyokus a part of a movement that will
            redefine power and potential.
          </p>
          <img src={newImage3} alt="Hōgyoku" className={`${styles.image} ${styles.slideIn}`} ref={imageRefs[2]} />
        </div>
        <div className={`${styles.container} ${styles.alternate}`}>
          <p>
            The Hōgyoku’s ability to read hearts and grant desires offers unique
            capabilities beyond mere power. This innovative utility makes it a
            versatile and valuable asset, akin to a cryptocurrency with multiple use
            cases and applications.
          </p>
          <img src={newImage4} alt="Hōgyoku" className={`${styles.image} ${styles.largeImage} ${styles.slideIn}`} ref={imageRefs[3]} />
        </div>
        <div className={styles.container}>
          <ul className={styles.bulletList} ref={bulletListRef}>
            {[
              "Phase 1: Onboard new members with the power of the Hōgyoku and start Moonshot launch",
              "Phase 2: Raise initial funds and distribute Hōgyokus",
              "Phase 3: 1,000 Hōgyoku holders unlock their true desires",
              "Phase 4: 2,500 Hōgyoku holders to manifest their dreams",
              "Phase 5: 5,000 Hōgyoku holders to transcend",
              "Phase 6: Fuse your Hogyokus to unlock new levels of power and transform NFTs!"
            ].map((item, index) => (
              <li key={index} style={{ "--li-index": index }}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://t.me/+NjwqPqYVGD9mMjJh" target="_blank" rel="noopener noreferrer" className={`${styles.icon} ${styles.bounce1}`} ref={iconRefs[0]}>
            <i className="fab fa-telegram-plane"></i>
          </a>
          <a href="https://x.com/Hogyokus_?t=t4co4bJ3DnVFSIBbpRSbOA&s=09" target="_blank" rel="noopener noreferrer" className={`${styles.icon} ${styles.bounce2}`} ref={iconRefs[1]}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://dexscreener.com/solana/evv3nemqdbjsfrpzucte2zkkremkuc3esjis1a8muehp" target="_blank" rel="noopener noreferrer" className={`${styles.icon} ${styles.bounce3}`} ref={iconRefs[2]}>
            <i className="fas fa-chart-line"></i>
          </a>
        </div>
      </div>
      <div className={styles.bottomBanner}>
        <div className={styles.bannerContentWrapper}>
          <div className={styles.bannerContent}>
            <span>Buy Hogyokus!</span>
            <span>$HOKU</span>
            <span>Buy Hogyokus!</span>
            <span>$HOKU</span>
            <span>Buy Hogyokus!</span>
            <span>$HOKU</span>
            <span>Buy Hogyokus!</span>
          </div>
          <div className={styles.bannerContent}>
            <span>$HOKU</span>
            <span>Buy Hogyokus!</span>
            <span>$HOKU</span>
            <span>Buy Hogyokus!</span>
            <span>$HOKU</span>
            <span>Buy Hogyokus!</span>
            <span>$HOKU!</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
