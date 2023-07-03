import EthCrypto from "eth-crypto";

const encryptWithSignature = async (
  signerPrivateKey: string,
  readerPublicKey: string,
  message: string
) => {
  const signature = EthCrypto.sign(
    signerPrivateKey,
    EthCrypto.hash.keccak256(message)
  );
  const payload = {
    message,
    signature,
  };
  console.log("DON PUBLIC KEY: " + readerPublicKey);
  console.log("PRIVATE KEY: " + signerPrivateKey);
  const encrypted = await EthCrypto.encryptWithPublicKey(
    readerPublicKey,
    JSON.stringify(payload)
  );
  return EthCrypto.cipher.stringify(encrypted);
};

export default async function getSecrets(accessToken: string) {
  let offchainSecrets = {};

  offchainSecrets = {
    "0x0": Buffer.from(
      await encryptWithSignature(
        process.env.NEXT_PUBLIC_PRIVATE_KEY!,
        process.env.NEXT_PUBLIC_DON_PUBLIC_KEY!,
        JSON.stringify({
          accessToken: accessToken,
          imageApiKey: process.env.NEXT_PUBLIC_IMAGE_API_KEY!,
          nftStorageApiKey: process.env.NEXT_PUBLIC_NFT_STORAGE_API_KEY!,
        })
      ),
      "hex"
    ).toString("base64"),
  };
  console.log("Encrypted secrets:", offchainSecrets);

  const response = await fetch("https://api.github.com/gists", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_API_TOKEN}`,
    },
    body: JSON.stringify({
      public: false,
      files: {
        [`encrypted-functions-request-data-${Date.now()}.json`]: {
          content: JSON.stringify(offchainSecrets),
        },
      },
    }),
  });
  console.log("Gist created:");
  const res = await response.json();
  const secretsUrl = res.html_url + "/raw";
  console.log("Secrets URL:", secretsUrl);

  const secretUrlHexEncrypted =
    "0x" +
    EthCrypto.cipher.stringify(
      await EthCrypto.encryptWithPublicKey(
        process.env.NEXT_PUBLIC_DON_PUBLIC_KEY!,
        secretsUrl
      )
    );
  console.log("Secrets URL hex encrypted: ", secretUrlHexEncrypted);

  return secretUrlHexEncrypted;
}
