// Colors.stories.js
import { getAllColorClasses } from '../../storybook-colors.js';
import { renderColorBlocks } from "./Colors.js";

export default {
    title: 'Foundation/Colors',
    tags: ['autodocs'],
};

// Extract only non-hover classes for each category
const neoColorClasses = getAllColorClasses().filter(className => className.startsWith('neo-') && !className.includes('-hover'));
const mutedColorClasses = getAllColorClasses().filter(className => className.startsWith('muted-') && !className.includes('-hover'));
const feedbackColorClasses = getAllColorClasses().filter(className => className.startsWith('feedback-') && !className.includes('-hover'));

// Story for Neo Colors
export const NeoColors = () => renderColorBlocks(neoColorClasses);

// Story for Muted Colors
export const MutedColors = () => renderColorBlocks(mutedColorClasses);

// Story for Feedback Colors
export const FeedbackColors = () => renderColorBlocks(feedbackColorClasses);
