import React, { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import { useAccount, useContractRead, useContractWrite } from "wagmi";
import styles from "../../styles/Mynfts.module.css";
import { ZIXIN_POLYGON_ABI, ZIXIN_POLYGON_ADDRESS } from "../utils/constants";
import Profilecard from "./Profilecard";

const Myzixins: FunctionComponent = () => {
  const { address } = useAccount();
  const [githubData, setGithubData] = useState({});
  const [googleData, setGoogleData] = useState({});
  const {
    data: googleTokenId,
    isError: isGoogleError,
    isLoading: isLoadingError,
  } = useContractRead({
    address: ZIXIN_POLYGON_ADDRESS,
    abi: ZIXIN_POLYGON_ABI,
    functionName: "zixinToTokenId",
    args: [0, address],
  });
  const {
    data: githubTokenId,
    isError: isGithubError,
    isLoading: isGithubLoading,
  } = useContractRead({
    address: ZIXIN_POLYGON_ADDRESS,
    abi: ZIXIN_POLYGON_ABI,
    functionName: "zixinToTokenId",
    args: [1, address],
  });
  const {
    data: githubMetadata,
    isError: isGithubMetadataError,
    isLoading: isGithubMetadataLoading,
  } = useContractRead({
    address: ZIXIN_POLYGON_ADDRESS,
    abi: ZIXIN_POLYGON_ABI,
    functionName: "tokenURI",
    args: [githubTokenId],
  });
  const {
    data: googleMetadata,
    isError: isGoogleMetadataError,
    isLoading: isGoogleMetadataLoading,
  } = useContractRead({
    address: ZIXIN_POLYGON_ADDRESS,
    abi: ZIXIN_POLYGON_ABI,
    functionName: "tokenURI",
    args: [googleTokenId],
  });

  useEffect(() => {
    if (
      !isGoogleMetadataLoading &&
      !isGithubMetadataLoading &&
      !isGoogleMetadataError &&
      !isGithubMetadataError &&
      !isGithubLoading &&
      !isGoogleError
    ) {
      console.log("Hey");
      console.log(githubMetadata);
      console.log(googleMetadata);
      fetch(githubMetadata)
        .then((response) => response.json())
        .then((data) => {
          setGithubData(data);
        })
        .catch((error) => {
          console.log(error);
        });
      fetch(googleMetadata)
        .then((response) => response.json())
        .then((data) => {
          setGoogleData(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("What");
    }
  }, []);
  return (
    <div className={styles.whole}>
      <div className={styles.back}>
        <div className={styles.cards}>
          <div className={styles.zixins}>
            <Profilecard
              name={githubData.name}
              description={githubData.description}
              imgsrc={githubData.image}
              isZixin={true}
            />
          </div>
          <div className={styles.zixins}>
            <Profilecard
              name={googleData.name}
              description={googleData.description}
              imgsrc={googleData.image}
              isZixin={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myzixins;
