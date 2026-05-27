import { FirmOverview } from '../entities';

export interface IFirmRepository {
  getOverview(): Promise<FirmOverview>;
}
