import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>
            Welcome to{" "}
            <span className={styles.gradientText0}>
              <a
                href="https://app.nftearth.exchange"
                target="_blank"
                rel="noopener noreferrer"
              >
                OMNICHAIN NFTEarth
              </a>
            </span>
          </h1>

          <p className={styles.description}>
            Get started by connecting your wallet
          </p>

          <div className={styles.connect}>
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center",
              }}
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://app.nftearth.exchange/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/portal-preview.png"
              alt="App"
              width={300}
              height={200}
            />
            <div className={styles.cardText}>
              <h2 className={styles.gradientText1}>dApp ➜</h2>
              <p>
                Trade, create, and manage your NFTs on the NFT hub.
              </p>
            </div>
          </a>

          <a
            href="https://thirdweb.com/dashboard"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/dashboard-preview.png"
              alt="Placeholder preview of starter"
              width={300}
              height={200}
            />
            <div className={styles.cardText}>
              <h2 className={styles.gradientText2}>Launchpad ➜</h2>
              <p>
                Deploy, configure, and manage your NFT collections in an Omnichain-mobile world, all through NFTEarth!
              </p>
            </div>
          </a>

          <a
            href="https://portal.arbitrum.io/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/templates-preview.png"
              alt="Placeholder preview of portal"
              width={300}
              height={200}
            />
            <div className={styles.cardText}>
              <h2 className={styles.gradientText3}>Arbitrum One Portal</h2>
              <p>
              Discover dApps built on the largest Layer2.
              </p>
            </div>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Home;
