import { useState, useEffect } from 'react';
import { MockFirmRepository } from '../../data/repositories/MockFirmRepository';
import { GetFirmOverviewUseCase } from '../../domain/usecases';
import { FirmOverview } from '../../domain/entities';

interface UseFirmDataReturn {
  data: FirmOverview | null;
  loading: boolean;
}

export function useFirmData(): UseFirmDataReturn {
  const [data, setData] = useState<FirmOverview | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const repository = new MockFirmRepository();
    const useCase = new GetFirmOverviewUseCase(repository);

    useCase.execute().then((overview) => {
      setData(overview);
      setLoading(false);
    });
  }, []);

  return { data, loading };
}
