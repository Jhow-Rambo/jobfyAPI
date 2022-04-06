import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListCloudWiseNetworkJobs from 'src/modules/job/services/ListCloudWiseNetworkJobs';

export default class CloudWiseNetworkController {
  public async listJobs(request: Request, response: Response): Promise<Response> { 
    const cloudWiseNetworks = await container.resolve(ListCloudWiseNetworkJobs).execute();

    return response.status(200).json(cloudWiseNetworks);
  }
}