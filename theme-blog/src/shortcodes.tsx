/** @jsx jsx */

import { jsx, Box as BaseBox, Flex as BaseFlex } from 'theme-ui';
import YouTube from './components/YouTube';
import ReadMore, { ReadMoreWrapper } from './components/ReadMore';
import Figure from './components/Figure';

// Wrappers around Box and Flex that let us pass sx props through from MDX.
// https://github.com/system-ui/theme-ui/issues/178
const Box = props => <BaseBox {...props} />;
const Flex = props => <BaseFlex {...props} />;

const wrapper = ({ children }) => {
  return <ReadMoreWrapper>{children}</ReadMoreWrapper>;
};

/**
 * Define all shortcodes needed in blog posts here.
 *
 * Shortcodes defined here will be available when the RSS feed generation is
 * run.
 */
const MDX_COMPONENTS = { YouTube, Box, Flex, Figure, ReadMore, wrapper };

export default MDX_COMPONENTS;
