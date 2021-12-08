import { Scheduler } from 'tesseract.js';
import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { initScheduler, InitSchedulerProps } from '../utils/tesseract';
import useLogger from './useLogger';
import { ZeroOneRange } from '../utils/types';

type UseSchedulerProps = InitSchedulerProps;

type UseSchedulerOutput = {
  scheduler: Scheduler | null,
  loaded: boolean,
  loadingProgress: ZeroOneRange,
  error: string | null,
};

const useTesseract = (props: UseSchedulerProps): UseSchedulerOutput => {
  const { workersNum, language } = props;
  const [loaded, setLoaded] = useState<boolean>(false);
  const [loadingProgress, serLoadingProgress] = useState<ZeroOneRange>(0);
  const [error, setError] = useState<string | null>(null);

  const scheduler = useRef<Scheduler | null>(null);

  const logger = useLogger({ context: 'useTesseract' });

  const onSchedulerLoading = (progress: ZeroOneRange): void => {
    logger.logDebug('onSchedulerLoading', {
      progress,
      workersNum: scheduler.current ? scheduler.current.getNumWorkers() : 0,
    });
    serLoadingProgress(progress);
  };

  const onSchedulerLoadingCallback = useCallback(onSchedulerLoading, [logger]);

  const onSchedulerError = (schedulerError: any): void => {
    let errMessage = 'Scheduler error';
    if (typeof schedulerError === 'string') {
      errMessage = schedulerError;
    } else if (schedulerError && schedulerError.message && typeof schedulerError.message === 'string') {
      errMessage = schedulerError.message;
    }
    setError(errMessage);
  };

  const onSchedulerErrorCallback = useCallback(onSchedulerError, []);

  useEffect((): () => void => {
    logger.logDebug('useEffect');
    if (scheduler && scheduler.current) {
      logger.logDebug('useEffect: skip');
      return (): void => {};
    }
    initScheduler({
      workersNum,
      language,
      onLoading: onSchedulerLoadingCallback,
      onError: onSchedulerErrorCallback,
    })
      .then((ocrScheduler: Scheduler) => {
        logger.logDebug('useEffect: init finished', {
          ocrScheduler,
          workersNum: ocrScheduler.getNumWorkers(),
          queueLen: ocrScheduler.getQueueLen(),
        });
        scheduler.current = ocrScheduler;
        setLoaded(true);
      });

    return (): void => {
      logger.logDebug('useEffect: shutdown', { scheduler: scheduler.current });
      if (scheduler.current) {
        logger.logDebug('useEffect: shutdown: terminating the scheduler');
        scheduler.current.terminate().then(() => {
          logger.logDebug('useEffect: shutdown: scheduler is terminated');
        });
      }
    };
  }, [workersNum, language, logger, onSchedulerErrorCallback, onSchedulerLoadingCallback]);

  return {
    scheduler: scheduler.current,
    loadingProgress,
    loaded,
    error,
  };
};

export default useTesseract;
