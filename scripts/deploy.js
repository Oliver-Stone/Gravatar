const hre = require("hardhat");
const { getContractAddress } = require('@ethersproject/address')
const ethers = hre.ethers;
const utils = ethers.utils;

async function main() {
	  //const Gravatar = await ethers.getContractFactory("GravatarRegistry")  //  
	  
	  const signers = await ethers.getSigners();
	  const accounts = signers.map(s => s.address)
	  
	  /*const registry = await Gravatar.deploy()
	  await registry.deployed()
	  console.log(`gravatar.address: ${registry.address}`);

	  await registry.createGravatar('Carl', 'https://thegraph.com/img/team/team_04.png')
	  */

	  const registry = await (await ethers.getContractFactory("GravatarRegistry")).attach("0x4cc78c9d049a4c9def7c17d6d9a2c853cad00367");
	  console.log("Live registry Address:\t" + registry.address);

	  await registry.createGravatar('Carl', 'https://thegraph.com/img/team/team_04.png')
	
	  //接下来即将部署的合约地址
      /*
	  const [owner] = await ethers.getSigners()
	  const transactionCount = await owner.getTransactionCount()
	  const futureAddress = getContractAddress({
		from: owner.address,
		nonce: transactionCount
  	  })
      console.log(`futureAddress: ${futureAddress}`);  
      */
};


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
 main()
   .then(() => process.exit(0))
     .catch((error) => {
         console.error(error);
             process.exit(1);
               });
