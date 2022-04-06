import { inject, injectable } from 'tsyringe';
import { ICloudWiseNetworkRepository } from '../domain/repositories/ICloudWiseNetworkRepository';

@injectable()
export default class ListCloudWiseNetworkJobs {
  constructor(
    @inject('CloudWiseNetworkRepository')
    private cloudWiseNetwork: ICloudWiseNetworkRepository,
  ) { }
  
  public async execute(): Promise<any[]> { 

    const cloudWiseNetworks = await this.cloudWiseNetwork.scrapeData();

    return cloudWiseNetworks;
  }
}