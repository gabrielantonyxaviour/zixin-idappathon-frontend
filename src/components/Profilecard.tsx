import styles from "../../styles/Profilecard.module.css";
import React, { useState } from "react";
import { useAccount, useContractWrite, useNetwork } from "wagmi";
import {
  SHIJI_POLYGON_ABI,
  SHIJI_POLYGON_ADDRESS,
  ZIXIN_POLYGON_ABI,
  ZIXIN_POLYGON_ADDRESS,
} from "../utils/constants";
interface ChildComponentProps {
  name: string;
  imgsrc: string;
  description: string;
  isZixin: boolean;
}

const Profilecard: React.FC<ChildComponentProps> = (props) => {
  const { chain, chains } = useNetwork();
  const { address } = useAccount();
  const { name, imgsrc, description, isZixin } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedChainId, setSelectedChainId] = useState(0);

  const { write: transferCrossChain } = useContractWrite({
    address: isZixin ? ZIXIN_POLYGON_ADDRESS : SHIJI_POLYGON_ADDRESS,
    abi: isZixin ? ZIXIN_POLYGON_ABI : SHIJI_POLYGON_ABI,
    functionName: "transferCrossChain",
    args: isZixin
      ? [
          selectedChainId.toString(),
          [[0], ["0x"], address],
          "0x00000000000186a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        ]
      : [
          selectedChainId.toString(),
          [0, address],
          "0x00000000000186a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        ],
  });
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option: string, id: number) => {
    setSelectedOption(option);
    setSelectedChainId(id);
    setIsOpen(false);
  };
  return (
    <div className={styles.whole}>
      <img
        className={styles.imageIcon1}
        alt=""
        src={imgsrc}
        onClick={() => {
          window.open(
            "https://bafybeiaymcnzdx3qdwovayuwpdv6fobea47w5q7wa4px3ymcwxisp7hcbi.ipfs.nftstorage.link/metadata.json"
          );
        }}
      />
      <div className={styles.text5}>
        <b className={styles.linkedinAuth}>{name}</b>
        <div className={styles.authenticateWithLinkedinContainer}>
          <p className={styles.authenticateWithLinkedin}>
            {description == "shiji"
              ? `You have more than 10 followers in Github`
              : description}
          </p>
          <p className={styles.authenticateWithLinkedin}>You own this badge</p>
          {chain?.id == 80001 && (
            <div className="flex ">
              <button
                className="bg-blue-600 text-white font-semibold p-2 m-2 rounded-lg"
                onClick={() => {
                  console.log("clicked Transfer Cross chain");
                  transferCrossChain();
                }}
              >
                Transfer Cross chain
              </button>
              <div className="relative">
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-4 mx-2 py-2 my-auto text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-500"
                  onClick={toggleDropdown}
                >
                  {selectedOption || "Choose a chain"}
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform duration-200 ${
                      isOpen ? "transform rotate-180" : ""
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 14.293a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L10 11.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-4 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="absolute right-0 z-10 w-full mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                    <ul>
                      {chains.map((option, index) => (
                        <li
                          key={index}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-black"
                          onClick={() =>
                            handleOptionSelect(option.name, option.id)
                          }
                        >
                          {option.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Profilecard;
