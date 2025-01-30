import NProgress from 'nprogress';

import { useRouter as useBaseRouter } from 'next/navigation';

export function useCustomRouter() {
  const router = useBaseRouter();

  const { push } = router;

  router.push = async (...args: Parameters<typeof push>) => {
    NProgress.start();

    return push(...args);
  };

  return router;
}
