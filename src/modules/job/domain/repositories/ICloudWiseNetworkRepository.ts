export interface ICloudWiseNetworkRepository { 
  scrapeData(): Promise<any[]>;
}