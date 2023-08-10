import { deployMarketplace } from "./deployMarketplace";


deployMarketplace().catch((error) => {
	console.error(error);
	process.exitCode = 1;
  });