import { container } from "tsyringe";

import { ICloudWiseNetworkRepository } from "src/modules/job/domain/repositories/ICloudWiseNetworkRepository";
import { CloudWiseNetworkRepository } from "src/modules/job/infra/scraping/repositories/CloudWiseNetworkRepository";

container.registerSingleton<ICloudWiseNetworkRepository>(
  'CloudWiseNetworkRepository',
  CloudWiseNetworkRepository
);