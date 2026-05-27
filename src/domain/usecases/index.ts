import { IFirmRepository } from '../repositories';
import { FirmOverview } from '../entities';

export class GetFirmOverviewUseCase {
  constructor(private readonly repository: IFirmRepository) {}

  async execute(): Promise<FirmOverview> {
    return this.repository.getOverview();
  }
}
