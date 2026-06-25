const enabled = !!(process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
  process.env.KEYSTATIC_GITHUB_CLIENT_SECRET &&
  process.env.KEYSTATIC_SECRET);

import Client from './client';
import Disabled from './disabled';

export default function KeystaticPage() {
  return enabled ? <Client /> : <Disabled />;
}
