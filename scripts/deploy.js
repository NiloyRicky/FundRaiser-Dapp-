const hre=require("hardhat");

async function main(){
   // const Greeter=await hre.ethers.getSigners();
 const CampaignFactory=await hre.ethers.getContractFactory("CampaignFactory");
 console.log("Deploying contract...");
 const campaignFactory=await CampaignFactory.deploy();
 await campaignFactory.waitForDeployment();
 const address = await campaignFactory.getAddress();
 
console.log("Factory deployed to:",address)

}
main()
.then(()=>process.exit(0))
.catch((error)=>{console.log(error)
    process.exit(1);
})