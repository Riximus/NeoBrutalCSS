// Typography.stories.js
import {createHeader, createText, getTypographyClasses} from './Typography.js';
import {Description, Stories, Subtitle, Title} from "@storybook/blocks";
import * as React from "react";

export default {
    title: 'Foundation/Typography',
    tags: ['autodocs'],
    parameters: {
        docs: {
            // TODO - Add description
            page: () => (
                <>
                    <Title/>
                    <Subtitle>Explore Typography Styles</Subtitle>
                    <Description>
                        This section allows you to see different typography styles applied to headers and texts.
                    </Description>
                    <Stories />
                </>
            ),
        }
    },
};

const headerClasses = ['Default', ...getTypographyClasses().filter(c => c.startsWith('neo-header'))];
const textClasses = ['Default', ...getTypographyClasses().filter(c => c.startsWith('neo-text'))];

// Story for Headers
/**
 * There are 9 font weights available. The default font weight is 400.
 * The font weight can be set using the following classes:
 * - neo-header--thin
 * - neo-header--light
 * - neo-header--extra-light
 * - Regular is the default font weight
 * - neo-header--medium
 * - neo-header--semi-bold
 * - neo-header--bold
 * - neo-header--extra-bold
 * - neo-header--black
 */
export const Headers = (args) => {
    const container = document.createElement('div');
    for (let i = 1; i <= 6; i++) {
        // Apply the class only if it is not the default class
        const className = args.class === 'Default' ? '' : args.class;
        container.appendChild(createHeader(`h${i}`, `Header ${i}`, className));
    }
    return container;
};

Headers.argTypes = {
    class: {
        control: 'select',
        options: headerClasses,
    },
};

Headers.args = {
    class: '', // Default class for headers
};

// Story for Texts
/**
 * There are 9 font weights available with italic styles. The default font weight is 400.
 * The font weight can be set using the following classes:
 * - neo-text--thin
 * - neo-text--thin-italic
 * - neo-text--light
 * - neo-text--light-italic
 * - Regular is the default font weight
 * - neo-text--italic
 * - neo-text--medium
 * - neo-text--medium-italic
 * - neo-text--semi-bold
 * - neo-text--semi-bold-italic
 * - neo-text--bold
 * - neo-text--bold-italic
 * - neo-text--extra-bold
 * - neo-text--extra-bold-italic
 * - neo-text--black
 * - neo-text--black-italic
 */
export const Texts = (args) => {
    const container = document.createElement('div');
    // Apply the class only if it is not the default class
    const className = args.class === 'Default' ? '' : args.class;
    container.appendChild(createText('Regular text', className));
    return container;
};

Texts.argTypes = {
    class: {
        control: 'select',
        options: textClasses,
    },
};

Texts.args = {
    class: '', // Default class for texts
};
