import React, { SVGProps } from 'react';

import { ReactComponent as XIcon } from './feathericons/x.svg';
import { ReactComponent as AlertCircleIcon } from './feathericons/alert-circle.svg';
import { ReactComponent as Link2Icon } from './feathericons/link-2.svg';
import { ReactComponent as LinkIcon } from './feathericons/link.svg';
import { ReactComponent as ExternalLinkIcon } from './feathericons/external-link.svg';
import { ReactComponent as GitHubIcon } from './feathericons/github.svg';
import { ReactComponent as EditIcon } from './feathericons/edit-3.svg';
import { ReactComponent as BookOpenIcon } from './feathericons/book-open.svg';
import { ReactComponent as SearchIcon } from './feathericons/search.svg';
import { ReactComponent as SmartphoneIcon } from './feathericons/smartphone.svg';
import { ReactComponent as EyeIcon } from './feathericons/eye.svg';
import { ReactComponent as YoutubeIcon } from './feathericons/youtube.svg';
import { ReactComponent as LinksDetectorLogoIcon } from './vectr/links-detector-logo.svg';

export enum ICON_KEYS {
  X = 'x',
  ALERT_CIRCLE = 'alert-circle',
  LINK = 'link',
  LINK_2 = 'link-2',
  EXTERNAL_LINK = 'external-link',
  GIT_HUB = 'github',
  EDIT = 'edit',
  LINKS_DETECTOR_LOGO = 'links-detector-logo',
  BOOK_OPEN = 'book-open',
  SEARCH = 'search',
  SMARTPHONE = 'smartphone',
  EYE = 'eye',
  YOUTUBE = 'youtube',
}

type IconType = {
  component: React.FunctionComponent<SVGProps<SVGSVGElement> & { title?: string | undefined; }>,
  fillCurrent?: boolean,
}

type IconsType = {
  [iconKey in ICON_KEYS]: IconType;
}

export const ICONS: IconsType = {
  [ICON_KEYS.X]: {
    component: XIcon,
  },
  [ICON_KEYS.ALERT_CIRCLE]: {
    component: AlertCircleIcon,
    fillCurrent: false,
  },
  [ICON_KEYS.LINK]: {
    component: LinkIcon,
    fillCurrent: false,
  },
  [ICON_KEYS.LINK_2]: {
    component: Link2Icon,
    fillCurrent: false,
  },
  [ICON_KEYS.EXTERNAL_LINK]: {
    component: ExternalLinkIcon,
    fillCurrent: false,
  },
  [ICON_KEYS.GIT_HUB]: {
    component: GitHubIcon,
    fillCurrent: false,
  },
  [ICON_KEYS.EDIT]: {
    component: EditIcon,
    fillCurrent: false,
  },
  [ICON_KEYS.LINKS_DETECTOR_LOGO]: {
    component: LinksDetectorLogoIcon,
    fillCurrent: false,
  },
  [ICON_KEYS.BOOK_OPEN]: {
    component: BookOpenIcon,
    fillCurrent: false,
  },
  [ICON_KEYS.SEARCH]: {
    component: SearchIcon,
    fillCurrent: false,
  },
  [ICON_KEYS.SMARTPHONE]: {
    component: SmartphoneIcon,
    fillCurrent: false,
  },
  [ICON_KEYS.EYE]: {
    component: EyeIcon,
    fillCurrent: false,
  },
  [ICON_KEYS.YOUTUBE]: {
    component: YoutubeIcon,
    fillCurrent: false,
  },
};
