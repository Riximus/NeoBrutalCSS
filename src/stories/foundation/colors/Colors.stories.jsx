// Colors.stories.js
import { getAllColorClasses } from '../../storybook-colors.js';
import { renderColorBlocks } from "./Colors.js";
import {Description, Stories, Subtitle, Title} from "@storybook/blocks";
import * as React from "react";

export default {
    title: 'Foundation/Colors',
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title/>
                    <Subtitle></Subtitle>
                    <Description>
                        The **.neo-input-text** class is designed for styling text-based input fields like text, search,
                        number, password, email, and telephone.
                    </Description>
                    <Stories />
                </>
            ),
        }
    },
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
